import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/ui/PageHeader'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Accordion from '../components/ui/Accordion'
import Reveal from '../components/ui/Reveal'

function Intro() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <Reveal>
          <p className="text-[17px] leading-[28px] text-slate-600">
            Lumarko Mining Innovations is growing. We&apos;re building a team of people who know mining, care about safety, and want to be part of something that&apos;s making a real difference across Canada&apos;s mine sites. If that sounds like you, take a look at what&apos;s open.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function JobDescription() {
  return (
    <div>
      <h4 className="font-heading font-bold text-navy-700 text-[18px] mb-4">About Lumarko</h4>
      <p className="text-[15px] leading-[24px] text-slate-600 mb-4">
        Lumarko Mining Innovations is a rapidly growing Canadian company focused on enabling large-scale mining operations to achieve higher levels of operational excellence. We work directly with mine operators to improve safety, productivity, reliability, and cost performance through practical, field-driven solutions.
      </p>
      <p className="text-[15px] leading-[24px] text-slate-600 mb-4">
        Our innovative product portfolio includes the nationally award-winning TrackTopper System, designed to improve safety and maintenance efficiency for heavy equipment fleets. Lumarko combines engineering expertise, operational experience, and manufacturing capability to deliver solutions that make a measurable difference on mine sites across Canada.
      </p>
      <p className="text-[15px] leading-[24px] text-slate-600 mb-4">
        As we continue to grow, we are seeking a highly organized and proactive Business Operations Manager to help strengthen the internal systems and processes that support our expanding operations.
      </p>

      <h4 className="font-heading font-bold text-navy-700 text-[18px] mt-8 mb-4">Position Overview</h4>
      <p className="text-[15px] leading-[24px] text-slate-600 mb-4">
        The Business Operations Manager plays a critical role in ensuring the smooth, professional, and efficient operation of Lumarko&apos;s business functions. This position supports financial administration, reporting, HR coordination, internal project management, and office systems while enabling leadership to focus on strategy, client relationships, and operational delivery.
      </p>
      <p className="text-[15px] leading-[24px] text-slate-600 mb-4">
        This role reports directly to the President of Lumarko Mining Innovations and provides operational and administrative support to senior leadership, including the VP of Operational Excellence and Senior Commercial Manager.
      </p>
      <p className="text-[15px] leading-[24px] text-slate-600 mb-4">
        The role will also require periodic engagement with key operational representatives at oil sands mining operations to support coordination of projects, reporting, and operational initiatives.
      </p>

      <h4 className="font-heading font-bold text-navy-700 text-[18px] mt-8 mb-4">Key Responsibilities</h4>

      <h5 className="font-semibold text-navy-700 text-[16px] mt-6 mb-3">Financial &amp; Business Management</h5>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Manage invoicing, accounts receivable/payable (AR/AP), and bank reconciliations</li>
        <li>Support budgeting, cash flow management, and monthly financial reporting</li>
        <li>Maintain client and vendor contracts and documentation</li>
        <li>Coordinate with external accounting partners for year-end reporting and compliance</li>
      </ul>

      <h5 className="font-semibold text-navy-700 text-[16px] mt-6 mb-3">Operations &amp; Office Leadership</h5>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Oversee day-to-day office operations, ensuring efficiency and professionalism</li>
        <li>Develop and maintain SOPs, workflows, and compliance processes</li>
        <li>Manage procurement, travel coordination, and operational supplies</li>
        <li>Maintain organized document management and data systems</li>
      </ul>

      <h5 className="font-semibold text-navy-700 text-[16px] mt-6 mb-3">Project &amp; Initiative Support</h5>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Plan, track, and support internal projects and strategic initiatives</li>
        <li>Coordinate cross-functional teams and manage milestones and deliverables</li>
        <li>Support continuous improvement efforts across the organization</li>
        <li>Prepare reports, dashboards, and status updates for leadership</li>
      </ul>

      <h5 className="font-semibold text-navy-700 text-[16px] mt-6 mb-3">HR &amp; Team Coordination</h5>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Support recruitment logistics and onboarding processes</li>
        <li>Coordinate payroll, benefits administration, and leave tracking</li>
        <li>Assist with performance management cycles and HR documentation</li>
      </ul>

      <h5 className="font-semibold text-navy-700 text-[16px] mt-6 mb-3">External &amp; Leadership Support</h5>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Liaise with customers, vendors, and mining operator stakeholders</li>
        <li>Support leadership with meeting preparation, reporting, and follow-ups</li>
        <li>Assist in executing operational and strategic initiatives</li>
      </ul>

      <h4 className="font-heading font-bold text-navy-700 text-[18px] mt-8 mb-4">Who You Are</h4>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Experienced in business operations, financial administration, or office management, ideally within industrial, mining, or project-based environments</li>
        <li>Highly organized, detail-oriented, and proactive with strong execution capability</li>
        <li>Comfortable managing multiple priorities in a fast-paced, growing organization</li>
        <li>Strong communicator with the ability to collaborate across operational and technical teams</li>
        <li>A self-starter who takes ownership and drives results with minimal supervision</li>
      </ul>

      <h4 className="font-heading font-bold text-navy-700 text-[18px] mt-8 mb-4">Knowledge, Skills &amp; Abilities</h4>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li><strong>Technical Systems Proficiency:</strong> Strong working knowledge of tools such as MS Excel (advanced), accounting/ERP systems (e.g., SAP), maintenance systems (e.g., Maximo), and project management platforms</li>
        <li><strong>Organization &amp; Execution:</strong> Exceptional organizational skills with the ability to manage multiple priorities, deadlines, and stakeholders simultaneously</li>
        <li><strong>Problem-Solving &amp; Collaboration:</strong> Strong analytical thinking and practical problem-solving skills with a collaborative, team-first mindset</li>
        <li><strong>Financial Acumen:</strong> Solid understanding of financial processes including budgeting, reporting, AR/AP, and cash flow management</li>
        <li><strong>Communication Skills:</strong> Clear and professional written and verbal communication skills, with the ability to interface across all levels of the organization and external partners</li>
        <li><strong>Discretion &amp; Integrity:</strong> High ethical standards with the ability to handle sensitive information and protect confidential and proprietary data</li>
        <li><strong>Continuous Improvement Mindset:</strong> Familiarity with Lean, continuous improvement, or operational excellence principles (Lean Six Sigma considered an asset)</li>
        <li><strong>Adaptability:</strong> Ability to operate effectively in a dynamic, growth-oriented environment with evolving priorities</li>
      </ul>

      <h4 className="font-heading font-bold text-navy-700 text-[18px] mt-8 mb-4">Education &amp; Certifications (Preferred)</h4>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600 mb-4">
        <li>Degree or diploma in Business Administration, Finance, Operations Management, or a related field</li>
        <li>MBA or equivalent advanced education considered an asset</li>
        <li>Certifications considered an asset: Lean Six Sigma (LSS), PROSCI Change Management, Project Management Professional (PMP), Agile Certification, Data Analytics or Business Intelligence certification</li>
      </ul>

      <h4 className="font-heading font-bold text-navy-700 text-[18px] mt-8 mb-4">Why Lumarko</h4>
      <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[24px] text-slate-600">
        <li>Play a key role in scaling operations at a nationally recognized, award-winning company</li>
        <li>Collaborate with experienced operational and engineering leaders</li>
        <li>Competitive compensation with strong growth potential as the company expands</li>
      </ul>
    </div>
  )
}

