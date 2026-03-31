import { Helmet } from 'react-helmet-async'
import { Linkedin } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'

import Reveal from '../components/ui/Reveal'

const team = [
  {
    name: 'Tony Bessey',
    title: 'President & CEO',
    photo: '/images/Tony.jpg',
    bio: 'Tony is a seasoned executive and strategic leader with more than 20 years of experience across the oil, gas, and mining sectors. He is recognized for building and scaling innovative solutions that address complex operational challenges while delivering measurable, long-term value, underpinned by a strong commitment to continuous improvement and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/tony-bessey-bb356b29/',
  },
  {
    name: 'Caitlin Hartigan',
    title: 'Senior Commercial Advisor',
    photo: '/images/Caitlin.jpg',
    bio: "Caitlin Hartigan is an accomplished post-secondary and business development leader with extensive experience supporting the skilled trades, heavy industry, and the oil and gas sector across Western Canada. Her background includes leading strategic program delivery, advancing industry partnerships, and driving client success across a diverse portfolio of training pathways aligned with energy, construction, and industrial workforce needs.",
    linkedin: '#',
  },
  {
    name: 'Shawn Carnes',
    title: 'VP of Operational Excellence',
    photo: '/images/Shawn.jpg',
    bio: 'A former Skeleton athlete who competed at the highest North American level, Shawn brings a performance mindset built on precision, resilience, and execution under pressure.\n\nWith 15+ years of leadership across maintenance, planning, process optimization, and continuous improvement, Shawn progressed from frontline technical roles into senior operational strategy positions.\n\nShawn has partnered with cross-functional teams to deliver major operational excellence and transformation initiatives at CNRL and Suncor, strengthening reliability, execution systems, and continuous improvement at scale.\n\nAt Lumarko, Shawn drives execution governance, capital discipline, and value realization across the innovation portfolio.\n\nHis focus is aligning strategy with execution to deliver predictable, high-impact outcomes in complex operational environments.',
    linkedin: 'https://www.linkedin.com/in/shawn-carnes-5a22428a/',
  },
]

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Meet the Team | Lumarko Mining Innovations</title>
        <meta name="description" content="Meet the Lumarko Mining Innovations team — experienced operators, engineers, and leaders with 25+ years in Canada's oil sands." />
      </Helmet>

      <PageHeader
        heading="Meet the Team"
        subtitle="Experienced operators, engineers, and leaders."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1} className="h-full">
                <Card hover className="h-full">
                  <div className="p-7 lg:p-8 flex flex-col h-full">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-heading font-bold text-navy-700 text-[20px] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-steel-500 font-semibold text-[15px] mb-4">
                        {member.title}
                      </p>
                    </div>
                    <div className="text-[15px] leading-[24px] text-slate-600 text-left flex-grow space-y-3">
                      {member.bio.split('\n\n').map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>
                    {member.linkedin && (
                      <div className="text-center mt-4">
                        <a
                          href={member.linkedin}
                          className="inline-flex items-center gap-2 text-steel-500 hover:text-steel-400 text-[14px] font-medium transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
