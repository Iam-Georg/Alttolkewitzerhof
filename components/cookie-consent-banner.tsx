"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"

interface CookieConsentBannerProps {
    onAccept: () => void
    onDecline: () => void
}

export function CookieConsentBanner({ onAccept, onDecline }: CookieConsentBannerProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const hasConsented = localStorage.getItem("cookie-consent")
        if (!hasConsented) {
            setIsVisible(true)
        }
    }, [])

    if (!isVisible) return null

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setIsVisible(false)
        onAccept()
    }

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined")
        setIsVisible(false)
        onDecline()
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-auto md:right-6 z-50 w-auto max-w-sm">
            <div className="bg-white border-1 border-white/60 shadow-xl">
                <div className="p-4">
                    <div className="flex items-start gap-3">
                        <Cookie className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <h4 className="font-semibold text-amber-900 mb-1 text-sm">
                                Cookies auf unserer Website
                            </h4>
                            <p className="text-amber-800 text-xs mb-3">
                                Wir verwenden nur technisch notwendige Cookies,
                                die für das Funktionieren der Website erforderlich sind.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleAccept}
                                    className="bg-amber-600 text-white px-3 py-1.5 text-xs font-medium hover:bg-amber-700 transition-colors cursor-pointer"
                                >
                                    Verstanden
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="bg-transparent text-amber-700 border border-amber-700 px-3 py-1.5 text-xs font-medium hover:bg-amber-700/25 transition-colors cursor-pointer"
                                >
                                    Ablehnen
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={handleDecline}
                            className="text-amber-600 hover:text-amber-800 transition-colors flex-shrink-0 cursor-pointer"
                            aria-label="Hinweis schließen"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

