# iDanny Admin Panel

## Demo login
URL: /admin/login
Password: idanny-admin

## Current status
This build includes a working admin interface:
- dashboard
- products
- orders
- journal
- SEO checklist
- settings

Product edits in this version are stored in browser localStorage for demo purposes.

## Production step
To make price changes affect the live website without redeploy:
1. Create Supabase project.
2. Run db/supabase_schema.sql.
3. Add environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY
4. Replace local JSON reads with Supabase queries.
5. Protect /admin with real authentication.

## Brand rules
- Dark premium UI.
- CTA buttons: blue-violet gradient.
- iPhone catalog: only iPhone 17 lineup.
- Ray-Ban Meta: separate category.
- No preorder, no novelty badges, no free delivery, no trade-in, no 24/7 support, no 14-day return promises.