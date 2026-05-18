# iDanny production v8 — Canonical implementation

## Step 7 completed

Canonical tags are now added to:
- Homepage
- Category pages
- Product pages
- Journal article
- Trust/service pages

## Canonical strategy
- Canonical domain: https://idanny.ru
- Product pages canonical: https://idanny.ru/product/{slug}
- Category pages canonical:
  - https://idanny.ru/iphone
  - https://idanny.ru/macbook
  - https://idanny.ru/ipad
  - https://idanny.ru/meta-rayban
- Journal canonical:
  - https://idanny.ru/journal/rayban-meta-gen1-vs-gen2
- Service pages canonical:
  - delivery, payment, warranty, returns, about, contacts, faq, privacy-policy, terms

## Duplicate prevention
- trailingSlash is disabled
- app-level redirect removes trailing slash variants
- product variants use curated canonical URLs
- non-indexable duplicates should later be handled with noindex or canonical to parent category if filter pages are added

## Recommended Vercel/domain setup
Set the primary domain to idanny.ru and redirect www.idanny.ru to idanny.ru in Vercel domain settings.
