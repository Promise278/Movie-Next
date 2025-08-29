'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemedBody({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="bg-white text-black">{children}</div>

  const isDark = theme === "dark"

  return (
    <div className={isDark ? "bg-gray-900 text-gray-500 min-h-screen" : "bg-white text-blue-900 min-h-screen"}>
      {children}
    </div>
  )
}
