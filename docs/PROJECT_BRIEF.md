# BUILD TRUSTPAY SENTINEL AI — COMPLETE PRODUCTION-STYLE HACKATHON PROTOTYPE

## 1. PROJECT OBJECTIVE

Build a fully functional, responsive, modern cybersecurity and FinTech web application named **TrustPay Sentinel AI**.

**Tagline:** Investigate. Verify. Understand. Pay Safer.

**Core idea:** TrustPay Sentinel AI is a privacy-first AI investigation assistant for UPI fraud prevention. Users can select or circle suspicious content from screenshots, submit payment links, inspect UPI QR codes, analyze messages, connect multiple payment requests into a scam journey, and obtain evidence-backed explanations.

Unlike an ordinary chatbot or generic scam-score application, TrustPay should execute real, authorized security checks and present the actual investigation evidence.

The user must be able to ask the AI assistant what was found, why it matters, what could not be verified, and what to do next.

**Important project limitations:**

- Do not claim to intercept UPI transactions.
- Do not claim to block payments inside third-party apps.
- Do not claim that a decoded UPI QR establishes the actual account owner's identity.
- Do not claim that a clean URL scan guarantees safety.
- Do not simulate live security findings while presenting them as real.
- Do not hold, send, reserve, or release actual funds.
- No real banking integration is required for this prototype.

Build a complete, polished and testable website suitable for the cybersecurity domain of a national-level hackathon.

---

# 2. VISUAL DESIGN — STRICTLY FOLLOW REFERENCE STYLE

Use the attached mobile UI screen-preview image as the primary reference for layout quality, spacing, screen proportions, card styling, presentation, and typography.

Additional design reference:
https://pin.it/23VN4w52b

Do not blindly copy the banking functionality or logos from the reference. Translate the design language into an original TrustPay Sentinel AI interface.

## Color palette

Use a premium **light theme** with:

| Purpose | Color |
|---|---|
| Main background | `#F3FAF8` |
| White card surfaces | `#FFFFFF` |
| Soft mint | `#DDF4ED` |
| Main teal | `#16A6A0` |
| Light blue | `#BFDFF3` |
| Soft lavender | `#B7B9EF` |
| Primary text | `#183B4A` |
| Secondary text | `#647B82` |
| Soft borders | `#DCE8E6` |
| High risk | `#DF5B60` |
| Caution | `#E7A944` |
| Positive check | `#2D9C78` |

Design requirements:

- White and very light pastel backgrounds.
- Rounded corners of approximately 16–24px.
- Soft shadows, never harsh black shadows.
- Modern fonts such as Inter, Manrope or Plus Jakarta Sans.
- Rounded primary buttons.
- Consistent icon family using Lucide icons.
- Subtle pastel illustrations for onboarding and empty states.
- Professional FinTech-style visual hierarchy.
- Generous white space.
- Small meaningful animations.
- Clean progress indicators.
- No aggressive neon effects.
- Avoid overly complex gradients.
- Use color to indicate security state, not merely decoration.

The application should feel like a polished consumer financial-safety product.

## Responsive behavior

Design independently for:

**Desktop:** Left navigation sidebar, spacious central workspace, contextual right-side investigation panel.

**Tablet:** Collapsible sidebar, two-column cards and responsive result sections.

**Mobile:** Native-app-like appearance inspired by the reference screenshot, with large touch targets, rounded cards, compact headers and persistent bottom navigation.

At desktop widths, do not render an oversized mobile phone frame around the entire application. Phone frames should appear only in the public landing page's preview section.

## Logo

Create an original TrustPay logo consisting of a minimal shield combined with a subtle payment/verification symbol.

Use teal and deep blue.

Do not use copied logos or branding from third-party payment applications.

---

# 3. TECHNOLOGY STACK

Use:

**Frontend**
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Lucide icons
- Framer Motion or Motion
- React Router
- TanStack Query
- React Hook Form
- Zod
- Recharts for meaningful analytics
- Canvas or SVG selection overlay for image highlighting

**Backend**
- Python FastAPI for investigation orchestration
- Pydantic request and response validation
- PostgreSQL
- Supabase Auth
- Supabase private Storage
- Supabase Row Level Security
- Background job queue for long-running investigations
- Server-side security rules engine

**AI**
- Gemini API with structured JSON outputs
- Vision support for screenshots
- Evidence-grounded response generation
- Function/tool calling through a controlled backend service

