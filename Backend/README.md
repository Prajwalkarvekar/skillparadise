# SkillParadise backend

1. Copy `.env.example` to `.env`, add the MongoDB Atlas connection string, a random `JWT_SECRET`, and an admin password.
2. Run `npm install`, then `npm run dev` inside `Backend`.
3. Run the frontend from `Frontend` with `npm run dev`.

Contact, call, brochure, corporate and institutional enquiries are saved in the MongoDB `enquiries` collection. Sign in with `POST /api/Auth/login` and send the returned token as `Authorization: Bearer <token>` for dashboard requests. Admins can read their company's enquiries using `GET /api/ContactUs/company/skillparadise` (or `GET /api/leads`) and update status using `PATCH /api/ContactUs/:id/status`. Student accounts cannot access these admin APIs.

For production, deploy `Backend` separately (Render/Railway/VPS), set `CLIENT_URLS` to both deployed frontend and dashboard domains, and set `VITE_API_BASE_URL=https://your-api-domain` while building this frontend.

Set `NODE_ENV=production`, a unique admin password of at least 12 characters, a random JWT secret of at least 32 characters, and `RESET_ADMIN_ON_START=false`. `CLIENT_URLS` must list HTTPS origins without paths or trailing slashes. Startup rejects unsafe production settings. Existing admin records are preserved; changing `ADMIN_PASSWORD` alone does not rotate an existing user's password.

Run `npm test` for isolated HTTP regression tests. They use real schema validation with in-memory repository doubles and never connect to MongoDB. The production database connection and deployed cross-origin requests must also be verified after hosting.
