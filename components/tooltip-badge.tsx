"use client"

import { useState } from "react"

interface TooltipBadgeProps {
    label: string
    value: string | number
    tooltip: string
    className?: string
}

export function TooltipBadge({ label, value, tooltip, className = "" }: TooltipBadgeProps) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div className={`relative inline-block ${className}`}>
            <div
                className="cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <div className="text-sm text-muted-foreground">{label}</div>
                <div className="text-2xl font-bold">{value}</div>
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded whitespace-nowrap z-50 pointer-events-none shadow-lg">
                    {tooltip}
                    <div className="absolute top-full left-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900" />
                </div>
            )}
        </div>
    )
}

interface TooltipTextProps {
    children: React.ReactNode
    tooltip: string
    className?: string
}

export function TooltipText({ children, tooltip, className = "" }: TooltipTextProps) {
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <span
            className={`relative inline-block cursor-help border-b border-dotted border-current ${className}`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}
            {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded whitespace-nowrap z-50 pointer-events-none shadow-lg">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900" />
                </div>
            )}
        </span>
    )
}
