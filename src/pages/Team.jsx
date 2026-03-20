import { Helmet } from 'react-helmet-async'
import { Linkedin } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import Reveal from '../components/ui/Reveal'

const team = [
  {
    name: 'Tony Bessey',
    title: 'President & CEO',
    bio: 'Tony is a seasoned executive and strategic leader with more than 20 years of experience across the oil, gas, and mining sectors. He is recognized for building and scaling innovative solutions that address complex operational challenges while delivering measurable, long-term value, underpinned by a strong commitment to continuous improvement and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/tonybessey-bb356b29/',
  },
  {
    name: 'Caitlin Hartigan',
    title: 'Senior Commercial Advisor',
    bio: "Caitlin Hartigan is an accomplished post-secondary and business development leader with extensive experience supporting the skilled trades, heavy industry, and the oil and gas sector across Western Canada. Her background includes leading strategic program delivery, advancing industry partnerships, and driving client success across a diverse portfolio of training pathways aligned with energy, construction, and industrial workforce needs.",
    linkedin: '#',
  },
  {
    name: 'Shawn Carnes',
    title: 'VP of Operational Excellence',
    bio: 'Bio and photo coming soon.',
    linkedin: null,
  },
]

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Team | Lumarko Mining Innovations</title>
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
              <Reveal key={member.name} delay={i * 0.1}>
                <Card>
                  <div className="p-7 lg:p-8 text-center">
                    <div className="w-40 h-40 mx-auto mb-6">
                      <PlaceholderImage
                        aspectRatio="1/1"
                        label={`Team Photo — ${member.name}`}
                        className="w-40 h-40 rounded-full"
                      />
                    </div>
                    <h3 className="font-heading font-bold text-navy-700 text-[20px] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-steel-500 font-semibold text-[15px] mb-4">
                      {member.title}
                    </p>
                    <p className="text-[15px] leading-[24px] text-slate-600">
                      {member.bio}
                    </p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="mt-4 inline-flex items-center gap-2 text-steel-500 hover:text-steel-400 text-[14px] font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
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
