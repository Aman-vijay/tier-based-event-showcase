'use client';

import Image from 'next/image';
import { toast } from 'react-hot-toast';
import { Event, UserTier } from '@/lib/supabase';
import { useState } from 'react';

type Props = {
  event: Event;
  tierStyles: Record<UserTier, { bg: string; text: string }>;
};

export default function EventCard({ event, tierStyles }: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
      <div className="relative h-48 w-full bg-gray-100">
        {!imgError ? (
          <Image
            src= "/placeholder.jpg"
            alt={event.title}
            fill
            onError={() => setImgError(true)}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-sm text-gray-500">
            Image unavailable
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
        <p className="text-sm text-gray-500 mt-1">
            {new Date(event.event_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
        </p>

        <p className="text-gray-700 mt-3 text-sm line-clamp-3">{event.description}</p>

        <div className="mt-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${tierStyles[event.tier].bg} ${tierStyles[event.tier].text}`}
          >
            {event.tier.charAt(0).toUpperCase() + event.tier.slice(1)} Tier
          </span>
        </div>

        <button
          onClick={() => toast.success(`🎟️ Registered for "${event.title}"`)}
          className="mt-5 w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
