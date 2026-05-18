import { createClient } from '@supabase/supabase-js'

export const hasSupabaseConfig = () => {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SECRET_KEY)
}

export const createSupabaseAdmin = () => {
  if (!hasSupabaseConfig()) return null

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      }
    }
  )
}
