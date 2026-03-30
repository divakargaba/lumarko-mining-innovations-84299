import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import LMILogo from './LMILogo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/value-cycle', label: '100-Day Value Cycle' },
  { to: '/team', label: 'Team' },
  { to: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const solid = !isHome || scrolled

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${solid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          <LMILogo light={!solid} />

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition-colors ${
                    solid
                      ? isActive ? 'text-navy-900 border-b-2 border-steel-500 pb-1' : 'text-slate-600 hover:text-navy-900'
                      : isActive ? 'text-white border-b-2 border-steel-500 pb-1' : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                solid
                  ? 'bg-[#4A8DB7] text-white hover:bg-[#3A7DA7] shadow-sm'
                  : 'border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className={`w-6 h-6 ${solid ? 'text-navy-900' : 'text-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-navy-900 z-50 flex flex-col">
          <div className="flex justify-end p-6">
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <X className="w-7 h-7 text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[24px] font-heading font-semibold transition-colors ${isActive ? 'text-steel-400' : 'text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-8 w-64 text-center bg-steel-500 text-white hover:bg-steel-400 px-7 py-3.5 rounded-lg font-semibold text-[15px] transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
