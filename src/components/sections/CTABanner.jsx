import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

export default function CTABanner({
  heading = 'Ready to raise the bar on your mining operation?',
  subtitle = "Let\u2019s talk about what Lumarko Mining Innovations can do for your site.",
  buttonText = 'Contact Us',
  buttonTo = '/contact',
}) {
  return (
    <section className="bg-navy-800 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <Reveal>
          <h2 className="font-heading font-bold text-white text-[28px] lg:text-[34px] leading-tight mb-4">
            {heading}
          </h2>
          <p className="text-[17px] text-slate-300 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button to={buttonTo} variant="ctaWhite">
            {buttonText}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
