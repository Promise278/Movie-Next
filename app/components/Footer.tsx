import React from 'react'
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-2 flex"><img src="/fire_logo_02.png" alt="movie-logo" className='w-12 h-12 -mt-2' /> MovieMosaic</h2>
          <p className="text-sm text-gray-300">Your go-to place for the latest movies and shows.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/popular" className="hover:text-white">Popular</Link></li>
            <li><Link href="/rated" className="hover:text-white">Top Rated</Link></li>
            <li><Link href="/upcoming" className="hover:text-white">Upcoming</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#"><Facebook className="hover:text-white" size={20} /></a>
            <a href="#"><Twitter className="hover:text-white" size={20} /></a>
            <a href="#"><Instagram className="hover:text-white" size={20} /></a>
            <a href="#"><Github className="hover:text-white" size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} MovieMate. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
