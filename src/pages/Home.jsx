import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Trophy, ChevronDown, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'

function Hero() {
  return (
    <section className="bg-navy-900 relative overflow-hidden min-h-screen flex items-center pt-28 lg:pt-36 pb-16 lg:pb-20">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(74,141,183,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,141,183,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="font-heading font-extrabold text-white text-[40px] leading-[48px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px] mb-6">
              Forged in the Field. Engineered to Outperform.
            </h1>

            <p className="text-[17px] lg:text-[18px] leading-[28px] text-slate-300 max-w-xl mb-6">
              Front-line driven innovations from the people who operate and maintain Canada&apos;s oil sands—delivering measurable performance where it matters most.
            </p>

            <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 px-4 py-2 rounded-full text-[12px] font-bold tracking-wider uppercase">
              <Trophy className="w-3.5 h-3.5" />
              Canadian Institute of Mining Safety Technology of the Year for TrackTopper System — 2024
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="w-full max-w-lg lg:max-w-none" style={{ aspectRatio: '4/3' }}>
              <img
                src="/images/tracktopper-crew.jpg"
                alt="Mine site crew inspecting TrackTopper system"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white/40 animate-bounce" />
      </div>
    </section>
  )
}

function CredibilityBar() {
  const items = [
    { icon: Trophy, text: 'CIM Safety Technology of the Year' },
  ]

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-slate-300">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 py-2">
                <item.icon className="w-5 h-5 text-steel-500" />
                <span className="text-[15px] font-semibold text-navy-700">{item.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-steel-500 uppercase mb-3">
              ABOUT LUMARKO
            </p>
            <h2 className="font-heading font-bold text-navy-700 text-[32px] leading-[40px] lg:text-[38px] lg:leading-[46px] mb-6">
              Frontline-driven, technology-enabled, results-focused.
            </h2>
            <p className="text-[16px] leading-[26px] text-slate-600 mb-8">
              Lumarko Mining Innovations (LMI) is a front-line driven company focused on helping large-scale mining producers achieve higher levels of operational excellence. Our flagship innovation, the TrackTopper System — recognized with the 2024 Mine Safety Technology Award by the Canadian Institute of Mining — improves maintenance safety and efficiency across heavy equipment fleets at mine sites across Canada.
            </p>
            <Link
              to="/about"
              className="text-steel-500 font-semibold text-[15px] hover:text-steel-400 inline-flex items-center gap-2 transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="w-full rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center p-6" style={{ aspectRatio: '4/3' }}>
              <img
                src="/images/Image.jpg"
                alt="Lumarko Mining Innovations"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function TrackTopperShowcase() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="w-full" style={{ aspectRatio: '4/3' }}>
              <img
                src="/images/tracktopper-platform.jpg"
                alt="TrackTopper non-slip platform system deployed on dozer track"
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-heading font-bold text-navy-700 text-[32px] leading-[40px] lg:text-[38px] lg:leading-[46px] mb-5">
              TrackTopper System
            </h2>

            <p className="text-[16px] leading-[26px] text-slate-600 mb-8">
              The TrackTopper System was designed to solve a real problem on mine sites — improving safety and maintenance efficiency for heavy equipment fleets. It&apos;s not a concept or a prototype. It&apos;s field-proven, award-winning, and deployed in partnership with one of Canada&apos;s largest oil sands operators.
            </p>

            <Button to="/tracktopper" variant="outlineDark">
              Explore TrackTopper
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Partnerships() {
  const cards = [
    {
      logo: '/images/Imperial.jpg',
      logoAlt: 'Imperial Oil logo',
      title: 'Strategic Partner — Imperial Oil',
      text: "Through our partnership with Imperial Oil, we\u2019ve collaborated on multiple game-changing initiatives including the award-winning TrackTopper System. This relationship is built on trust and strong connections from the field level upward.",
    },
    {
      logo: '/images/OilSands.jpg',
      logoAlt: 'Oil Sands Expo logo',
      title: 'Advisory Board — Oil Sands Expo',
      text: "Tony serves on the Advisory Board for Canada\u2019s leading oil sands event, leveraging 25+ years of industry experience to help shape the Expo\u2019s direction and advance the future of the oil sands sector.",
    },
  ]

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="PARTNERSHIPS & RECOGNITION"
          heading="Trusted by Industry Leaders"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <Reveal key={i} delay={i * 0.1} className="h-full">
              <Card hover className="h-full">
                <div className="p-7 lg:p-8 flex flex-col h-full">
                  <div className="w-full h-20 bg-slate-50 rounded-lg flex items-center justify-center mb-6 px-4">
                    <img src={card.logo} alt={card.logoAlt} className="max-h-14 w-auto object-contain mx-auto" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-700 text-[20px] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-[25px] text-slate-600 flex-grow">
                    {card.text}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lumarko Mining Innovations</title>
        <meta name="description" content="Lumarko Mining Innovations partners with Canada's leading mining operators to deliver practical, field-driven solutions that enhance safety, reliability, and operational performance." />
      </Helmet>

      <Hero />
      <CredibilityBar />
      <AboutPreview />
      <TrackTopperShowcase />
      <Partnerships />
      <CTABanner />
    </>
  )
}
