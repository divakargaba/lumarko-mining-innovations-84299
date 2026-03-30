import { Helmet } from 'react-helmet-async'
import { CheckCircle, TrendingUp, Shield, Clock, BarChart3, Users } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import Reveal from '../components/ui/Reveal'
import CTABanner from '../components/sections/CTABanner'

const whyItMatters = [
  { icon: Clock, text: 'Eliminates pilot stagnation through defined timelines and decision gates' },
  { icon: Shield, text: 'Protects capital with staged investment and progressive risk reduction' },
  { icon: BarChart3, text: 'Ensures cost certainty through structured execution and clear milestones' },
  { icon: Users, text: 'Aligns stakeholders around measurable value—not assumptions' },
  { icon: TrendingUp, text: 'Strengthens executive governance with transparency and accountability' },
]

const commitments = [
  'To move decisively',
  'To invest responsibly',
  'To deliver real, measurable value',
]

function Intro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Reveal>
          <h2 className="font-heading font-bold text-navy-900 text-[28px] lg:text-[32px] mb-6">
            Accelerating Innovation. Delivering Measurable Value.
          </h2>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            At Lumarko Mining Innovations, our competitive advantage isn&apos;t just what we build—it&apos;s how we bring ideas to life.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600 mb-5">
            We operate through a proven, disciplined commercial framework: <strong className="text-navy-900">The 100-Day Value Cycle</strong>.
          </p>
          <p className="text-[16px] leading-[28px] text-slate-600">
            A milestone-based approach that moves innovation from concept to realized value with speed, clarity, and accountability. Every initiative progresses with purpose—protecting capital, reducing risk, and delivering measurable outcomes at every stage.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function WhyItMatters() {
  return (
    <section className="bg-[#F3F4F6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading font-bold text-navy-900 text-[28px] lg:text-[32px] mb-4">
              Why It Matters
            </h2>
            <p className="text-[16px] leading-[28px] text-slate-600">
              Innovation in mining too often stalls in endless pilots, uncertain outcomes, and unclear returns. The 100-Day Value Cycle changes that.
            </p>
          </div>
        </Reveal>
        <div className="flex flex-col gap-4">
          {whyItMatters.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Card className="flex items-start gap-5 p-6 lg:p-7">
                <item.icon className="w-6 h-6 text-steel-500 flex-shrink-0 mt-0.5" />
                <p className="text-[16px] leading-[26px] text-slate-700">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <p className="mt-10 text-[15px] font-semibold text-navy-900 italic">
            This is innovation—executed commercially and responsibly.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Pipeline() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl mb-10">
            <h2 className="font-heading font-bold text-navy-900 text-[28px] lg:text-[32px] mb-4">
              From Ideas to Impact
            </h2>
            <p className="text-[16px] leading-[28px] text-slate-600">
              Lumarko is advancing a strong pipeline of initiatives across Phases 1–4 of the Value Cycle, including:
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <Card hover className="h-full">
              <div className="p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-steel-500" />
                  <span className="text-[12px] font-semibold tracking-[0.1em] text-steel-500 uppercase">
                    Initiative 1
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-[20px] mb-3">
                  Heat Reduction Strategies
                </h3>
                <p className="text-[15px] leading-[25px] text-slate-600">
                  Heat reduction strategies for mining equipment—improving reliability, safety, and operating efficiency.
                </p>
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.2}>
            <Card hover className="h-full">
              <div className="p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-steel-500" />
                  <span className="text-[12px] font-semibold tracking-[0.1em] text-steel-500 uppercase">
                    Initiative 2
                  </span>
                </div>
                <h3 className="font-heading font-bold text-navy-900 text-[20px] mb-3">
                  Next-Generation Ground Engaging Tools
                </h3>
                <p className="text-[15px] leading-[25px] text-slate-600">
                  Next-generation Ground Engaging Tools (GET)—redefining wear management, maintenance practices, and cost performance.
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
        <Reveal delay={0.3}>
          <p className="mt-10 text-[16px] leading-[28px] text-slate-600 max-w-3xl">
            Each initiative is grounded in continuous improvement methodologies—ensuring innovation is not a one-time event, but a repeatable, scalable capability.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function BuiltForResults() {
  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-white text-[28px] lg:text-[36px] mb-6">
              Built for Results
            </h2>
            <p className="text-[16px] leading-[28px] text-slate-300 mb-10">
              The 100-Day Value Cycle is more than a process—it&apos;s a commitment:
            </p>
            <div className="flex flex-col gap-4">
              {commitments.map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-5 h-5 text-steel-400 flex-shrink-0" />
                    <p className="text-[17px] font-semibold text-white">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function ValueCycle() {
  return (
    <>
      <Helmet>
        <title>100-Day Value Cycle | Lumarko Mining Innovations</title>
        <meta name="description" content="Lumarko's 100-Day Value Cycle is a milestone-based commercial framework that moves innovation from concept to realized value with speed, clarity, and accountability." />
      </Helmet>

      <PageHeader
        heading="The 100-Day Value Cycle"
        subtitle="A proven framework for moving innovation from concept to measurable value."
      />
      <Intro />
      <WhyItMatters />
      <Pipeline />
      <BuiltForResults />
      <CTABanner />
    </>
  )
}
