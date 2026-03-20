import { Link } from 'react-router-dom'

export default function LMILogo({ light = false }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Lumarko Mining Innovations — Home">
      <span className="w-1 h-8 bg-steel-500 rounded-full mr-3" />
      <span className={`font-heading font-bold text-[28px] ${light ? 'text-white' : 'text-navy-900'}`}>
        LMI
      </span>
    </Link>
  )
}
