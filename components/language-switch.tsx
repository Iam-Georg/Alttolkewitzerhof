'use client';

import { useEffect } from 'react';

export function LanguageSwitch() {
    useEffect(() => {
        // Google Translate Banner automatisch ausblenden
        const observer = new MutationObserver(() => {
            const banner = document.querySelector('.goog-te-banner-frame');
            if (banner) {
                (banner as HTMLIFrameElement).style.display = 'none !important';
            }

            // Auch das Body-Padding-Problem beheben
            const body = document.body;
            if (body.style.top && body.style.top !== '0px') {
                body.style.top = '0';
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style'],
        });

        // Initiales Ausblenden
        setTimeout(() => {
            const banner = document.querySelector('.goog-te-banner-frame');
            if (banner) {
                (banner as HTMLIFrameElement).style.display = 'none !important';
            }
            document.body.style.top = '0';
        }, 1000);

        return () => observer.disconnect();
    }, []);

    const setLanguage = (lang: 'de' | 'en') => {
        document.cookie = `googtrans=/de/${lang}; path=/`;
        location.reload();
    };

    return (
        <div className="flex items-center gap-2 text-sm">
            <button
                onClick={() => setLanguage('de')}
                className="whitespace-nowrap px-2 py-1 transition-colors hover:text-accent"
            >
                DE
            </button>
            <span className="text-muted-foreground">|</span>
            <button
                onClick={() => setLanguage('en')}
                className="whitespace-nowrap px-2 py-1 transition-colors hover:text-accent"
            >
                EN
            </button>
        </div>
    );
}

