"use client"

import { useState, useRef, useEffect } from "react"

interface LineChartProps {
    data: Array<{
        date: string
        visits: number
        pageViews: number
        uniqueVisitors: number
    }>
    label?: string
    maxY?: number
}

export function LineChart({ data, label = "Wert", maxY = 100 }: LineChartProps) {
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(100)
    const [containerHeight, setContainerHeight] = useState(100)

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth)
                setContainerHeight(containerRef.current.clientHeight)
            }
        }
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Keine Daten verfügbar</p>
            </div>
        )
    }

    // Filter out days with no data
    const validData = data.filter(d => d.visits > 0)
    const displayData = validData.length > 0 ? validData : data

    // --- FIX START ---
    // Wir berechnen das Maximum aus den tatsächlichen Daten
    const dataMax = Math.max(...displayData.map((d) => d.visits))

    // Wir nehmen den höheren Wert: Entweder den dynamischen Max-Wert + 10% Puffer ODER 10 (um flache Linien bei 0 zu vermeiden)
    // Math.ceil(... / 5) * 5 sorgt für "schöne" Schritte (aufgerundet auf nächste 5er/10er Schritte)
    const calculatedMax = Math.ceil((dataMax * 1.1) / 5) * 5

    // Fallback: Wenn calculatedMax 0 ist, nimm maxY (oder 100), ansonsten den berechneten Wert
    const maxVisits = calculatedMax === 0 ? maxY : calculatedMax
    // --- FIX ENDE ---

    const minVisits = 0
    const range = maxVisits - minVisits

    // Clean layout: separate concerns
    // Y-Labels outside SVG (HTML), SVG is pure data space
    const yLabelWidth = 40
    const chartHeight = containerHeight

    // SVG is pure data space - no padding needed for labels
    const svgWidth = 100
    const svgHeight = chartHeight

    // Padding for outer points so tooltip doesn't get clipped
    const xPadding = 35
    const yPadding = 20

    // Time-based X positioning (not index-based!)
    const timestamps = displayData.map(d => new Date(d.date).getTime())
    const minTime = Math.min(...timestamps)
    const maxTime = Math.max(...timestamps)
    const timeRange = maxTime - minTime || 1

    // Generate Y-axis labels - single source for labels and grid (0-100 in 10er steps)
    const ySteps = 5 // Reduziert auf 5 Schritte für sauberere Labels bei dynamischer Höhe
    const yLabels = Array.from({ length: ySteps + 1 }, (_, i) => {
        const value = Math.round((i / ySteps) * maxVisits)
        return value
    }).reverse()

    // Grid line positions - derived from same formula as labels
    const gridLines = Array.from({ length: ySteps + 1 }, (_, i) => {
        const step = i / ySteps
        return yPadding + step * (svgHeight - 2 * yPadding)
    }).reverse()

    // Calculate line points using time-based X and value-based Y
    const points = displayData.map((d) => {
        const time = new Date(d.date).getTime()
        // Time-based X position with padding
        const x = xPadding + ((time - minTime) / timeRange) * (containerWidth - 2 * xPadding)
        const normalizedValue = maxVisits === 0 ? 0 : (d.visits - minVisits) / range
        const y = svgHeight - yPadding - normalizedValue * (svgHeight - 2 * yPadding)
        return `${x},${y}`
    }).join(" ")

    return (
        <div className="w-full h-64 flex flex-col">
            {/* Chart header - Y-axis (HTML) and SVG (data space) separated */}
            <div className="flex flex-1 min-h-0">
                {/* Y-axis labels - outside SVG, pure HTML layout */}
                <div
                    className="flex flex-col justify-between text-xs text-muted-foreground pr-2 flex-shrink-0 pt-2 pb-0"
                    style={{ width: yLabelWidth, height: chartHeight }}
                >
                    {yLabels.map((value) => (
                        <span key={`y-${value}`} className="leading-none">{value}</span>
                    ))}
                </div>

                {/* Chart SVG - pure data space, no padding for labels */}
                <div ref={containerRef} className="flex-1 min-w-0 relative">
                    <svg
                        viewBox={`0 0 ${containerWidth} ${svgHeight}`}
                        className="w-full h-full"
                        preserveAspectRatio="xMinYMin meet"
                    >
                        {/* Grid lines - full width, no horizontal padding */}
                        {gridLines.map((y, i) => (
                            <line
                                key={`grid-${i}`}
                                x1="0"
                                y1={y}
                                x2={containerWidth}
                                y2={y}
                                stroke="#e5e7eb"
                                strokeWidth="0.5"
                                strokeDasharray="2,2"
                            />
                        ))}

                        {/* Vertical guide lines for each data point - time-based */}
                        {displayData.map((d) => {
                            const time = new Date(d.date).getTime()
                            const x = xPadding + ((time - minTime) / timeRange) * (containerWidth - 2 * xPadding)
                            return (
                                <line
                                    key={`vline-${d.date}`}
                                    x1={x}
                                    y1={0}
                                    x2={x}
                                    y2={svgHeight}
                                    stroke="#f3f4f6"
                                    strokeWidth="0.5"
                                />
                            )
                        })}

                        {/* Line */}
                        <polyline
                            points={points}
                            fill="none"
                            stroke="oklch(0.32 0.06 45)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* Gradient fill under line */}
                        <defs>
                            <linearGradient id="lineGradientNew" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="oklch(0.32 0.06 45)" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="oklch(0.32 0.06 45)" stopOpacity="0.02" />
                            </linearGradient>
                        </defs>

                        {/* Area under line - follows line points to bottom */}
                        <polygon
                            points={`0,${svgHeight} ${points} ${containerWidth},${svgHeight}`}
                            fill="url(#lineGradientNew)"
                        />

                        {/* Points with hover zones */}
                        {displayData.map((d, i) => {
                            const time = new Date(d.date).getTime()
                            const x = xPadding + ((time - minTime) / timeRange) * (containerWidth - 2 * xPadding)
                            const normalizedValue = maxVisits === 0 ? 0 : (d.visits - minVisits) / range
                            const y = svgHeight - yPadding - normalizedValue * (svgHeight - 2 * yPadding)
                            return (
                                <g key={`point-${d.date}`}>
                                    {/* Visible point - pointerEvents="none" so it doesn't block hit area */}
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r={hoveredPoint === i ? "15" : "9"}
                                        fill="oklch(0.32 0.06 45)"
                                        stroke="white"
                                        strokeWidth={hoveredPoint === i ? "1.5" : "1"}
                                        style={{ transition: "all 0.2s" }}
                                        pointerEvents="none"
                                    />
                                    {/* Tooltip on hover - small and positioned above point */}
                                    {hoveredPoint === i && (
                                        <g>
                                            <rect
                                                x={x - 35}
                                                y={y - 50}
                                                width="70"
                                                height="48"
                                                fill="oklch(0.32 0.06 45)"
                                                rx="6"
                                                pointerEvents="none"
                                            />
                                            <text
                                                x={x}
                                                y={y - 32}
                                                textAnchor="middle"
                                                fontSize="10"
                                                fill="white"
                                                fontWeight="400"
                                                pointerEvents="none"
                                            >
                                                {d.date}
                                            </text>
                                            <text
                                                x={x}
                                                y={y - 18}
                                                textAnchor="middle"
                                                fontSize="14"
                                                fill="white"
                                                fontWeight="600"
                                                pointerEvents="none"
                                            >
                                                {d.visits}
                                            </text>
                                        </g>
                                    )}
                                    {/* Hit area - transparent, receives events - MUST be last for proper z-index */}
                                    <circle
                                        cx={x}
                                        cy={y}
                                        r="15"
                                        fill="transparent"
                                        style={{ cursor: "pointer" }}
                                        onMouseEnter={() => setHoveredPoint(i)}
                                        onMouseLeave={() => setHoveredPoint(null)}
                                    />
                                </g>
                            )
                        })}
                    </svg>
                </div>
            </div>

            {/* X-axis labels - outside SVG, time-ordered, full width */}
            <div
                className="flex justify-between text-xs text-muted-foreground px-0"
                style={{ marginLeft: yLabelWidth }}
            >
                {/* Show first, middle, and last date - time-sorted */}
                {displayData.length > 0 && (
                    <>
                        <span>{displayData[0].date}</span>
                        {displayData.length > 2 && (
                            <span>{displayData[Math.floor(displayData.length / 2)].date}</span>
                        )}
                        {displayData.length > 1 && (
                            <span>{displayData[displayData.length - 1].date}</span>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

interface BarChartProps {
    data: Array<{
        date: string
        visits: number
        pageViews: number
        uniqueVisitors: number
    }>
    label?: string
    maxY?: number
}

export function BarChart({ data, label = "Wert", maxY = 100 }: BarChartProps) {
    const [hoveredBar, setHoveredBar] = useState<number | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState(100)
    const [containerHeight, setContainerHeight] = useState(100)

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth)
                setContainerHeight(containerRef.current.clientHeight)
            }
        }
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Keine Daten verfügbar</p>
            </div>
        )
    }

    // Fixed Y-axis: maxY is provided by user, Y=0 at origin
    const maxVisits = maxY
    const minVisits = 0

    // Clean layout: separate concerns
    // Y-Labels outside SVG (HTML), SVG is pure data space
    const yLabelWidth = 40
    const chartHeight = containerHeight

    // SVG is pure data space - no padding needed for labels
    const svgWidth = 100
    const svgHeight = chartHeight

    // Time-based X positioning (not index-based!)
    const timestamps = data.map(d => new Date(d.date).getTime())
    const minTime = Math.min(...timestamps)
    const maxTime = Math.max(...timestamps)
    const timeRange = maxTime - minTime || 1

    // Bar width based on minimum time gap
    const barWidth = containerWidth / (data.length + 1)

    // Generate Y-axis labels - single source for labels and grid (0-100 in 10er steps)
    const ySteps = 10
    const yLabels = Array.from({ length: ySteps + 1 }, (_, i) => {
        const value = Math.round((i / ySteps) * maxVisits)
        return value
    }).reverse()

    // Grid line positions - derived from same formula as labels
    const gridLines = Array.from({ length: ySteps + 1 }, (_, i) => {
        const step = i / ySteps
        return step * svgHeight
    }).reverse()

    return (
        <div className="w-full h-64 flex flex-col">
            {/* Chart header - Y-axis (HTML) and SVG (data space) separated */}
            <div className="flex flex-1 min-h-0">
                {/* Y-axis labels - outside SVG, pure HTML layout */}
                <div
                    className="flex flex-col justify-between text-xs text-muted-foreground pr-2 flex-shrink-0 pt-2 pb-0"
                    style={{ width: yLabelWidth, height: chartHeight }}
                >
                    {yLabels.map((value) => (
                        <span key={`y-${value}`} className="leading-none">{value}</span>
                    ))}
                </div>

                {/* Chart SVG - pure data space, no padding for labels */}
                <div ref={containerRef} className="flex-1 min-w-0 relative">
                    <svg
                        viewBox={`0 0 ${containerWidth} ${svgHeight}`}
                        className="w-full h-full"
                        preserveAspectRatio="xMinYMin meet"
                    >
                        {/* Grid lines - full width */}
                        {gridLines.map((y, i) => (
                            <line
                                key={`grid-${i}`}
                                x1="0"
                                y1={y}
                                x2={containerWidth}
                                y2={y}
                                stroke="#e5e7eb"
                                strokeWidth="0.5"
                                strokeDasharray="2,2"
                            />
                        ))}

                        {/* Bars - time-based X positioning */}
                        {data.map((d, i) => {
                            const time = new Date(d.date).getTime()
                            // Time-based X position
                            const x = ((time - minTime) / timeRange) * containerWidth
                            const barHeight = maxVisits === 0 ? 0 : (d.visits / maxVisits) * svgHeight
                            const y = svgHeight - barHeight
                            const displayBarWidth = barWidth * 0.8

                            return (
                                <g key={`bar-${d.date}`}>
                                    {/* Hit area - transparent rect for hover detection */}
                                    <rect
                                        x={x - displayBarWidth / 2 - 1}
                                        y={0}
                                        width={displayBarWidth + 2}
                                        height={svgHeight}
                                        fill="transparent"
                                        style={{ cursor: "pointer" }}
                                        onMouseEnter={() => setHoveredBar(i)}
                                        onMouseLeave={() => setHoveredBar(null)}
                                    />
                                    {/* Visible bar - pointerEvents="none" so hit area receives events */}
                                    <rect
                                        x={x - displayBarWidth / 2}
                                        y={y}
                                        width={displayBarWidth}
                                        height={barHeight}
                                        fill={hoveredBar === i ? "oklch(0.42 0.06 45)" : "oklch(0.32 0.06 45)"}
                                        rx="1"
                                        opacity="0.9"
                                        style={{ cursor: "pointer", transition: "all 0.2s" }}
                                        pointerEvents="none"
                                    />
                                    {/* Value label on top of bar */}
                                    {d.visits > 0 && (
                                        <text
                                            x={x}
                                            y={y - 1}
                                            textAnchor="middle"
                                            fontSize="3"
                                            fill={hoveredBar === i ? "oklch(0.42 0.06 45)" : "oklch(0.32 0.06 45)"}
                                            fontWeight="500"
                                            style={{ transition: "all 0.2s", pointerEvents: "none" }}
                                        >
                                            {d.visits}
                                        </text>
                                    )}
                                    {/* Tooltip on hover */}
                                    {hoveredBar === i && (
                                        <g>
                                            <rect
                                                x={x - 35}
                                                y={y - 50}
                                                width="70"
                                                height="48"
                                                fill="oklch(0.32 0.06 45)"
                                                rx="6"
                                                pointerEvents="none"
                                            />
                                            <text
                                                x={x}
                                                y={y - 32}
                                                textAnchor="middle"
                                                fontSize="10"
                                                fill="white"
                                                fontWeight="400"
                                                pointerEvents="none"
                                            >
                                                {d.date}
                                            </text>
                                            <text
                                                x={x}
                                                y={y - 18}
                                                textAnchor="middle"
                                                fontSize="14"
                                                fill="white"
                                                fontWeight="600"
                                                pointerEvents="none"
                                            >
                                                {d.visits}
                                            </text>
                                        </g>
                                    )}
                                </g>
                            )
                        })}
                    </svg>
                </div>
            </div>

            {/* X-axis labels - outside SVG, time-ordered, full width */}
            <div
                className="flex justify-between text-xs text-muted-foreground px-0"
                style={{ marginLeft: yLabelWidth }}
            >
                {/* Show first, middle, and last date - time-sorted */}
                {data.length > 0 && (
                    <>
                        <span>{data[0].date}</span>
                        {data.length > 2 && (
                            <span>{data[Math.floor(data.length / 2)].date}</span>
                        )}
                        {data.length > 1 && (
                            <span>{data[data.length - 1].date}</span>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

interface HorizontalBarChartProps {
    data: Record<string, number>
    maxItems?: number
}

export function HorizontalBarChart({ data, maxItems = 10 }: HorizontalBarChartProps) {
    if (!data || Object.keys(data).length === 0) {
        return (
            <div className="w-full h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Keine Daten verfügbar</p>
            </div>
        )
    }

    const total = Object.values(data).reduce((a, b) => a + b, 0)
    if (total === 0) {
        return (
            <div className="w-full h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Keine Daten verfügbar</p>
            </div>
        )
    }

    const colors = [
        "oklch(0.32 0.06 45)",      // Primary
        "oklch(0.55 0.14 35)",      // Orange
        "oklch(0.35 0.08 145)",     // Blue
        "oklch(0.45 0.12 25)",      // Red
        "oklch(0.72 0.10 100)",     // Green
        "oklch(0.85 0.05 75)",      // Yellow
        "oklch(0.45 0.02 45)",      // Gray
        "oklch(0.65 0.12 280)",     // Purple
        "oklch(0.88 0.03 80)",      // Light
    ]

    const sortedData = Object.entries(data)
        .filter(([_, value]) => value > 0)
        .sort((a, b) => b[1] - a[1])
        .slice(0, maxItems)

    const maxValue = Math.max(...sortedData.map(([_, value]) => value))

    return (
        <div className="w-full space-y-3">
            {sortedData.map(([label, value], i) => {
                const percentage = ((value / total) * 100).toFixed(1)
                const barWidth = maxValue > 0 ? (value / maxValue) * 100 : 0

                return (
                    <div key={label}>
                        <div className="flex items-center justify-between text-xs mb-1">
                            <span className="truncate text-muted-foreground flex-1 max-w-[180px]">
                                {label && label.length > 25 ? label.slice(0, 22) + "..." : label || "Direkt"}
                            </span>
                            <div className="flex items-center gap-2 ml-2">
                                <span className="font-semibold text-primary">{value}</span>
                                <span className="text-muted-foreground text-xs whitespace-nowrap">({percentage}%)</span>
                            </div>
                        </div>
                        <div className="h-5 bg-secondary overflow-hidden rounded">
                            <div
                                className="h-full rounded"
                                style={{
                                    width: `${barWidth}%`,
                                    backgroundColor: colors[i % colors.length]
                                }}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

