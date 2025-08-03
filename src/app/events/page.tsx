import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getEventsByTier } from "@/lib/events";
import { UserTier } from "@/lib/supabase";
import Image from "next/image";

export default async function EventsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  const tier = (user?.unsafeMetadata?.tier || "free") as UserTier;

  const events = await getEventsByTier(tier);

  const tierStyles: Record<UserTier, { bg: string; text: string }> = {
    free: { bg: "bg-gray-200", text: "text-gray-800" },
    silver: { bg: "bg-blue-200", text: "text-blue-800" },
    gold: { bg: "bg-yellow-200", text: "text-yellow-800" },
    platinum: { bg: "bg-purple-200", text: "text-purple-800" },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Tier-Based Events</h1>
            <p className="text-gray-600 mt-1">
              Your current tier:{" "}
              <span className="capitalize font-semibold">{tier}</span>
            </p>
          </div>
       
         
        </div>

        {/* Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all"
            >
              <div className="h-48 w-full relative bg-gray-200">
                {event.image_url && (
                  <Image
                    src={event.image_url}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(event.event_date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mt-3 text-sm">{event.description}</p>

                <span
                  className={`inline-block mt-4 px-3 py-1 text-xs font-semibold rounded-full ${tierStyles[event.tier].bg} ${tierStyles[event.tier].text}`}
                >
                  {event.tier}
                </span>

                <button
  onClick={() => alert(`🎟️ You’ve registered for: "${event.title}"`)}
  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition"
>
  Register Now
</button>

              </div>
            </div>
          ))}
        </div>

        {/* Upgrade CTA */}
        {tier !== "platinum" && (
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white shadow-xl text-center">
            <h2 className="text-2xl font-bold">Upgrade Your Tier</h2>
            <p className="mt-2 text-sm">
              Unlock even more exclusive events by upgrading your membership.
            </p>
            <a
              href="/upgrade"
              className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Upgrade Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
