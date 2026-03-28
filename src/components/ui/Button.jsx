import { Link } from 'react-router-dom'

const baseShared = 'rounded-lg font-semibold tracking-wide transition-all duration-200 inline-flex items-center justify-center gap-2'

const variants = {
  primary: `${baseShared} px-7 py-3 text-[15px] bg-[#4A8DB7] text-white hover:bg-[#3A7DA7] shadow-sm hover:shadow-md`,
  secondary: `${baseShared} px-7 py-3 text-[15px] bg-[#132D46] text-white hover:bg-[#1B3A5C]`,
  outline: `${baseShared} px-7 py-3 text-[15px] border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5`,
  outlineDark: `${baseShared} px-7 py-3 text-[15px] border-2 border-[#4A8DB7] text-[#4A8DB7] hover:bg-[#4A8DB7] hover:text-white`,
  ctaWhite: `${baseShared} px-8 py-3.5 text-[15px] bg-white text-[#0C1B2A] hover:bg-slate-100 shadow-sm`,
}

export default function Button({ children, variant = 'primary', to, href, onClick, type, className = '' }) {
  const classes = `${variants[variant] || variants.primary} ${className}`

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