**Security investigation**
- Safe URL parsing and normalization
- Configurable threat-intelligence API
- QR decoding
- UPI URI parsing
- Authorized remote website scanner
- Structured redirect, DOM and network evidence
- Sandboxed browser inspection for approved targets

**Deployment**
- Frontend deployable to Vercel
- Backend deployable to a suitable hosted Python environment
- Supabase for persistent data
- Environment variables for all secrets

Use the latest compatible stable versions of libraries. Ensure dependency compatibility before implementation.

---

# 4. WEBSITE STRUCTURE

Create two connected experiences.

## A. Public website

Routes:

- `/`
- `/features`
- `/how-it-works`
- `/demo`
- `/privacy`
- `/login`
- `/register`

## B. Authenticated application

Routes:

- `/app/dashboard`
- `/app/investigate`
- `/app/link-lab`
- `/app/upi-shield`
- `/app/scam-journey`
- `/app/verify-purpose`
- `/app/assistant`
- `/app/history`
- `/app/reports`
- `/app/settings`

## C. Admin application

Routes:

- `/admin/overview`
- `/admin/scanner-health`
- `/admin/test-lab`
- `/admin/feedback`
- `/admin/audit`

Restrict all admin routes with server-side authorization.

Do not permit access to admin capabilities by merely changing a frontend variable.

---

# 5. PUBLIC LANDING PAGE

Build an elegant, light-theme landing page inspired by premium finance applications.

## Header

Include:

- TrustPay Sentinel AI logo
- Features
- How It Works
- Live Demo
- Privacy
- Login
- Get Started

Use a sticky navigation bar with subtle blur.

## Hero section

Main heading:

**Investigate Before You Pay.**

Subheading:

"Your AI-powered UPI safety assistant. Select suspicious content, inspect links safely, uncover payment scam journeys, and understand the evidence before making a payment."

Buttons:

- Start Free Investigation
- Explore Live Demo

On the right, show high-quality overlapping mobile app previews similar in presentation quality to the supplied reference.

Create original preview screens for:

1. TrustPay dashboard.
2. Circle-to-Investigate assistant.
3. Investigation results.

Animate the cards subtly as the user scrolls.

## Features section

Show six elegant feature cards:

1. Circle-to-Investigate.
2. Safe Link Lab.
3. UPI Shield.
4. Scam Journey Intelligence.
5. Purpose Verification.
6. AI Security Assistant.

Each card must explain the actual function and link to its working page.

## How It Works

Use a clean illustrated workflow:

Select Content → Extract Evidence → Run Security Checks → Connect Scam Journey → Verify Claim → Explain Result.

## Interactive demonstration

Show a scripted example of a job scam.

Clearly label it **Sample Demo**.

The user can move through the steps and inspect how the investigation system would present the findings.

Do not display demo results as real provider API results.

## Privacy section

Explain:

- Voluntary sharing.
- Private evidence storage.
- User-controlled deletion.
- Isolated remote investigation.
- Limited data retention.
- No access to private banking credentials.
- No automatic UPI transaction surveillance.

---

# 6. AUTHENTICATION AND ONBOARDING

Create visually polished screens matching the layout quality of the supplied reference.

## Screens

1. Splash screen.
2. Welcome screen.
3. Onboarding page 1 — Investigate suspicious payments.
4. Onboarding page 2 — Understand scam journeys.
5. Onboarding page 3 — Verify before paying.
6. Login.
7. Registration.
8. Email confirmation.
9. Forgot password.
10. Basic profile and language setup.

## Implementation

Use Supabase Auth for:

- Email/password signup.
- Login.
- Logout.
- Email verification.
- Password reset.
- Session persistence.

Google OAuth may be added if configured correctly.

Show proper loading, error, success and expired-session states.

Never store passwords directly in application tables.

Onboarding must be skippable and should not reappear after completion unless manually reopened.

Language options:

- English.
- Hindi.
- Telugu.

Store the selected language in user preferences.

Translation must apply to navigation, important warnings and safety guidance, not just headings.

---

# 7. MAIN DASHBOARD

Build a light, polished dashboard that becomes the application's central workspace.

## Header

Display:

"Welcome back"

"Let's investigate before you pay."

Include:

- Profile avatar.
- Notifications.
- Language selector.
- Quick privacy control.

## Main investigation card

Prominent input:

"Paste a message, link, UPI ID, or describe a suspicious payment request."

Provide actions:

