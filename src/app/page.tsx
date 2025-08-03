import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full text-center space-y-6">
        <SignedOut>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Welcome to Tier-Based Event Showcase 🎉
            </h1>
            <p className="text-gray-600 text-lg">
              Sign up or log in to view exclusive events based on your membership tier.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/sign-in"
                className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">Welcome back 👋</h1>
            <p className="text-gray-600">You&apos;re logged in. Ready to explore events?</p>
            <div className="flex justify-center gap-4">
              <Link
                href="/events"
                className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
              >
                View Events
              </Link>
              <Link
                href="/upgrade"
                className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
              >
                Upgrade Tier
              </Link>
              <UserButton />
            </div>
          </div>
        </SignedIn>
      </div>
    </div>
  )
}
