'use client'

import Link from 'next/link'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs'

export default function Header() {
  const { user } = useUser()

  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-blue-600">
        🎟️ Event Showcase
      </Link>

      <nav className="flex items-center gap-4">
        <SignedOut>
          <Link href="/sign-in" className="text-gray-700 hover:text-blue-600">
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:block">
              Hello, {user?.firstName || user?.username || 'User'}
            </span>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </nav>
    </header>
  )
}