- Paste Text.
- Upload Screenshot.
- Scan QR.
- Check Link.
- Circle Content.
- Ask AI.

Primary button:

**Investigate Safely**

## Dashboard cards

Include:

**Recent Investigations**
Shows the user's latest completed investigations, real status and timestamps.

**My Scam Journeys**
Shows saved user-controlled payment journeys and the number of related requests.

**Pending Verification**
Displays cases awaiting independent confirmation.

**Security Tools**
Quick access to Link Lab, UPI Shield, Journey Engine and Purpose Verification.

**Safety Guidance**
Practical advice relevant to the user's recent investigation type.

## Functional behavior

Every card must navigate correctly.

Data must come from the user's actual database records.

Do not use fake numeric statistics in the authenticated dashboard.

For a new user, show polished empty states and a button to start the first investigation.

---

# 8. MAIN FEATURE — CIRCLE-TO-INVESTIGATE AI

This must be the signature feature.

## User interface

Create an investigation workspace with:

- Screenshot upload area.
- Drag-and-drop upload.
- Image preview.
- Adjustable zoom.
- Pan support.
- Rectangle selection.
- Freehand selection.
- Clear selection.
- Undo selection.
- Analyze Selection button.

The experience should resemble the ease of visually selecting an object for AI analysis.

## Supported inputs

- PNG.
- JPG.
- WebP.
- Screenshot pasted from clipboard.
- Typed text.
- Uploaded images containing QR codes.

Use strict file-size and content validation.

## Implementation flow

1. User uploads an image.
2. Validate file size, MIME type and decoded file content.
3. Display the image.
4. User highlights a region.
5. Capture the selected coordinates.
6. Crop the selected region.
7. Send it to the backend.
8. Run OCR and Gemini Vision extraction.
9. Return structured entities with evidence references.
10. Display an editable preview before further investigation.

Extract:

- URL.
- UPI VPA.
- Amount.
- Recipient name as stated.
- Claimed organization.
- Payment purpose.
- Urgency wording.
- Refund promises.
- QR payload.
- Suspicious instructions.

Example structured response:

```json
{
  "content_type": "payment_request",
  "amount": 1999,
  "currency": "INR",
  "recipient_vpa": "example@upi",
  "purpose": "training fee",
  "organization_claim": "Example Recruiter",
  "urgency_detected": true,
  "refund_claim_detected": true,
  "extraction_confidence": 0.91,
  "needs_user_confirmation": true
}
```

This example illustrates the schema, not a real detection.

## Important

If OCR is uncertain, ask the user to confirm the extracted details.

Never silently invent missing recipient IDs or payment amounts.

The user should be able to correct AI extraction before continuing.

---

# 9. SAFE LINK INVESTIGATION LAB

Develop a working URL investigation system.

## User interface

Input field:

"Enter a suspicious URL."

Buttons:

- Quick Check.
- Deep Investigation.
- View Safe Preview.
- View Technical Evidence.

Display distinct statuses:

- Queued.
- Running.
- Completed.
- Partially Completed.
- Failed.
- Unsupported.
- Cancelled.

## Quick Check

Implement real checks for:

1. URL syntax.
2. Domain and hostname extraction.
3. Punycode and lookalike indicators.
4. Suspicious URL structure.
5. HTTPS availability.
6. Known malicious URL intelligence through configured providers.
7. Redirect metadata from approved scanning services.
8. Domain registration information where a reliable service is available.

Use properly configured provider APIs.

Do not pretend that a domain is newly registered unless trustworthy domain registration evidence supports it.

## Deep Investigation

Use an approved remote scanning service or properly hardened isolated infrastructure.

Capture available observations:

- Remote page screenshot.
- Redirect chain.
- Final destination.
- HTTP response metadata.
- Form fields.
- Requested scripts.
- Network destinations.
- Known malicious resources.
- Unexpected download attempts.
- Suspicious credential collection patterns.

**Critical security requirement:** Never visit arbitrary suspicious URLs through an unrestricted backend HTTP client or an ordinary browser on the user's device.

The scanner must have protection against SSRF, private-network access, metadata endpoint access, uncontrolled network egress, resource exhaustion, and persistence.

The scanning worker must not have access to Supabase service keys, application secrets or user data.

Use temporary isolated workers, controlled permissions, timeouts and cleanup.

For the hackathon, implement genuine scanning through an authorized provider and restrict deeper local tests to controlled laboratory domains unless the security environment is appropriately hardened.