function JobListings() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <Reveal>
          <h2 className="font-heading font-bold text-navy-700 text-[28px] mb-8">
            Open Positions
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <div className="p-8">
              <h3 className="font-heading font-bold text-navy-700 text-[22px] mb-3">
                Business Operations Manager
              </h3>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-[13px] font-medium rounded-full">
                  Fort McMurray, Alberta
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-[13px] font-medium rounded-full">
                  Full-Time
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-[13px] font-medium rounded-full">
                  In-Office
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-steel-100 text-steel-500 text-[13px] font-medium rounded-full">
                  Reports to: President, Lumarko Mining Innovations
                </span>
              </div>

              <p className="text-[15px] leading-[25px] text-slate-600 mb-6">
                We&apos;re looking for a highly organized and proactive Business Operations Manager to help strengthen the internal systems and processes that support our expanding operations. This role supports financial administration, reporting, HR coordination, internal project management, and office systems.
              </p>

              <div className="mb-6">
                <Accordion title="View Full Job Description">
                  <JobDescription />
                </Accordion>
              </div>

              <Button
                href="mailto:Tony@Lumarko.ca?subject=Application%3A%20Business%20Operations%20Manager"
                variant="primary"
              >
                Apply Now
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}

export default function Careers() {
  return (
    <>
      <Helmet>
        <title>Careers | Lumarko Mining Innovations</title>
        <meta name="description" content="Join Lumarko Mining Innovations — we're building a team that's changing how mining operations work across Canada." />
      </Helmet>

      <PageHeader
        heading="Careers at Lumarko"
        subtitle="Join a team that's changing how mining operations work."
      />
      <Intro />
      <JobListings />
    </>
  )
}
