import { Link } from 'react-router-dom'
import { Linkedin } from 'lucide-react'
import LMILogo from './LMILogo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/value-cycle', label: '100-Day Value Cycle' },
  { to: '/team', label: 'Team' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <LMILogo />
            <p className="mt-4 text-[14px] text-slate-400">
              #271, 220 TaigaNova Crescent<br />
              Fort McMurray, Alberta T9K 0N9
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.1em] text-slate-400 uppercase mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[15px] text-slate-500 hover:text-navy-900 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.1em] text-slate-400 uppercase mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:Tony@Lumarko.ca"
                className="text-[15px] text-slate-500 hover:text-navy-900 transition-colors"
              >
                Tony@Lumarko.ca
              </a>
              <a
                href="tel:4036804965"
                className="text-[15px] text-slate-500 hover:text-navy-900 transition-colors"
              >
                403-680-4965
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.1em] text-slate-400 uppercase mb-4">
              Connect
            </h4>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] text-slate-500 hover:text-navy-900 transition-colors"
              aria-label="Lumarko Mining Innovations on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <p className="text-center text-[14px] text-slate-400">
            &copy; 2026 Lumarko Mining Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