## Safe Preview

Display the captured screenshot as an inert image.

Show:

- Requested URL.
- Final destination.
- Scan time.
- Screenshot.
- Observed redirects.
- Form fields discovered.
- Resources inspected.
- Limitations.

Do not embed the suspicious live website directly in the user page.

Do not allow malicious webpage content to execute in the TrustPay interface.

## Script Analysis

Analyze observed scripts and related metadata.

Show concrete findings such as:

- Suspicious third-party script source.
- Known malicious resource match.
- Unexpected redirect logic.
- Credential collection indicators.
- Download triggers.

Do not label all JavaScript as malicious.

Static scanning is limited. If code execution or malicious behavior cannot be determined, say "Not established by available evidence."

## Failure handling

If a provider is unavailable, show:

"Scanner unavailable — this check was not completed."

Never replace a failed external security test with an invented result.

---

# 10. UPI SHIELD — PAYMENT DETAILS INVESTIGATOR

Create a fully functional UPI QR analysis page.

## Inputs

- Upload UPI QR image.
- Paste UPI payment URI.
- Enter UPI VPA manually.
- Upload screenshot containing UPI payment details.

## Extract available fields

- Payee address (`pa`).
- Payee display name (`pn`).
- Amount (`am`).
- Currency (`cu`).
- Transaction note (`tn`).
- Transaction reference where present.
- Additional supported URI parameters.

Example:

```text
upi://pay?pa=example@upi&pn=Example%20Store&am=500&cu=INR&tn=Order123
```

Parse and validate the URI safely without launching a payment app automatically.

## Features

**QR Decoder**

Decode the embedded payment URI and display a clear summary.

**Recipient Comparison**

Allow the user to enter the expected payee information.

Compare expected versus extracted fields.

**Mismatch Detection**

Flag:

- Different VPA.
- Different displayed payee name.
- Unexpected amount.
- Missing expected payment note.
- Changes in recipient across a saved journey.

**Suspicious Payment Context**

Check associated payment messages for urgency, refund claims and repeated advance fees.

**Known Risk Signals**

Use authorized reputation services if available.

If no actual beneficiary reputation source is configured, show "Reputation not available."

## Critical restrictions

A QR code can contain an arbitrary payee display name.

Do not treat the name embedded in the QR as independently verified identity.

Do not claim that TrustPay knows whether the recipient's bank account belongs to a particular company unless a legitimate integration confirms that information.

Do not initiate any real payment.

---

# 11. SCAM JOURNEY INTELLIGENCE ENGINE

This is the main research and cybersecurity differentiator.

The goal is to detect patterns emerging across multiple voluntarily submitted payment requests.

## User interface

Create a visual investigation timeline.

Users can:

- Create a journey.
- Add individual messages.
- Upload evidence.
- Attach URLs.
- Add UPI payment requests.
- Set approximate dates.
- Edit extracted fields.
- Remove evidence.
- Manually connect or disconnect related requests.

## Example

Day 1: Job offer.

Day 2: Registration fee ₹499.

Day 3: Training fee ₹1,999.

Day 4: Refundable security deposit ₹5,000.

The application should display:

- Timeline.
- Total requested amount.
- Changing payment purpose.
- Repeated fees.
- Claimed refund.
- Recipient history.
- Related evidence.
- Overall pattern explanation.

## Technical implementation

Represent each request as a structured payment-intent event.

Fields include:

- `request_id`
- `journey_id`
- `event_timestamp`
- `source_type`
- `amount`
- `currency`
- `recipient`
- `claimed_organization`
- `payment_purpose`
- `urgency_indicators`
- `refund_promise`
- `evidence_id`

Link events using:

- Shared organization claims.
- Recipient relationships.
- Similar request context.
- Payment-purpose continuity.
- Timing.
- References to earlier promises.

Use a deterministic rules engine for basic patterns.

Possible rules:

**Repeated Advance Fees**

The same claimed transaction requires multiple separate fees.

**Escalating Payment Demands**

Requested amounts increase with additional justifications.

**Recipient Switching**

Payment recipient identifiers change during the same claimed arrangement.

**Refund Bait**

A payment is justified through the promise that previous fees will be refunded.

**Urgency Escalation**

Messages increasingly pressure the user to act immediately.

**Credential Extraction**

A suspicious request asks for sensitive authentication information.

## False-positive controls

Do not classify every installment plan as a scam.

