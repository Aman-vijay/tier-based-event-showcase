import { supabase } from "./supabase"
import { Event, UserTier, getTierHierarchy } from "./supabase"

export async function getEventsByTier(tier: UserTier): Promise<Event[]> {
  const allowedTiers = getTierHierarchy(tier)

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .in("tier", allowedTiers)

  if (error) {
    console.error("Error fetching events:", error.message)
    return []
  }

  return data ?? []
}
