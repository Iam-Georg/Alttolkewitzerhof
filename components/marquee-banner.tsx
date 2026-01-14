export function MarqueeBanner() {
  const items = [
    "Direkt am Elberadweg",
    "Regionale Küche",
    "Gartenrestaurant",
    "Fahrradvermietung",
    "Events & Feiern",
  ]

  // Duplicate items enough times to create seamless infinite scroll
  // Each item + gap takes approximately 300px, so we need enough to fill wide screens
  const repeatedItems = [...Array(10)].flatMap(() => items)

  return (
    <div className="bg-primary py-4 overflow-hidden">
      <div className="animate-marquee inline-flex whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <span key={index} className="inline-flex items-center gap-8 mx-8 text-primary-foreground">
            <span className="text-sm uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>
              {item}
            </span>
            <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 12 12" fill="currentColor">
              <circle cx="6" cy="6" r="3" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