Add legitimate comparison scenarios:

- Freelance milestone agreements.
- Tuition installments.
- Recurring subscriptions.
- Authorized service deposits.
- Normal customer invoices.

Provide human-correctable event links.

Display uncertain relationships as suggestions, not established facts.

## Outputs

- Interactive journey graph.
- Payment timeline.
- Risk indicators.
- Supporting evidence.
- Unknown information.
- Suggested verification.
- Historical comparison.

The app must explain *why* requests were linked.

---

# 12. PURPOSE VERIFICATION ENGINE

Create a dedicated screen for investigating the actual reason money is being requested.

Example:

"Is this ₹1,999 training fee really required by the claimed employer?"

## Verification flow

1. Extract claimed organization.
2. Extract purpose and requested amount.
3. Identify independently sourced official information when available.
4. Compare the claim against documentary evidence.
5. Check whether an authenticated confirmation exists.
6. Assign a verification assurance level.
7. Show unresolved questions.

## Verification levels

**V0 — Unverified**

No independent confirmation exists.

**V1 — User-reported**

The user states that verification occurred, but its authenticity is not established.

**V2 — Source-documented**

An independently located official source supports relevant details, though the specific payment authorization may remain uncertain.

**V3 — Authenticated confirmation**

A trusted authenticated organizational channel confirms the particular purpose and recipient.

V3 must not be assigned merely because an AI model believes a website is official.

## User interface

Show:

- Claimed organization.
- Claimed payment purpose.
- Evidence reviewed.
- Official source references.
- Verification status.
- Missing confirmations.
- Safe follow-up actions.

If a reliable official source cannot be located, display "Not independently verified."

Do not generate fictional official phone numbers, websites or certifications.

---

# 13. GEMINI-STYLE AI INVESTIGATION ASSISTANT

The AI assistant must be integrated throughout the application, not confined to a generic chatbot page.

## Assistant functionality

Users can ask:

- "What is inside this link?"
- "Why is this payment suspicious?"
- "What did the remote website scan find?"
- "Does this QR contain a different UPI ID?"
- "Explain the detected script."
- "What changed between these payment requests?"
- "How can I check whether this employer is genuine?"
- "What is still unknown?"
- "Show the evidence for this warning."

## UI behavior

Implement a floating assistant button.

Clicking it should open an elegant side panel on desktop and a bottom sheet on mobile.

Features:

- Chat history.
- Context-aware investigation reference.
- Follow-up questions.
- Evidence cards.
- Expandable technical details.
- Suggested investigation actions.
- Language selection.
- Clear conversation.
- Copy response.

## AI architecture

The assistant must call approved backend tools.

Example tools:

- `extract_payment_intent`
- `decode_upi_qr`
- `check_url_reputation`
- `get_remote_scan_result`
- `analyze_script_indicators`
- `get_saved_journey`
- `compare_recipients`
- `get_verification_evidence`
- `generate_investigation_summary`

Each tool must have:

- Validated input schema.
- Authorization checks.
- Timeout behavior.
- Typed output.
- Error response.
- Audit event.

The LLM must not be allowed to execute arbitrary code, fetch arbitrary internal URLs, or choose uncontrolled privileged operations.

## Evidence grounding

All factual security findings must be tied to tool results.

The assistant should separate:

1. Observed facts.
2. Rule-based indicators.
3. AI interpretations.
4. Unverified claims.
5. Unknowns and missing tests.

Do not fabricate scan results, source URLs, certificates, malware verdicts, payment confirmations or security statistics.

Treat inspected webpage content as untrusted data and defend against prompt injection.

---

# 14. INVESTIGATION RESULTS PAGE

Build a polished results interface with clear visual hierarchy.

## Main results area

Show:

- Investigation type.
- Scan status.
- Risk classification.
- Confidence and limitations.
- Key findings.
- Evidence summary.
- Recommended next step.

Classifications:

- High Concern.
- Needs Verification.
- No Known Threat Detected.
- Insufficient Evidence.
- Scan Failed.

Avoid using a single risk percentage as the entire explanation.

If a numeric score is displayed, use a documented scoring calculation, calibrated thresholds and understandable factor contributions.

## Evidence tabs

Create:

1. Overview.
2. Website Preview.
3. UPI Details.
4. Technical Findings.
5. Scam Journey.
6. Verification.
7. AI Explanation.

Only show relevant tabs for the current investigation.

## Example layout

**Top:** Investigation status and conclusion.

