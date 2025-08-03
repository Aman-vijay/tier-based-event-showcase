'use client'
import { useState, useEffect } from 'react'
import { 
    CreditCard, 
    Sparkles, 
    Star, 
    ShieldCheck 
} from 'lucide-react'

const tiers = [
    { 
        id: 'free', 
        name: 'Free', 
        icon: CreditCard, 
        color: 'bg-gradient-to-br from-gray-500 to-gray-600',
        buttonGradient: 'from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700'
    },
    { 
        id: 'silver', 
        name: 'Silver', 
        icon: Sparkles, 
        color: 'bg-gradient-to-br from-slate-400 to-slate-500',
        buttonGradient: 'from-slate-400 to-slate-600 hover:from-slate-500 hover:to-slate-700'
    },
    { 
        id: 'gold', 
        name: 'Gold', 
        icon: Star, 
        color: 'bg-gradient-to-br from-yellow-400 to-amber-500',
        buttonGradient: 'from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600'
    },
    { 
        id: 'platinum', 
        name: 'Platinum', 
        icon: ShieldCheck, 
        color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        buttonGradient: 'from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'
    },
] as const

export default function UpgradePage() {
    const [message, setMessage] = useState("")
    const [activeTier, setActiveTier] = useState("")
    const [countdown, setCountdown] = useState<number | null>(null)

    useEffect(() => {
        if (countdown !== null) {
            if (countdown > 0) {
                const timer = setTimeout(() => {
                    setCountdown(countdown - 1)
                }, 1000)
                return () => clearTimeout(timer)
            } else {
                // Simulated redirect
                console.log('Redirecting to /events')
            }
        }
    }, [countdown])

    const upgradeTier = async (tier: string) => {
        // Simulated tier upgrade
        setActiveTier(tier)
        setMessage(`Tier updated to "${tier}". Redirecting to events in 3 seconds...`)
        setCountdown(3)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full py-8 px-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-slate-600 text-center mb-8">
                    Upgrade Your Tier
                </h1>
                <p className="text-gray-900 text-lg sm:text-xl font-medium text-center mb-10 max-w-2xl mx-auto">
                    Select a tier that matches your needs and unlock exclusive event access.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tiers.map(tier => (
                        <div 
                            key={tier.id}
                            className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 ${
                                activeTier === tier.id ? 'ring-4 ring-blue-400 ring-opacity-60' : ''
                            } bg-white/90 backdrop-blur-sm`}
                        >
                            <div className={`${tier.color} p-6 flex items-center justify-center`}>
                                <tier.icon className="h-14 w-14 text-white drop-shadow-lg" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tier.name}</h3>
                                <button
                                    className={`w-full mt-4 px-4 py-3 rounded-lg text-lg font-semibold text-white transition-all duration-300 ${
                                        activeTier === tier.id 
                                            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                                            : `bg-gradient-to-r ${tier.buttonGradient}`
                                    } shadow-md`}
                                    onClick={() => upgradeTier(tier.id)}
                                >
                                    {activeTier === tier.id ? 'Current Tier' : `Upgrade to ${tier.name}`}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {message && (
                    <div className="mt-10 p-4 rounded-lg bg-blue-50 border border-blue-200 max-w-xl mx-auto">
                        <p className="text-blue-800 font-medium text-center">
                            {message}
                            {countdown !== null && <span> ({countdown})</span>}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}