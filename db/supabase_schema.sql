-- iDanny production database schema v13

create extension if not exists pgcrypto;

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  model text,
  price numeric not null default 0,
  price_label text,
  currency text default 'RUB',
  badge text default 'В наличии',
  availability text default 'В наличии',
  color text,
  memory text,
  configuration text,
  image_url text,
  sku text,
  seo_title text,
  meta_description text,
  h1 text,
  canonical_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  customer_phone text,
  customer_email text,
  status text default 'new',
  total numeric,
  comment text,
  created_at timestamptz default now()
);

create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id),
  quantity integer default 1,
  price numeric
);

create table if not exists journal_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  meta_description text,
  content text,
  status text default 'draft',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Optional updated_at trigger
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_products_updated_at on products;
create trigger set_products_updated_at
before update on products
for each row
execute procedure set_updated_at();
