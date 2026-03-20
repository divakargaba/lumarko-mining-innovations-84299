import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-[15px] font-semibold text-navy-700">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 py-6 border-t border-slate-200">
          {children}
        </div>
      )}
    </div>
  )
}
