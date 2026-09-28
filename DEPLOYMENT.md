# Hosting Skill Paradise

This project has two services: the Vite frontend and the Node/Express backend. Uploading only the frontend does not host the login or enquiry APIs.

## Frontend

- Install/build: `npm ci` then `npm run build` inside `Frontend`.
- Publish directory: `Frontend/dist` (Netlify configuration already sets the base directory).
- Set `VITE_API_BASE_URL` to the backend HTTPS origin **before building**, with no `/api` suffix or trailing slash. Rebuild if this value changes.
- Keep the SPA rewrite in `Frontend/public/_redirects` for direct dashboard/course links.
- Use Node 22.12+ or a compatible newer version.

## Backend

- Root directory: `Backend`; install with `npm ci`; start with `npm start`.
- Configure the variables documented in `Backend/.env.example` in the hosting provider's environment settings. Never upload `.env` or place secrets in `VITE_` variables.
- Use `NODE_ENV=production`, a fresh random `JWT_SECRET`, a strong unique admin password and `RESET_ADMIN_ON_START=false`.
- Set `CLIENT_URLS` to the exact frontend HTTPS origin(s), comma-separated, without trailing slashes.
- Configure MongoDB network access for the backend host and a database user with only the required permissions.
- Existing admin records are not overwritten by normal startup. If reusing the current database, rotate its weak admin password through a controlled maintenance step before launch; setting a new environment value alone does not update that record.
- Google reviews are optional and need valid Google Places credentials. Existing cards remain visible when this integration is unavailable.

## Release checks

1. Run `npm run lint` and `npm run build` in `Frontend` and `npm test` in `Backend`.
2. Verify `/api/health`, admin login/logout, a contact submission and its dashboard entry on the deployed URLs.
3. Verify call, brochure, corporate and institutional submissions; brochure PDF downloads; dashboard status update and CSV export.
4. Check desktop/mobile layout and direct navigation to `/contact`, `/courses` and `/dashboard/inquiries`.
5. Configure request throttling/bot protection at the host or reverse proxy before public traffic; the application currently has no persistent rate limiter.

GitHub Pages deployment is manual. The private repository alone is not a deployed backend or a public website.
