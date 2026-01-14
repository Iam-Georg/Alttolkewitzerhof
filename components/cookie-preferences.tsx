"use client"

import { useState, useEffect } from "react"
import { Cookie, X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"

interface CookiePreferencesModalProps {
    isOpen: boolean
    onClose: () => void
}

export function CookiePreferencesModal({ isOpen, onClose }: CookiePreferencesModalProps) {
    const [hasConsented, setHasConsented] = useState<boolean | null>(null)

    useEffect(() => {
        if (isOpen) {
            const consent = localStorage.getItem("cookie-consent")
            setHasConsented(consent === "accepted")
        }
    }, [isOpen])

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setHasConsented(true)
        onClose()
    }

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined")
        setHasConsented(false)
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Cookie className="h-5 w-5 text-amber-600" />
                        Cookie-Einstellungen
                    </DialogTitle>
                    <DialogDescription>
                        Hier können Sie Ihre Cookie-Einstellungen verwalten.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm font-medium text-foreground">Notwendige Cookies</span>
                            <p className="text-xs text-muted-foreground">Für das Funktionieren der Website erforderlich</p>
                        </div>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1">Immer aktiv</span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Wir verwenden nur technisch notwendige Cookies.
                        Es erfolgt kein Tracking und keine Analyse Ihrer Besuchsdaten.
                    </p>
                </div>

                <div className="flex gap-2 justify-end">
                    <button
                        onClick={handleDecline}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Ablehnen
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-4 py-2 text-sm bg-amber-600 text-white hover:bg-amber-700 transition-colors"
                    >
                        Akzeptieren
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

// Hook to manage cookie consent
export function useCookieConsent() {
    const [showModal, setShowModal] = useState(false)

    const hasConsented = typeof window !== "undefined"
        ? localStorage.getItem("cookie-consent") === "accepted"
        : null

    const openPreferences = () => setShowModal(true)
    const closePreferences = () => setShowModal(false)

    return {
        showModal,
        openPreferences,
        closePreferences,
        hasConsented,
    }
}

