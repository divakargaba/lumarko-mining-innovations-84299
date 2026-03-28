export default function PlaceholderImage({ aspectRatio = '4/3', label = 'Image — Coming Soon', className = '', rounded = 'rounded-xl' }) {
  return (
    <div
      className={`bg-slate-100 border-2 border-dashed border-slate-300 ${rounded} flex items-center justify-center ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <span className="text-slate-400 text-sm font-medium px-4 text-center">
        [{label}]
      </span>
    </div>
  )
}
