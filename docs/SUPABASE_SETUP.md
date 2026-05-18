# Подключение базы данных Supabase для iDanny

## 1. Создай проект Supabase
Открой https://supabase.com → New project.

## 2. Создай таблицы
Supabase → SQL Editor → вставь содержимое:

db/supabase_schema.sql

Нажми Run.

## 3. Возьми ключи
Supabase → Project Settings → API / Connect.

Нужны:
- Project URL
- Publishable key
- Secret key

По актуальной документации Supabase для Next.js используются:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

Для серверных admin-операций iDanny использует:
- SUPABASE_SECRET_KEY

## 4. Добавь переменные в Vercel
Vercel → Project → Settings → Environment Variables:

NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
SUPABASE_SECRET_KEY
NEXT_PUBLIC_ADMIN_DEMO_PASSWORD

## 5. Redeploy
Vercel → Deployments → Redeploy.

## 6. Залей стартовый каталог
Открой:

/admin/login

Пароль demo:
idanny-admin

Дальше:
Admin → Товары → Залить каталог в БД.

После этого цены и бейджи будут сохраняться в Supabase.

## Что уже сделано в v13
- API: /api/admin/products
- API: /api/products
- Admin products connected to API
- Public homepage/catalog/product pages read products from Supabase on server side
- Fallback to data/products.json if Supabase env variables are not configured

## Важно
Demo admin password не годится для production security. Следующий шаг — нормальная авторизация.
