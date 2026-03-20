import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Trophy, Handshake, ChevronDown, ArrowRight } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'

function Hero() {
  return (
    <section className="bg-navy-900 relative overflow-hidden min-h-[90vh] flex items-center py-24 lg:py-32">
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
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-steel-500" />
              <span className="text-[13px] font-semibold tracking-[0.1em] text-steel-400">
                ENGINEERING EXCELLENCE FOR MINING
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-white text-[40px] leading-[48px] sm:text-[48px] sm:leading-[56px] lg:text-[56px] lg:leading-[64px] mb-6">
              Operational Excellence for Mining. Built from the Field Up.
            </h1>

            <p className="text-[17px] lg:text-[18px] leading-[28px] text-slate-300 max-w-xl mb-10">
              Lumarko Mining Innovations partners with Canada&apos;s leading mining operators to deliver practical, field-driven solutions that enhance safety, reliability, and operational performance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="primary" className="py-3.5">
                Get in Touch
              </Button>
              <Button to="/tracktopper" variant="outline" className="py-3.5">
                Learn About TrackTopper
              </Button>
            </div>
          </div>

          {/* Right */}
          <div>
            <PlaceholderImage
              aspectRatio="4/3"
              label="Hero Image — Coming Soon"
              className="w-full max-w-lg lg:max-w-none"
            />
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
    { icon: Shield, text: '25+ Years in Oil Sands' },
    { icon: Trophy, text: 'CIM Safety Technology of the Year' },
    { icon: Handshake, text: 'Strategic Partner — Imperial Oil' },
  ]

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-slate-300">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 py-2">
              <item.icon className="w-5 h-5 text-steel-500" />
              <span className="text-[15px] font-semibold text-navy-700">{item.text}</span>
            </div>
          ))}
        </div>
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
              25 Years of Field Experience. One Mission.
            </h2>
            <p className="text-[16px] leading-[26px] text-slate-600 mb-4">
              Lumarko Mining Innovations was founded on a simple belief: the best solutions come from people who&apos;ve worked the field, not just studied it. With over 25 years of hands-on experience in Canada&apos;s oil sands, we partner directly with mine operators to improve safety, productivity, reliability, and cost performance.
            </p>
            <p className="text-[16px] leading-[26px] text-slate-600 mb-8">
              Our 100-Day Value Cycle is how we operate — rapid validation, disciplined execution, and measurable results. Every initiative we take on is designed to deliver real impact, fast. No bloated timelines, no shelved reports.
            </p>
            <Link
              to="/about"
              className="text-steel-500 font-semibold text-[15px] hover:text-steel-400 inline-flex items-center gap-2 transition-colors"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <PlaceholderImage
              aspectRatio="4/3"
              label="About Photo — Coming Soon"
              className="w-full rounded-xl"
            />
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
            <PlaceholderImage
              aspectRatio="4/3"
              label="TrackTopper Photo — Coming Soon"
              className="w-full rounded-xl"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 px-4 py-1.5 rounded-full text-[12px] font-bold tracking-wider uppercase mb-5">
              <Trophy className="w-3.5 h-3.5" />
              CIM SAFETY TECHNOLOGY OF THE YEAR — 2024
            </div>

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
      logo: 'Imperial Oil Logo',
      title: 'Strategic Partner — Imperial Oil',
      text: "Through our partnership with Imperial Oil, we\u2019ve collaborated on multiple game-changing initiatives including the award-winning TrackTopper System. This relationship is built on trust and strong connections from the field level upward.",
    },
    {
      logo: 'Oil Sands Expo Logo',
      title: 'Advisory Board — Oil Sands Expo',
      text: "Tony Bessey serves on the Advisory Board for Canada\u2019s leading oil sands event, leveraging 25+ years of industry experience to help shape the Expo\u2019s direction and advance the future of the oil sands sector.",
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
            <Reveal key={i} delay={i * 0.1}>
              <Card>
                <div className="p-7 lg:p-8">
                  <div className="w-full h-14 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-[13px] font-medium mb-6">
                    [{card.logo}]
                  </div>
                  <h3 className="font-heading font-bold text-navy-700 text-[20px] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[15px] leading-[25px] text-slate-600">
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
        <title>Lumarko Mining Innovations | Operational Excellence for Mining</title>
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
