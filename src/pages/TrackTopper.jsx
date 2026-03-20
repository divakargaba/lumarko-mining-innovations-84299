import { Helmet } from 'react-helmet-async'
import { Trophy } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'

function HeroImage() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <PlaceholderImage
          aspectRatio="16/9"
          label="TrackTopper Hero Image — Coming Soon"
          className="w-full rounded-xl"
        />
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal>
          <h2 className="font-heading font-bold text-navy-700 text-[30px] leading-[38px] mb-6">
            The Problem
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600">
            Maintaining and servicing heavy mining equipment — particularly undercarriage components on large tracked machines — has always presented significant safety risks. Technicians work in confined, high-risk environments where the potential for injury is constant. Traditional maintenance approaches accept this risk as part of the job. We didn&apos;t.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Solution() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="font-heading font-bold text-navy-700 text-[30px] leading-[38px] mb-6">
            The TrackTopper Solution
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600 max-w-3xl mb-12">
            The TrackTopper System was engineered from the ground up to improve the safety and efficiency of heavy equipment maintenance. Designed in collaboration with mine site operators and maintenance teams, it addresses real-world challenges that existing solutions either ignored or failed to solve.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <Reveal key={n} delay={n * 0.1}>
              <PlaceholderImage
                aspectRatio="4/3"
                label={`TrackTopper Detail Photo ${n}`}
                className="w-full rounded-lg"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Award() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="border-l-4 border-gold-500 pl-8">
              <h2 className="font-heading font-bold text-navy-700 text-[30px] leading-[38px] mb-6">
                Recognized for Innovation
              </h2>
              <p className="text-[16px] leading-[28px] text-slate-600">
                In 2024, the TrackTopper System was awarded the Canadian Institute of Mining (CIM) Safety Technology of the Year. This recognition reflects the real-world impact the system has had on mine sites — reducing risk, improving maintenance workflows, and setting a new standard for how the industry approaches heavy equipment safety.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <PlaceholderImage
              aspectRatio="4/3"
              label="Award Photo / CIM Logo — Coming Soon"
              className="w-full rounded-xl"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default function TrackTopper() {
  return (
    <>
      <Helmet>
        <title>TrackTopper System | Lumarko Mining Innovations</title>
        <meta name="description" content="The TrackTopper System — 2024 CIM Safety Technology of the Year. Award-winning safety and maintenance innovation for heavy equipment fleets." />
      </Helmet>

      <PageHeader
        heading="TrackTopper System"
        subtitle="Award-winning safety and maintenance innovation for heavy equipment fleets."
      >
        <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-500 px-5 py-2 rounded-full text-[13px] font-bold tracking-wider uppercase mt-6">
          <Trophy className="w-4 h-4" />
          2024 CIM Safety Technology of the Year
        </div>
      </PageHeader>
      <HeroImage />
      <Problem />
      <Solution />
      <Award />
      <CTABanner
        heading="Want to see how TrackTopper can work on your site?"
        subtitle="Let's talk about what Lumarko Mining Innovations can do for your operation."
      />
    </>
  )
}
