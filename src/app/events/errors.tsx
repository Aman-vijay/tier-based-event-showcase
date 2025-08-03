'use client'

import { AlertTriangle } from 'lucide-react'

export default function Error({ error }: { error: Error }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
      <AlertTriangle className="h-10 w-10 text-red-600" />
      <h2 className="text-2xl font-bold text-red-700">Something went wrong</h2>
      <p className="text-gray-600 max-w-md">
        {error.message || "An unexpected error occurred while loading events. Please try again later."}
      </p>
    </div>
  )
}
