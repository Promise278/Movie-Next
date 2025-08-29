'use client'

import { useTheme } from 'next-themes'
import { LuMoon } from "react-icons/lu";
import { LuLoader } from "react-icons/lu";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()


  const isDark = theme === 'dark'
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    className="flex items-center gap-2 shadow-md rounded-md bg-white px-4 py-3 text-gray-800 hover:bg-gray-100"
    >
      {theme === 'dark' ? <LuLoader size={22} /> : <LuMoon size={22} />}
    </button>
  )
}