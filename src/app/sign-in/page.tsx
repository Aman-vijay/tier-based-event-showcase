import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access your tier-based events dashboard
          </p>
        </div>
        <div className="mt-8">
         <SignIn 
  routing="hash"
  appearance={{
    elements: {
      rootBox: "w-full",
      card: "shadow-lg"
    }
  }}
/>

        </div>
      </div>
    </div>
  )
}