**Left:** Screenshot or evidence preview.

**Center:** Findings and verification.

**Right:** AI explanation and recommended action.

**Bottom:** Event timeline, investigation metadata and export options.

Every observation must have a provenance reference or clearly identified source.

---

# 15. REPORTS AND INVESTIGATION RECEIPTS

Allow users to export a professional PDF investigation receipt.

Include:

- Report ID.
- Timestamp.
- User-visible input summary.
- Evidence references.
- Extracted indicators.
- Scanner provider.
- Completed and failed tests.
- URL observations.
- UPI fields where applicable.
- Journey findings.
- Verification level.
- AI explanation.
- Limitations.
- Recommended action.

Use a polished document layout consistent with the light theme.

Never include passwords, OTPs, private API keys or unnecessary sensitive personal data.

Enable:

- Download PDF.
- Save investigation.
- Delete investigation.
- Export non-sensitive structured findings.

For advanced integrity protection, use a server-generated hash of a canonical evidence manifest, and optionally a digital signature from a protected signing key.

Do not call a report tamper-proof unless the verification mechanism genuinely supports the claim.

---

# 16. INVESTIGATION HISTORY

Create a fully working history page.

Display:

- Investigation title.
- Type.
- Timestamp.
- Completion status.
- Risk classification.
- Verification status.

Features:

- Search.
- Filter by type.
- Filter by status.
- Sort by date.
- Open report.
- Continue analysis.
- Export.
- Delete.

Implement pagination.

Users must only access investigations they are authorized to view.

When a user deletes stored evidence, make retention and deletion behavior consistent with the privacy policy.

---

# 17. ADMIN AND HACKATHON TEST LAB

Create a protected admin dashboard.

## Admin sections

**Overview**

- Total investigations.
- Completed investigations.
- Failed investigations.
- Average processing duration.
- Scanner availability.

These must be real aggregated metrics, never decorative numbers.

**Scanner Health**

- Configured API status.
- Recent provider errors.
- Queue status.
- Average scan duration.
- Timeouts.

**Feedback**

- False-positive reports.
- False-negative reports.
- User feedback statistics.

**Demo and Test Lab**

Include predefined synthetic scenarios:

1. Escalating job scam.
2. Legitimate milestone payments.
3. UPI recipient mismatch.
4. Controlled phishing test page.
5. Benign test page.
6. Refund bait sequence.
7. Missing or failed scanner response.
8. Prompt-injection attempt embedded in a test webpage.

Each scenario must indicate whether it is synthetic.

The test lab should verify actual backend behavior rather than just play an animation.

Do not permit administrators to browse private user messages or screenshots by default.

---

# 18. DATABASE DESIGN

Use a normalized relational schema.

Create tables such as:

- `profiles`
- `user_preferences`
- `investigations`
- `evidence_items`
- `extracted_entities`
- `security_scan_jobs`
- `security_scan_results`
- `scan_observations`
- `upi_payment_intents`
- `scam_journeys`
- `journey_events`
- `journey_links`
- `risk_findings`
- `verification_claims`
- `verification_sources`
- `verification_events`
- `assistant_conversations`
- `assistant_messages`
- `investigation_reports`
- `user_feedback`
- `audit_events`
- `scanner_provider_status`

## Database requirements

Use UUID primary keys, proper foreign keys, timestamps, indexes and constraints.

Implement RLS policies for all user-owned data.

Users must only read or modify their authorized records.

Store uploaded evidence in private storage buckets.

Use short-lived signed URLs where required.

Never expose the Supabase service-role key to the frontend.

Add indexes for investigation history, journey retrieval and scan status.

Store scanner provenance and timestamps.

Support safe background processing and retries without producing duplicate findings.

---

# 19. BACKEND API IMPLEMENTATION

Use REST endpoints with clear request and response schemas.

Suggested API groups:

## Investigation

- `POST /api/investigations`
- `GET /api/investigations`
- `GET /api/investigations/{id}`
- `DELETE /api/investigations/{id}`

## Evidence

- `POST /api/evidence/upload`
- `POST /api/evidence/extract`
- `POST /api/evidence/select-region`

## URL security

- `POST /api/url/quick-check`
- `POST /api/url/deep-scan`
- `GET /api/url/scans/{id}`

## UPI

- `POST /api/upi/decode`
- `POST /api/upi/compare`

## Journey

