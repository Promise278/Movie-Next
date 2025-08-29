import React from 'react'
import { Search } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from './darkmode';
import { Menu } from 'lucide-react';

function Nav() {
  return (
    <div>
      <nav className="bg-white shadow-md md:px-32 px-4 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="md:text-2xl text-md font-bold text-gray-800 flex hover:text-indigo-600 transition duration-300">
        <img src="/fire_logo_02.png" alt="movie-logo" className='w-12 h-12 -mt-2' /> MovieMosaic
      </Link>

      <div className="hidden md:flex space-x-6">
        <Link href="/" className="text-gray-700 hover:text-indigo-600 transition font-medium">Home</Link>
        <Link href="/trending" className="text-gray-700 hover:text-indigo-600 transition font-medium">Trending</Link>
        <Link href="/tvshow" className="text-gray-700 hover:text-indigo-600 transition font-medium">TV Shows</Link>
        <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition font-medium">About</Link>
      </div>

      <div className="relative md:flex hidden">
        <input
          type="text"
          placeholder="Search movies..."
          className="pl-10 pr-5 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-700"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>
      <div>
        <ThemeToggle />
      </div>
      <div className='md:hidden flex mr-4'>
        <Menu size={24} className="text-gray-800" />
      </div>
    </nav>
    </div>
  )
}

export default Nav