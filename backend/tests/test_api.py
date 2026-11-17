import pytest
from fastapi.testclient import TestClient
from main import app, identity, decode_upi, url_checks
client=TestClient(app)
@pytest.mark.parametrize('url',['http://127.0.0.1','http://169.254.169.254','http://192.168.1.1','http://localhost','file:///etc/passwd','https://user:pass@example.com','http://2130706433','http://[::1]','https://example.com:9000'])
def test_reject_unsafe_url(url):
    with pytest.raises(ValueError):url_checks(url)
def test_public_url_not_visited():assert url_checks('https://example.com')['visited'] is False
@pytest.mark.parametrize('text',['upi://pay?pa=a@upi&pa=b@upi','upi://pay?pa=shop@upi&am=-2','upi://pay?pa=shop@upi&cu=USD','upi://evil?pa=shop@upi'])
def test_bad_upi(text):
    with pytest.raises(ValueError):decode_upi(text)
def test_upi_decode():assert decode_upi('upi://pay?pa=shop@upi&pn=Store&am=20')['pn']=='Store'
def test_auth_fails_closed(monkeypatch):
    monkeypatch.delenv('SUPABASE_URL',raising=False)
    assert client.get('/api/investigations').status_code==503
def test_admin_forbidden(monkeypatch):
    monkeypatch.setenv('ADMIN_USER_IDS','')
    app.dependency_overrides[identity]=lambda:{'id':'ordinary-user','authorization':'Bearer test'}
    try:assert client.get('/api/admin/overview').status_code==403
    finally:app.dependency_overrides.clear()
def test_unconfigured_deep_scan_is_honest():
    app.dependency_overrides[identity]=lambda:{'id':'user'}
    try:
        result=client.post('/api/url/deep-scan',json={'url':'https://example.com','consent':True})
        assert result.json()['status']=='Unsupported'
    finally:app.dependency_overrides.clear()
def test_ai_no_evidence_no_fabrication(monkeypatch):
    monkeypatch.delenv('GEMINI_API_KEY',raising=False)
    app.dependency_overrides[identity]=lambda:{'id':'user'}
    try:assert client.post('/api/assistant/messages',json={'question':'Is it safe?'}).json()['ai'] is False
    finally:app.dependency_overrides.clear()
