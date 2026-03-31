import { Link } from 'react-router-dom'

export default function LMILogo({ light = false }) {
  return (
    <Link to="/" className="flex items-center" aria-label="Lumarko Mining Innovations — Home">
      <img
        src="/images/Logo.jpg"
        alt="Lumarko Mining Innovations"
        className="h-20 w-auto object-contain"
      />
    </Link>
  )
}
