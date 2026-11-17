# TrustPay Sentinel AI

**Investigate. Verify. Understand. Pay safer.**

A light-theme React/TypeScript cybersecurity prototype with a FastAPI backend and Supabase migration. This is a working **v0.1 core prototype**, not the entire production platform described in the brief. Read [feature status](docs/FEATURE_STATUS.md) before a demo or deployment.

## Run the frontend

Requires Node 22+.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. With no environment configuration, `/demo` opens a clearly labeled browser-session workspace. Local text/URL rules, UPI parsing and comparison, journey analysis and PDF exports work without API keys. QR decoding and OCR load lazily; OCR needs network access to its worker/model assets. No samples are preloaded into investigation history.

```bash
npm test
npm run build
```

## Connect Supabase

1. Create a Supabase project and apply `supabase/001_initial.sql` once in the SQL editor.
2. Enable email/password auth, configure your site URL and authorized redirects (`/app/dashboard` and `/reset-password`), and configure email delivery.
3. Copy `.env.example` to `.env.local`, set `VITE_SUPABASE_URL` and the publishable/anon key. Never use a service-role key in a `VITE_` variable.
4. Restart Vite. Application routes now require a valid session. Investigation records use owner-only RLS.
5. Test with two independent accounts before handling real personal data. Hosted RLS integration was not exercised during this build.

The configured mode currently persists investigations. Journey editing remains session-local, verification notes and assistant conversations remain in component memory. Images are processed locally and not uploaded. The private storage bucket is provisioned but not wired into the UI.

## Run the API

Requires Python 3.12+.

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Set environment values, then:
uvicorn main:app --reload --env-file .env
```

On Windows activate with `.venv\Scripts\activate`. Set `VITE_API_URL` to the API origin. API documentation: `/docs`; health: `/health`.

- Set Supabase URL and anon key on the backend. Every private endpoint verifies the user's bearer token through Supabase Auth. Database requests carry that same token so RLS remains effective.
- Optional `GEMINI_API_KEY` enables evidence-grounded explanation. Set `GEMINI_MODEL` to an available model in your project. No arbitrary tool execution is provided.
- Optional `VIRUSTOTAL_API_KEY` enables **existing URL reputation lookup**, not submission/dynamic scanning. The UI's sharing button expressly authorizes sending the URL identifier to VirusTotal; do not use sensitive/private URLs.
- `ADMIN_USER_IDS` is a comma-separated allowlist of verified UUIDs configured server-side. No user-editable role grants admin access.
- `ALLOWED_ORIGINS` must contain your frontend HTTPS origin. Rate limiting is in-memory per API process; use a shared limiter at production ingress.

## Verification

```bash
npm test
cd backend
python -m pytest -q
```

11 Vitest and 19 pytest checks passed during implementation. Browser interaction checks confirmed UPI mismatch, saved history, escalating fee alerts and agreed milestone handling. TypeScript and production build passed.

Playwright scenarios and CI are supplied:

```bash
npx playwright install chromium
npm run test:e2e
```

The Playwright suite has not been executed locally. CI must pass before considering it verified. Live authentication, hosted RLS, provider responses, image OCR/QR, PDF rendering and mobile-device behavior still need integration testing.

## Deploy

**Frontend:** Import this repository into Vercel, select Vite, build `npm run build`, output `dist`. `vercel.json` supplies SPA route fallback. Set frontend environment values before building. No frontend has been publicly deployed by this repository push.

**Backend:** Deploy `backend/Dockerfile` to a Python/container host. Add server-side environment variables and HTTPS. Point `VITE_API_URL` at it and restrict CORS. Use a dedicated worker and audited isolation before implementing dynamic browsing. No arbitrary URL is visited by this API.

**Database:** Apply the SQL migration and validate RLS with two accounts. Do not disable RLS to fix configuration errors.

## Demo walkthroughs

1. `/app/upi-shield`: paste `upi://pay?pa=other@upi&pn=Sample%20Store&am=500`; expected VPA `store@upi`; run investigation and inspect mismatch evidence.
2. `/app/scam-journey`: load the labeled escalating-job sample. Compare with agreed milestones. Toggle agreement and disconnect events to see rules recompute.
3. `/app/investigate`: upload a non-sensitive screenshot, select a rectangle/freehand bounding region, extract text, correct it, then investigate. OCR is English only in this release.
4. `/app/link-lab`: paste `https://example.com`; local analysis reports insufficient evidence rather than declaring safety. Deep scanning explicitly reports unavailable.
5. `/app/history`: open or delete saved results; export a PDF from results. Demo records disappear when the browser session ends.

## Security boundaries

- No payment initiation, custody, interception or third-party app blocking.
- Embedded QR display names and user-supplied claims are not verified identities.
- No unrestricted URL fetching; only fixed-origin provider calls. The URL validator is defense in depth, not a DNS-rebinding-safe browser sandbox.
- Missing provider results are never replaced with invented success responses.
- Rule matches are heuristic indicators and can produce false positives. No accuracy/production-readiness claim is made.
- User-owned JSON results can be edited by their owner; they are not trusted third-party attestations. A manifest hash is unsigned and not tamper-proof.
- AI responses remain interpretations; prompt instructions alone are not a complete prompt-injection defense. The model has no code execution or network tools.
- PDF export omits the original input but findings can contain personal information; review before sharing. Built-in PDF fonts do not fully support Indic text.

See [feature status](docs/FEATURE_STATUS.md), [test notes](docs/TEST_NOTES.md), and the original brief at `docs/PROJECT_BRIEF.md`.