- `POST /api/journeys`
- `POST /api/journeys/{id}/events`
- `GET /api/journeys/{id}`
- `POST /api/journeys/{id}/analyze`

## Verification

- `POST /api/verification/claims`
- `GET /api/verification/claims/{id}`

## AI

- `POST /api/assistant/messages`
- `GET /api/assistant/conversations/{id}`

## Reports

- `POST /api/reports/generate`
- `GET /api/reports/{id}`

Use authenticated requests, schema validation, rate limiting, consistent error structures and proper HTTP status codes.

Long-running security jobs must run asynchronously and expose status polling or authenticated real-time updates.

Do not block a web request while waiting for long sandbox investigations.

---

# 20. SECURITY, PRIVACY AND ABUSE PREVENTION

Implement:

- Authentication and authorization.
- RLS.
- Input validation.
- Secure file handling.
- XSS prevention.
- CSRF protections where relevant.
- Rate limiting.
- API quota enforcement.
- Encrypted transport.
- Private evidence storage.
- Secret management.
- Audit logging.
- Temporary scan retention.
- Safe deletion workflows.
- Per-user resource quotas.
- Prompt-injection resistance.
- Tool-output validation.

For URL scanning, specifically defend against:

- SSRF.
- Redirects to private/internal networks.
- DNS rebinding.
- Cloud metadata access.
- Unsafe file protocols.
- Uncontrolled downloads.
- Resource exhaustion.
- Excessive requests.
- Unauthorized credential submission.
- Scanner infrastructure compromise.

Never use users' real banking credentials or OTPs for testing.

The app must not encourage users to enter confidential payment authentication data.

---

# 21. MULTILINGUAL IMPLEMENTATION

Support English, Hindi and Telugu.

Use structured translation resources.

Translate:

- Navigation.
- Onboarding.
- Forms.
- Risk categories.
- Verification statuses.
- Error messages.
- Main safety recommendations.

Allow the AI assistant to explain supported findings in the selected language.

Preserve technical indicators such as URLs, hashes, UPI VPAs and raw amounts without incorrect translation.

Test mixed-language scam messages, including Telugu and English together.

---

# 22. PERFORMANCE AND ACCESSIBILITY

Requirements:

- Fast first-page render.
- Responsive layouts.
- Lazy-loaded heavy modules.
- Image compression before upload where appropriate.
- Background task processing.
- Accessible labels.
- Keyboard navigation.
- Visible focus states.
- Screen reader support.
- Adequate contrast.
- Touch-friendly mobile controls.
- Respect reduced-motion settings.
- Graceful handling of slow networks.

All screens must have:

- Loading state.
- Success state.
- Empty state.
- Error state.
- Retry handling.

Never show an endless loading animation after a request fails.

---

# 23. IMPLEMENTATION ORDER

Build in the following sequence.

## Phase 1 — Foundation

Implement:

- Project configuration.
- Light-theme design system.
- Responsive navigation.
- Authentication.
- User profile.
- Supabase schema.
- RLS.
- Protected routes.

## Phase 2 — Core Investigation

Implement:

- Text submission.
- Screenshot upload.
- Image-region selection.
- OCR and AI extraction.
- Investigation job states.
- Evidence storage.
- Results interface.

## Phase 3 — UPI and URL Security

Implement:

- UPI QR decoding.
- UPI URI parsing.
- Recipient comparison.
- URL normalization.
- Real reputation checks.
- Authorized remote scan integration.
- Safe screenshot preview.
- Structured technical evidence.

## Phase 4 — Scam Journey

Implement:

- Save payment requests.
- Create journeys.
- Entity linkage.
- Escalation rules.
- Timeline visualization.
- Relationship correction.
- Legitimate sequence handling.

## Phase 5 — AI and Verification

Implement:

- Evidence-grounded assistant.
- Contextual tool calls.
- Verification assurance levels.
- Independent source references.
- Actionable recommendations.

## Phase 6 — Reports and Admin

Implement:

- Saved history.
- PDF receipts.
- Admin metrics.
- Scanner health.
- False-positive feedback.
- Synthetic test lab.

## Phase 7 — Final Testing and Deployment

Execute:

- Integration tests.
- End-to-end browser tests.
- Security tests.
- Responsive testing.
- API failure tests.
- Regression tests.
- Deployment verification.

---

# 24. AUTOMATED TESTING REQUIREMENTS

Use Vitest for frontend unit tests, pytest for backend tests, and Playwright for end-to-end tests.

