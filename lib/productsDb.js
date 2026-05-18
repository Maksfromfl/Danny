import fallbackProducts from '../data/products.json'
import { createSupabaseAdmin, hasSupabaseConfig } from './supabaseAdmin'

export const normalizeDbProduct = (row) => ({
  slug: row.slug,
  name: row.name,
  category: row.category,
  model: row.model || '',
  price: row.price_label || (row.price ? `${Number(row.price).toLocaleString('ru-RU')} ₽` : ''),
  price_value: row.price ? Number(row.price) : null,
  badge: row.badge || 'В наличии',
  availability: row.availability || 'В наличии',
  memory: row.memory || '',
  color: row.color || '',
  sim: row.configuration || '',
  img: row.image_url || '',
  href: `/product/${row.slug}`,
  sku: row.sku || row.slug.toUpperCase().replaceAll('-', '_'),
  seo_title: row.seo_title || '',
  meta_description: row.meta_description || '',
  h1: row.h1 || ''
})

export async function getProducts() {
  if (!hasSupabaseConfig()) return fallbackProducts

  const supabase = createSupabaseAdmin()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('category', { ascending: true })
    .order('name', { ascending: true })

  if (error) {
    console.error('Supabase products error:', error.message)
    return fallbackProducts
  }

  return data?.length ? data.map(normalizeDbProduct) : fallbackProducts
}

export async function getProductBySlug(slug) {
  if (!hasSupabaseConfig()) {
    return fallbackProducts.find((p) => p.slug === slug) || null
  }

  const supabase = createSupabaseAdmin()
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error || !data) {
    const fallback = fallbackProducts.find((p) => p.slug === slug)
    return fallback || null
  }

  return normalizeDbProduct(data)
}
