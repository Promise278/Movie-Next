"use client"
import React, { useState } from 'react'
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './darkmode';
import { useTheme } from "next-themes";

function Nav() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"} shadow-md md:px-32 px-4 py-4 flex items-center justify-between sticky top-0 z-50`}>
      <Link href="/" className="md:text-2xl text-md font-bold flex hover:text-indigo-600 transition duration-300">
        <img src="/fire_logo_02.png" alt="movie-logo" className='w-12 h-12 -mt-2' /> MovieMosaic
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-indigo-600 transition font-medium">Home</Link>
        <Link href="/popular" className="hover:text-indigo-600 transition font-medium">Popular</Link>
        <Link href="/rated" className="hover:text-indigo-600 transition font-medium">Top Rated</Link>
        <Link href="/upcoming" className="hover:text-indigo-600 transition font-medium">Upcoming</Link>
      </div>

      <div className="relative md:flex hidden">
        <input
          type="text"
          placeholder="Search movies..."
          className="pl-10 pr-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>

      <div className='md:flex hidden'>
        <ThemeToggle />
      </div>

       <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        {menuOpen ? (
          <X size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {menuOpen && (
        <div className={`${isDark ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"} absolute top-16 left-0 w-full shadow-lg flex flex-col space-y-4 px-6 py-6 md:hidden`}>
          <Link href="/" className="hover:text-indigo-600 transition font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/popular" className="hover:text-indigo-600 transition font-medium" onClick={() => setMenuOpen(false)}>Popular</Link>
          <Link href="/rated" className="hover:text-indigo-600 transition font-medium" onClick={() => setMenuOpen(false)}>Top Rated</Link>
          <Link href="/upcoming" className="hover:text-indigo-600 transition font-medium" onClick={() => setMenuOpen(false)}>Upcoming</Link>
        </div>
      )}
    </nav>
  )
}

export default Nav