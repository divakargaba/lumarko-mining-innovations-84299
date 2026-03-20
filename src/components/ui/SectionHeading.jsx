export default function SectionHeading({ label, heading, subtitle, centered = true }) {
  const align = centered ? 'text-center mx-auto' : ''

  return (
    <div className={`${centered ? 'max-w-3xl mx-auto' : ''} mb-14`}>
      {label && (
        <p className={`text-[13px] font-semibold tracking-[0.1em] text-steel-500 uppercase mb-3 ${align}`}>
          {label}
        </p>
      )}
      <h2 className={`font-heading font-bold text-navy-700 text-[36px] leading-[44px] lg:text-[42px] lg:leading-[50px] mb-4 ${align}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`text-[17px] leading-[28px] text-slate-500 max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
