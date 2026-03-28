export default function PageHeader({ heading, subtitle, children }) {
  return (
    <section className="bg-navy-900 pt-40 pb-28 lg:pt-48 lg:pb-36 text-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h1 className="font-heading font-bold text-white text-[40px] lg:text-[48px] leading-tight mb-4">
          {heading}
        </h1>
        {subtitle && (
          <p className="text-[18px] text-slate-300">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
