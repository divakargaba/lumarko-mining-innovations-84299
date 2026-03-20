import { Helmet } from 'react-helmet-async'
import { Shield, Wrench, BarChart3 } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import Reveal from '../components/ui/Reveal'

function CompanyStory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            Lumarko Mining Innovations is a Fort McMurray-based company that helps mining operations run safer, more reliably, and at a higher level. We&apos;ve been in the oil sands for over 25 years and we work directly with mine operators to fix real problems on site — not from a boardroom, but from the field.
          </p>

          <h2 className="font-heading font-bold text-navy-700 text-[24px] leading-[32px] mt-14 mb-5">
            What We Do
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            We combine engineering expertise, operational experience, and manufacturing capability to deliver solutions that make a measurable difference on mine sites across Canada. Our work spans safety systems, operational excellence consulting, and purpose-built products for heavy mining equipment.
          </p>

          <h2 className="font-heading font-bold text-navy-700 text-[24px] leading-[32px] mt-14 mb-5">
            How We Work — The 100-Day Value Cycle
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            At the core of everything we do is our 100-Day Value Cycle. It&apos;s our fit-for-purpose model designed to deliver rapid validation, disciplined execution, and measurable results. We built it because we&apos;ve seen too many good initiatives die slow deaths in committees and approval chains. Our approach is simple: prove it works fast, execute with discipline, and measure what matters. No fluff, no failed rollouts.
          </p>

          <h2 className="font-heading font-bold text-navy-700 text-[24px] leading-[32px] mt-14 mb-5">
            Our Partnerships
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600">
            We&apos;re proud to be a strategic partner with Imperial Oil. Through this relationship, we&apos;ve collaborated on multiple game-changing initiatives, including the award-winning TrackTopper System. This partnership is built on trust and strong connections from the field level upward, enabling us to co-create practical, operations-driven solutions.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Values() {
  const pillars = [
    {
      icon: Shield,
      title: 'Safety First',
      text: 'Every solution we build starts with one question: does it make people safer? Our TrackTopper System exists because we saw a safety gap and built something to close it.',
    },
    {
      icon: Wrench,
      title: 'Field-Driven',
      text: "We don\u2019t deliver PowerPoint solutions. Our team has worked the field, managed the operations, and knows what actually works when rubber meets road on a mine site.",
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      text: "Our 100-Day Value Cycle exists because we believe in accountability. If we can\u2019t measure the impact, we haven\u2019t done our job.",
    },
  ]

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <Card>
                <div className="p-7 lg:p-8">
                  <pillar.icon className="w-10 h-10 text-steel-500 mb-5" />
                  <h3 className="font-heading font-bold text-navy-700 text-[20px] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] leading-[25px] text-slate-600">
                    {pillar.text}
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

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Lumarko Mining Innovations</title>
        <meta name="description" content="Lumarko Mining Innovations is a Fort McMurray-based company with 25+ years of oil sands experience, delivering field-driven solutions for mining operations across Canada." />
      </Helmet>

      <PageHeader
        heading="About Lumarko Mining Innovations"
        subtitle="Built from the field. Driven by results."
      />
      <CompanyStory />
      <Values />
    </>
  )
}
