import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-steel-500 text-white hover:bg-steel-400 shadow-sm hover:shadow-md',
  secondary: 'bg-navy-800 text-white hover:bg-navy-700',
  outline: 'border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5',
  outlineDark: 'border-2 border-steel-500 text-steel-500 hover:bg-steel-500 hover:text-white',
  ctaWhite: 'bg-white text-navy-900 hover:bg-slate-100 shadow-sm',
}

const base = 'px-7 py-3 rounded-lg font-semibold text-[15px] tracking-wide transition-all duration-200 inline-flex items-center gap-2'

export default function Button({ children, variant = 'primary', to, href, onClick, type, className = '' }) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return (
    <button type={type || 'button'} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
