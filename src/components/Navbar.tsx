'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { useState } from 'react'
const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Realidades', href: '/realidades' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'YouTube', href: '/youtube' }
]
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="bg-das-xiii-purple/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Das XIII
            </Link>
          </div>
          
          {/* Menu para Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-white px-3 py-2 rounded-md text-sm font-medium 
                    ${pathname === item.href 
                      ? 'bg-purple-700' 
                      : 'hover:bg-purple-600 transition-colors'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Botão de Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-purple-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white block px-3 py-2 rounded-md text-base font-medium 
                  ${pathname === item.href 
                    ? 'bg-purple-700' 
                    : 'hover:bg-purple-600'}`}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
