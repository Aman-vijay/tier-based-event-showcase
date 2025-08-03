import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Event {
  id: string
  title: string
  description: string
  event_date: string
  image_url: string
  tier: 'free' | 'silver' | 'gold' | 'platinum'
}

export type UserTier = 'free' | 'silver' | 'gold' | 'platinum'

// Helper function to get tier hierarchy
export const getTierHierarchy = (userTier: UserTier): UserTier[] => {
  const tiers: UserTier[] = ['free', 'silver', 'gold', 'platinum']
  const userTierIndex = tiers.indexOf(userTier)
  return tiers.slice(0, userTierIndex + 1)
}
