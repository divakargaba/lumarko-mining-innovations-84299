import { Helmet } from 'react-helmet-async'
import { Trophy } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'

import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'

function HeroImage() {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="w-full" style={{ aspectRatio: '16/9' }}>
          <img
            src="/images/tracktopper-dozer.jpg"
            alt="CAT dozer equipped with TrackTopper system in maintenance bay"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
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
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            Heavy Equipment Technicians have long been exposed to preventable safety and ergonomic risks when performing maintenance and repair tasks on equipment tracks. Traditional methods—reliant on planks, flimsy boards, coconut mats (which introduce additional hazards for welders), layered mats, and improvised scaffolding—have proven unstable, inconsistent, and inadequate for safe, efficient work. While the industry has historically accepted these risks as part of the job, the underlying problem was clear: the absence of a purpose-built, adaptable, and reliable work platform capable of addressing seasonal track variations, including elevated ice lugs in winter and direct grouser access in summer.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600">
            This problem has now been addressed through the development of the TrackTopper system—challenging the status quo by delivering a stable, user-friendly, and safety-focused solution that eliminates the need to accept unnecessary risk.
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
          {[
            { src: '/images/tracktopper-detail.jpg', alt: 'TrackTopper rail and clamp mechanism close-up' },
            { src: '/images/tracktopper-platform.jpg', alt: 'TrackTopper non-slip platform on dozer track' },
            { src: '/images/tracktopper-crew.jpg', alt: 'Crew inspecting TrackTopper installation' },
            { src: '/images/tracktopper-dozer.jpg', alt: 'Full dozer with TrackTopper system' },
          ].map((photo, i) => (
            <Reveal key={i} delay={(i + 1) * 0.1}>
              <div className="w-full" style={{ aspectRatio: '4/3' }}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function HumanImpact() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal>
          <h2 className="font-heading font-bold text-navy-700 text-[30px] leading-[38px] mb-6">
            The Human Impact
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            The introduction of the TrackTopper System has fundamentally changed how Heavy Equipment Technicians feel at work — replacing uncertainty with confidence, and risk with trust.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            For the first time in years, technicians can step onto equipment without that underlying tension in the back of their mind. The job feels more controlled, more predictable. There&apos;s a sense of stability — of being supported by the environment around them, not fighting against it.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            That shift creates something powerful: peace of mind.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            Crews go home at the end of the day carrying less stress. Families feel it too — because the work no longer carries the same level of unseen risk. What used to be accepted as &quot;part of the job&quot; is no longer tolerated, and that changes the emotional contract between the workforce and the operation.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            There&apos;s also a renewed sense of professional pride. When technicians are given tools and systems that reflect the importance of their safety, it reinforces that their work matters — that they matter. It elevates the standard of what a modern mine site should feel like.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            At an organizational level, this translates into trust and belief:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[28px] text-slate-600 mb-5">
            <li>Trust that leadership is serious about safety — not in words, but in action</li>
            <li>Belief that meaningful change is possible, and can happen quickly</li>
            <li>Confidence that innovation can genuinely improve daily life on site</li>
          </ul>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            For Lumarko Mining Innovations, this is the real value we create.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600">
            Beyond performance metrics and operational gains, we help build environments where people feel safer, more confident, and more respected in the work they do — every single shift. That&apos;s what operational excellence feels like.
          </p>
        </Reveal>
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
            <div className="w-full rounded-xl bg-slate-900 overflow-hidden flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
              <img
                src="/images/cim-award.jpg"
                alt="CIM Mine Safety Technology Award ceremony"
                className="max-w-full max-h-full object-contain"
              />
            </div>
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
      <HumanImpact />
      <Award />
      <CTABanner
        heading="Want to see how TrackTopper can work on your site?"
        subtitle="Let's talk about what Lumarko Mining Innovations can do for your operation."
      />
    </>
  )
}
