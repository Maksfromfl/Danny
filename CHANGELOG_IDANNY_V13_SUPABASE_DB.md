# iDanny production v13 — Supabase database integration

## Completed
- Added @supabase/supabase-js.
- Added Supabase server admin client.
- Added product database helpers.
- Added admin API routes:
  - GET /api/admin/products
  - PUT /api/admin/products
  - POST /api/admin/products
- Added public API:
  - GET /api/products
- Admin products page now saves to API instead of browser-only localStorage.
- Added database seed button: “Залить каталог в БД”.
- Public homepage/category/product pages now use server-side products from Supabase when configured.
- Fallback to local JSON remains for safe development.
- Added .env.example.
- Updated db/supabase_schema.sql.
- Added docs/SUPABASE_SETUP.md.

## Current limitations
- Auth is still demo password/localStorage.
- Next step: secure admin auth and order persistence.
