# Test notes

Executed on 2026-11-17 UTC during implementation:

- `npm run build`: passed TypeScript and Vite production build. Vite reported a large main chunk; lazy-loaded OCR, QR and PDF modules are separate.
- `npm test`: 11 passed — URI parsing, duplicates, negative amount, mismatch, honest link verdict, OTP indicator, invalid URL, mixed Telugu urgency, injection text, escalating fees, agreed installments.
- `python -m pytest -q` in backend: 19 passed — private/special URL rejection, no URL visit, invalid UPI forms, missing auth fail-closed, admin denial, honest unsupported scanning, missing AI evidence.
- Interactive desktop browser: landing rendered; dashboard empty state rendered; mismatched VPA created High Concern with expected/observed values; history/dashboard reflected saved record; synthetic escalating job fees showed escalation/recipient switching/refund indicators; agreed milestones removed repeated-fee warning.

Not executed: Playwright suite, hosted Supabase login and RLS, real Gemini and VirusTotal calls, actual OCR image and QR fixtures, PDF download/render, mobile hardware, security penetration test, load tests. No detection-accuracy benchmark is claimed.

The backend emitted dependency deprecation warnings, not test failures. Provider adapters should be tested against current vendor contracts and configured quotas before public use.
