"use client"

import { useState, useEffect } from "react"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { CookiePreferencesModal, useCookieConsent } from "@/components/cookie-preferences"

interface ClientLayoutProps {
    children: React.ReactNode
}

export function ClientLayout({ children }: ClientLayoutProps) {
    const { showModal, openPreferences, closePreferences } = useCookieConsent()
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const hasConsented = localStorage.getItem("cookie-consent")
        if (!hasConsented) {
            setShowBanner(true)
        }
    }, [])

    // Listen for cookie settings button click from footer
    useEffect(() => {
        const handleOpenCookieSettings = () => {
            openPreferences()
        }
        window.addEventListener("open-cookie-settings", handleOpenCookieSettings)

        return () => {
            window.removeEventListener("open-cookie-settings", handleOpenCookieSettings)
        }
    }, [])

    function handleAccept() {
        setShowBanner(false)
    }

    function handleDecline() {
        setShowBanner(false)
    }

    return (
        <>
            {children}
            <CookiePreferencesModal
                isOpen={showModal}
                onClose={closePreferences}
            />
            {showBanner && (
                <CookieConsentBanner onAccept={handleAccept} onDecline={handleDecline} />
            )}
        </>
    )
}

