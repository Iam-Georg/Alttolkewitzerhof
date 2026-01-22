/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.css' {
    const content: string
    export default content
}

// Handle CSS side-effect imports (import "./file.css")
declare module '*.css' {
    export default unknown
}

// Google Translate API types
declare global {
    interface Window {
        google?: {
            translate: {
                TranslateElement: new (
                    config: {
                        pageLanguage: string
                        includedLanguages: string
                        autoDisplay: boolean
                    },
                    elementId: string
                ) => void
            }
        }
        googleTranslateElementInit?: () => void
    }
}

