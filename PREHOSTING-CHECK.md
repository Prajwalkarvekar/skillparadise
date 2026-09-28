# Pre-hosting check — 28 September 2026

## Passed

- Frontend production build and ESLint.
- Backend syntax check and 8 HTTP regression tests: login, access control, all five lead sources, invalid input, company-scoped status updates, student registration, CORS and production configuration.
- Frontend and backend `npm audit --omit=dev`: zero reported runtime vulnerabilities at check time.
- 32 declared static route URLs return HTML on the local development server. This checks routing responses, not rendered interactions.
- All 12 referenced brochure files exist; 124 active relative imports match filesystem case for Linux hosting.
- Before the fixes, local login and authenticated inquiry/student-list requests returned 200; unauthenticated requests returned 401.

## Fixed

- Institutional form previously displayed success without saving; it now submits to the backend and handles errors.
- Brochure form now saves lead details before downloading and displays submission failures.
- Student registration schema now accepts the STUDENT role.
- Admin APIs check the current account role and company. Student/deleted accounts cannot use admin endpoints; status updates cannot cross company boundaries.
- Invalid JSON, wrong field types, invalid IDs and schema validation failures return client errors.
- Student list clears recovered errors and logs out expired sessions; inquiry search includes legacy name/phone/course fields.
- Removed unused imports and corrected lint issues. Added environment examples and hosting instructions.

## Outstanding before launch

- Replace the existing weak admin password through a controlled credential rotation. Merely changing an environment variable does not update an existing database record.
- Use production secrets, set `RESET_ADMIN_ON_START=false`, deploy the backend, and configure the frontend API origin and backend CORS origins.
- Configure host/reverse-proxy request throttling or bot protection for public forms and login.
- Live Google reviews are not configured (503); existing review cards provide the fallback.
- Desktop/mobile browser interactions, downloads, CSV export and end-to-end persistence on deployed URLs remain to be checked. Browser automation is unavailable in this session.
- Regression tests use in-memory repository doubles with real Mongoose validation. They do not prove production database writes. Real-database verification of the updated backend requires explicit approval because automatic approval review blocked access to private inquiry/student data.

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment steps. Do not interpret these local checks as a completed production deployment or full security audit.
