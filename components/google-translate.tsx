'use client'

import { useEffect } from 'react'

export function GoogleTranslate() {
  useEffect(() => {
    const initGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'de',
            includedLanguages: 'en',
            autoDisplay: false
          },
          'google_translate_element'
        )
      } else {
        // Load the script if not already loaded
        const script = document.createElement('script')
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        script.async = true
        document.head.appendChild(script)

        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'de',
              includedLanguages: 'en',
              autoDisplay: false
            },
            'google_translate_element'
          )
        }
      }
    }

    // Delay initialization to avoid hydration issues
    const timer = setTimeout(initGoogleTranslate, 1000)

    return () => clearTimeout(timer)
  }, [])

  return <div id="google_translate_element" style={{ display: 'none' }} />
}
