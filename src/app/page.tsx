import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-400 via-coral-300 to-violet-500 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center space-y-10 bg-white/95 backdrop-blur-xl rounded-2xl p-8 sm:p-12 shadow-xl">
        <SignedOut>
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-600 leading-tight animate-fade-in">
              🎟️ Tier-Based <br /> Event Showcase
            </h1>
            <p className="text-gray-900 text-lg sm:text-xl font-medium max-w-xl mx-auto">
              Discover exclusive events tailored to your membership tier. Sign in to unlock a world of experiences.
            </p>
            <div className="flex justify-center flex-wrap gap-4 pt-4">
              <Link
                href="/sign-in"
                className="bg-gradient-to-r from-teal-500 to-violet-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-teal-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="border-2 border-teal-500 text-teal-600 px-8 py-3 rounded-lg text-lg font-semibold shadow-sm hover:bg-teal-50 hover:border-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-violet-600 animate-fade-in">
              Welcome Back 👋
            </h1>
            <p className="text-gray-900 text-lg sm:text-xl font-medium max-w-xl mx-auto">
              Explore exclusive tier-based events and elevate your membership for more!
            </p>
            <div className="flex justify-center flex-wrap gap-4 pt-4">
              <Link
                href="/events"
                className="bg-gradient-to-r from-teal-500 to-violet-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-teal-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105"
              >
                View Events
              </Link>
              <Link
                href="/upgrade"
                className="bg-white text-teal-600 border-2 border-teal-500 px-8 py-3 rounded-lg text-lg font-semibold shadow-sm hover:bg-teal-50 hover:border-teal-600 transition-all duration-300 transform hover:scale-105"
              >
                Upgrade Tier
              </Link>
              <div className="pt-1">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}