At minimum, test:

1. User registration and login.
2. Unauthorized route rejection.
3. Screenshot upload.
4. Image region selection.
5. OCR extraction.
6. Extraction correction.
7. UPI QR parsing.
8. Recipient mismatch.
9. Valid URL submission.
10. Invalid URL rejection.
11. Threat provider failure.
12. Sandbox timeout.
13. Controlled website preview.
14. Scam journey creation.
15. Repeated advance-fee detection.
16. Legitimate milestone sequence.
17. Event relationship correction.
18. Verification status handling.
19. AI answers grounded in scan output.
20. AI refusal to invent missing evidence.
21. PDF receipt generation.
22. User data isolation.
23. Evidence deletion.
24. Mobile navigation.
25. Prompt injection inside untrusted page text.
26. SSRF and private-network request rejection.

A successful demo must include both true-positive and false-positive testing.

Use a reproducible synthetic benchmark initially, and clearly distinguish it from real-world measured detection performance.

---

# 25. FIVE REQUIRED LIVE HACKATHON DEMOS

## Demo 1 — Circle suspicious payment request

Upload a test screenshot → highlight the suspicious text → extract amount and payment purpose → analyze relevant evidence → explain the findings.

## Demo 2 — Isolated website investigation

Submit an authorized controlled phishing-test URL → run a real scan → show inert page screenshot, redirects and observed indicators → generate report.

## Demo 3 — UPI QR mismatch

Upload sample UPI QR → decode payment details → compare expected payee versus actual QR data → explain mismatch.

## Demo 4 — Multi-stage scam journey

Add four payment messages → link them into one journey → flag escalating fees and refund bait → provide verification guidance.

## Demo 5 — Legitimate payment sequence

Enter a legitimate milestone payment sequence → avoid automatically marking it fraudulent → show why the system reaches a more cautious assessment.

Every demo must be reproducible and work from the actual application workflow.

---

# 26. NON-NEGOTIABLE IMPLEMENTATION RULES

1. Do not create static pages that only look functional.
2. Do not use fake security API responses in live mode.
3. Do not create non-functional buttons.
4. Do not use hardcoded user investigation history.
5. Do not leave placeholder functions behind.
6. Do not expose secrets in frontend code.
7. Do not claim verified recipient identity without a real authorized source.
8. Do not claim that every clean scan means a website is safe.
9. Do not open suspicious live content on the user's device.
10. Do not treat AI-generated descriptions as observed technical evidence.
11. Do not claim browser sandbox isolation if only an unrestricted browser is implemented.
12. Do not hide failed security checks.
13. Do not overwrite user evidence silently.
14. Do not implement financial transactions or fund custody.
15. Do not claim a test passed unless it was actually executed.

If a provider API key is unavailable, implement the adapter with a clearly visible "Not Configured" status.

Demonstration fixtures may be used only in explicitly labeled demo mode.

---

# 27. REQUIRED FINAL DELIVERABLES

Deliver:

- Complete frontend source code.
- Complete backend source code.
- SQL migrations.
- RLS policies.
- Authentication implementation.
- Storage configuration.
- AI integration.
- QR and UPI parsing.
- Scam journey engine.
- Security scanner adapters.
- Verification engine.
- PDF reporting.
- Working admin dashboard.
- Environment variable example file.
- Setup instructions.
- Deployment instructions.
- Test suite.
- Documented implemented features.
- Documented unsupported features.
- Security assumptions and limitations.
- Reproducible live demo scenarios.

Create a README with all required commands.

Provide a feature status matrix containing:

- Working and tested.
- Implemented but untested.
- Partially implemented.
- Requires provider configuration.
- Not implemented.

Do not claim the project is complete if required functionality has not been implemented and verified.

---

# 28. FINAL EXPERIENCE

The finished product should feel like an intelligent financial safety companion.

A user must be able to:

**Open TrustPay → upload or circle suspicious content → review extracted details → run actual permitted security checks → inspect an inert website preview → understand the related payment journey → review payment-purpose verification → ask the AI assistant questions → receive practical guidance → save an investigation receipt.**

The UI should be as polished, soft, minimal and cohesive as the supplied finance-app design reference, while the underlying functionality must demonstrate genuine cybersecurity engineering.

Prioritize working core features, user trust, evidence transparency, privacy and technical correctness over flashy visual effects.

**Begin implementing the actual application with the above design and architecture. Do not stop after producing mockup screens.**
