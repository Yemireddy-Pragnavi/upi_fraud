# Feature status — v0.1

Status reflects actual verification, not intended future functionality.

| Feature | Status | Scope / remaining work |
|---|---|---|
| Light landing page and application shell | Working; desktop browser checked | Responsive CSS supplied; device checks pending |
| Message rules, evidence references, unknowns | Working and unit tested | Heuristic rules; not a fraud classifier |
| UPI URI/VPA parsing and mismatch detection | Working and tested in unit + browser checks | No beneficiary identity/reputation integration |
| URL structure analysis | Working and unit tested | Syntax indicators only; no TLS or website visit |
| Screenshot upload, rectangle/freehand bounds, zoom | Implemented but untested with files | Scroll-based pan; clear selection, no multi-step undo |
| Browser QR decoder | Implemented but untested with image fixtures | jsQR; no camera scanning |
| Local OCR and correction | Implemented but untested | English Tesseract; no Gemini Vision extraction |
| Journey timeline and deterministic pattern rules | Working; rules and browser flows tested | One session-local journey; manual links; no graph or cloud save |
| Legitimate milestone comparison | Working and tested | User agreement flags suppress fee-pattern warnings, not all risks |
| Purpose assurance | Partially implemented | V0/V1 UI; no persistent claims, independent search, V2/V3 integration |
| History, search, type filter, deletion | Implemented; save/read observed in browser | Session mode or Supabase investigations; no status filter |
| PDF receipt | Implemented but untested download/render | Unicode/Indic font support pending |
| Structured evidence display | Working | Export-download button not implemented |
| Signup/login/reset/session persistence | Requires configuration; untested live | Supabase client; no full onboarding/profile screens |
| PostgreSQL migration and owner RLS | Implemented but untested against hosted DB | 5 tables plus private bucket, not the full requested normalized schema |
| Private evidence storage | Provisioned SQL only | Upload/signed-URL/delete flows not implemented |
| Backend bearer validation and admin deny | Working in unit tests | Actual hosted authentication and two-user isolation untested |
| Gemini explanation adapter | Requires provider configuration; untested live | Evidence-only JSON response, no tool-calling or persisted chat |
| URL reputation adapter | Requires provider configuration; untested live | VirusTotal existing lookup with explicit sharing action |
| Isolated dynamic scan / inert preview | Not implemented | Honest Unsupported response; no fake scan |
| Background queue, retry/cancellation, job polling | Not implemented | No dynamic scan jobs are submitted |
| Admin overview | Partially implemented | Server allowlist, own-record count and config status only |
| Admin health, feedback, audit and test-lab views | Not implemented | `/admin/*` currently renders protected overview |
| Hindi/Telugu | Partially implemented | Navigation and primary warning; full localization pending |
| Integrity manifest | Implemented but untested with hosted data | Server SHA-256, unsigned |
| Backend rate limit | Implemented | Per-process; no distributed quota tracking |
| Automated CI | Supplied | First remote run not yet verified |
| Playwright desktop/mobile suite | Implemented but unexecuted locally | 3 flows × 2 device projects |
| Production deployment | Not performed | Vercel config, Dockerfile and instructions supplied |

## Remaining work before the five complete live demos

The UPI mismatch and journey demos can be demonstrated now. Image OCR/QR workflows need fixture testing. A genuine isolated website investigation requires a private authorized scanner, asynchronous jobs and safe evidence retrieval; this release intentionally does not impersonate that service. Complete auth/RLS/provider integration testing before using real records.
