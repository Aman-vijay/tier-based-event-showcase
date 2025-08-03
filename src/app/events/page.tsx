import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getEventsByTier } from "@/lib/events";
import { UserTier } from "@/lib/supabase";
import EventCard from "../components/EventCards";

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
            {tier !== "platinum" && (<div>
                <a
                href="/upgrade"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                Upgrade Tier
                </a>

            </div>)}
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} tierStyles={tierStyles} />
          ))}
        </div>

      
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
