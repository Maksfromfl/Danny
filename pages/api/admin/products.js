import fallbackProducts from '../../../data/products.json'
import { createSupabaseAdmin, hasSupabaseConfig } from '../../../lib/supabaseAdmin'
import { normalizeDbProduct } from '../../../lib/productsDb'

const mapProductToDb = (product) => {
  const numericPrice = typeof product.price === 'string'
    ? Number(product.price.replace(/[^0-9]/g, ''))
    : Number(product.price || product.price_value || 0)

  return {
    slug: product.slug,
    name: product.name,
    category: product.category,
    model: product.model || '',
    price: numericPrice || 0,
    price_label: product.price || `${numericPrice.toLocaleString('ru-RU')} ₽`,
    badge: product.badge || 'В наличии',
    availability: product.availability || 'В наличии',
    memory: product.memory || '',
    color: product.color || '',
    configuration: product.sim || product.configuration || '',
    image_url: product.img || product.image_url || '',
    sku: product.sku || product.slug.toUpperCase().replaceAll('-', '_'),
    seo_title: product.seo_title || '',
    meta_description: product.meta_description || '',
    h1: product.h1 || ''
  }
}

export default async function handler(req, res) {
  if (!hasSupabaseConfig()) {
    if (req.method === 'GET') {
      return res.status(200).json({ source: 'fallback-json', products: fallbackProducts })
    }
    return res.status(501).json({
      error: 'Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY in Vercel.'
    })
  }

  const supabase = createSupabaseAdmin()

  if (req.method === 'GET') {
    const { data, error } = await supabase.from('products').select('*').order('category').order('name')
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ source: 'supabase', products: data.map(normalizeDbProduct) })
  }

  if (req.method === 'PUT') {
    const product = req.body
    if (!product?.slug) return res.status(400).json({ error: 'Missing product slug' })

    const payload = mapProductToDb(product)
    const { data, error } = await supabase
      .from('products')
      .upsert(payload, { onConflict: 'slug' })
      .select()
      .single()

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ product: normalizeDbProduct(data) })
  }

  if (req.method === 'POST') {
    const products = Array.isArray(req.body?.products) ? req.body.products : fallbackProducts
    const payload = products.map(mapProductToDb)
    const { data, error } = await supabase
      .from('products')
      .upsert(payload, { onConflict: 'slug' })
      .select()

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ imported: data.length })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
