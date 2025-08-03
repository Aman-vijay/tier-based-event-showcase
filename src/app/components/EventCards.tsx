'use client'

import { toast } from "react-hot-toast"
import Image from "next/image"
import { Event, UserTier } from "@/lib/supabase"

interface Props {
  event: Event
  tierStyles: Record<UserTier, { bg: string; text: string }>
}

export default function EventCard({ event, tierStyles }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
      <div className="h-48 w-full relative bg-gray-200">
        {event.image_url && (
         <Image
  src="/placeholder.jpg"
  alt="Event image"
  width={400}
  height={200}
/>

        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
  {new Date(event.event_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</p>

        <p className="text-gray-700 mt-3 text-sm">{event.description}</p>

        <span
          className={`inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full ${tierStyles[event.tier].bg} ${tierStyles[event.tier].text}`}
        >
          {event.tier}
        </span>

        <button
          onClick={() => toast.success(`🎟️ Registered for "${event.title}"`)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Register Now
        </button>
      </div>
    </div>
  )
}
