"use client"

import { useState } from "react"
import { AlertTriangle, X } from "lucide-react"

export function NoticeBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full">
      <div className="bg-amber-50 border border-amber-200 rounded-lg shadow-lg">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-amber-900 mb-1 text-sm">
                Bitte beachten Sie die Umleitung ab 12.5.2025
              </h4>
              <p className="text-amber-800 text-xs">
                Navigieren Sie am besten nach "Wasserwerk Tolkewitz", dann fahren Sie weiter geradeaus in die
                Sackgasse (Wehlener-/Österreicherstraße). Das Hotel ist am Ende der Sackgasse erreichbar.
              </p>
              <p className="text-amber-800 text-xs mt-2">
                <strong>Baumaßnahme 2.6. – 4.7.2025:</strong> Zufahrt zum Hotel nicht möglich. Parken auf der
                Wehlener Str. zwischen Marienberger Str. und der Brücke. Erreichbarkeit zu Fuß jederzeit gegeben.
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
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

