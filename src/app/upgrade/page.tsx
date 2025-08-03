'use client'
import { useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { 
    CreditCard as CreditCardIcon, 
    Sparkles as SparklesIcon, 
    Star as StarIcon, 
    ShieldCheck as ShieldCheckIcon 
} from 'lucide-react'

const tiers = [
    { id: 'free', name: 'Free', icon: CreditCardIcon, color: 'bg-gray-500' },
    { id: 'silver', name: 'Silver', icon: SparklesIcon, color: 'bg-slate-400' },
    { id: 'gold', name: 'Gold', icon: StarIcon, color: 'bg-amber-500' },
    { id: 'platinum', name: 'Platinum', icon: ShieldCheckIcon, color: 'bg-indigo-600' },
] as const

export default function UpgradePage() {
    const { user } = useUser()
    const [message, setMessage] = useState("")
    const [activeTier, setActiveTier] = useState("")

    const upgradeTier = async (tier: string) => {
        if (!user) return

        await user.update({
            unsafeMetadata: {
                tier
            }
        })

        setActiveTier(tier)
        setMessage(`Tier updated to "${tier}". Go to /events and refresh to see changes.`)
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Upgrade Your Tier</h1>
            <p className="text-gray-600 mb-10 text-center">Select a tier that matches your needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiers.map(tier => (
                    <div 
                        key={tier.id}
                        className={`rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl ${
                            activeTier === tier.id ? 'ring-2 ring-blue-500' : ''
                        }`}
                    >
                        <div className={`${tier.color} p-6 flex items-center justify-center`}>
                            <tier.icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="p-6 bg-white">
                            <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                            <button
                                className={`w-full mt-4 px-4 py-2 rounded-md text-white transition-colors ${
                                    activeTier === tier.id 
                                        ? 'bg-green-600 hover:bg-green-700' 
                                        : 'bg-blue-600 hover:bg-blue-700'
                                }`}
                                onClick={() => upgradeTier(tier.id)}
                            >
                                {activeTier === tier.id ? 'Current Tier' : `Upgrade to ${tier.name}`}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {message && (
                <div className="mt-8 p-4 rounded-md bg-green-50 border border-green-200">
                    <p className="text-green-700 font-medium text-center">{message}</p>
                </div>
            )}
        </div>
    )
}
