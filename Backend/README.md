# SkillParadise backend

1. Copy `.env.example` to `.env` and add the MongoDB Atlas connection string.
2. Run `npm install`, then `npm run dev` inside `Backend`.
3. Run the frontend from `Frontend` with `npm run dev`.

The public contact form posts to `POST /api/leads/contact`. Every lead is saved to the shared MongoDB `leads` collection, so the other SkillParadise dashboard can list it through `GET /api/leads` (provide `x-admin-api-key`). It can update a lead with `PATCH /api/leads/:id/status`.

For production, deploy `Backend` separately (Render/Railway/VPS), set `CLIENT_URLS` to both deployed frontend and dashboard domains, and set `VITE_API_BASE_URL=https://your-api-domain` while building this frontend.
