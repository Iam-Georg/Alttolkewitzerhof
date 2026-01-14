// Handgezeichnete SVG-Dekorationselemente für einzigartigen Look

export function WavyLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" fill="none" className={className} preserveAspectRatio="none">
      <path
        d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HandDrawnCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 5 C 75 3, 97 25, 95 50 C 97 75, 75 97, 50 95 C 25 97, 3 75, 5 50 C 3 25, 25 3, 50 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HandDrawnArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 30" fill="none" className={className}>
      <path
        d="M5 15 L 40 15 M 32 8 L 42 15 L 32 22"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LeafDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" fill="none" className={className}>
      <path
        d="M30 75 C 30 75, 30 40, 30 10 M 30 50 C 20 45, 10 50, 8 60 M 30 50 C 40 45, 50 50, 52 60 M 30 30 C 22 27, 15 30, 14 38 M 30 30 C 38 27, 45 30, 46 38"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StarBurst({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" fill="none" className={className}>
      <path
        d="M25 5 L25 45 M5 25 L45 25 M10 10 L40 40 M40 10 L10 40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ElbeWaves({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 60" fill="none" className={className} preserveAspectRatio="none">
      <path
        d="M0 30 Q 50 10, 100 30 T 200 30 T 300 30 T 400 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M0 40 Q 50 20, 100 40 T 200 40 T 300 40 T 400 40"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M0 50 Q 50 30, 100 50 T 200 50 T 300 50 T 400 50"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.2"
      />
    </svg>
  )
}

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <path d="M5 75 C 5 40, 40 5, 75 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path
        d="M15 75 C 15 50, 50 15, 75 15"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
