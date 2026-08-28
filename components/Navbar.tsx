'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Makaleler', href: '/papers' },
    { label: 'Projeler', href: '/projects' },
    { label: 'Hakkında', href: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-dark-900 bg-opacity-80 backdrop-blur-md border-b border-dark-700">
      <div className="container-custom flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold text-gradient group-hover:text-secondary-400 transition-all">
            🔬
          </div>
          <span className="font-bold text-white hidden sm:inline group-hover:text-primary-400 transition-colors">
            Deniz
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-primary-400 transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com"
            className="btn btn-outline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            🐙 GitHub
          </a>
          <a href="mailto:deniz@example.com" className="btn btn-primary text-sm">
            📧 İletişim
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-6 h-0.5 bg-primary-400 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-primary-400 transition-all ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-primary-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-800 bg-opacity-95 backdrop-blur-sm border-t border-dark-700 animate-slide-up">
          <div className="container-custom py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-primary-400 hover:bg-dark-700 rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-dark-700 space-y-2">
              <a
                href="https://github.com"
                className="btn btn-outline w-full justify-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙 GitHub
              </a>
              <a href="mailto:deniz@example.com" className="btn btn-primary w-full justify-center text-sm">
                📧 İletişim
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
