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
            Lumarko Mining Innovations (LMI) is a technology-driven company focused on helping large-scale mining operations achieve higher levels of operational excellence.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            Our flagship innovation, the TrackTopper System — recognized with the 2024 Mine Safety Technology Award by the Canadian Institute of Mining — improves maintenance safety and efficiency across heavy equipment fleets at mine sites across Canada. By combining engineering expertise, real-world field experience, and in-house manufacturing, we deliver practical, results-oriented solutions that enhance safety, productivity, equipment reliability, and cost performance.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600">
            Powered by our proprietary 100-Day Value Cycle, we enable rapid execution and measurable impact. LMI is currently scaling its team and expanding operations to support mining operators nationwide.
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
    <section className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="h-full">
              <Card hover className="h-full">
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
