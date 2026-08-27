'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          🔬 Deniz
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-accent transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/blog" className="hover:text-accent transition-colors">
            Blog
          </Link>
          <Link href="/papers" className="hover:text-accent transition-colors">
            Makaleler
          </Link>
          <Link href="/projects" className="hover:text-accent transition-colors">
            Projeler
          </Link>
          <Link href="/about" className="hover:text-accent transition-colors">
            Hakkında
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-primary block"></span>
          <span className="w-6 h-0.5 bg-primary block"></span>
          <span className="w-6 h-0.5 bg-primary block"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Ana Sayfa
          </Link>
          <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
            Blog
          </Link>
          <Link href="/papers" className="block px-4 py-2 hover:bg-gray-100">
            Makaleler
          </Link>
          <Link href="/projects" className="block px-4 py-2 hover:bg-gray-100">
            Projeler
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            Hakkında
          </Link>
        </div>
      )}
    </nav>
  )
}
