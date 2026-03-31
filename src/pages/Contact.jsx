import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import Button from '../components/ui/Button'
import PlaceholderImage from '../components/ui/PlaceholderImage'
import Reveal from '../components/ui/Reveal'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'
    if (!form.email.trim()) errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Please enter a valid email address.'
    if (!form.message.trim()) errs.message = 'Message is required.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})

    const body = new URLSearchParams({
      'form-name': 'contact',
      ...form,
    })
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading font-semibold text-[18px] text-green-800 mb-2">Message Sent</h3>
        <p className="text-[15px] text-green-700">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
      </div>
    )
  }

  const inputBase = 'w-full px-4 py-3 bg-white border rounded-lg text-[15px] text-slate-800 placeholder-slate-400 focus:border-steel-500 focus:ring-2 focus:ring-steel-500/20 focus:outline-none transition-all duration-200'

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate>
      <input type="hidden" name="form-name" value="contact" />
      <div className="mb-5">
        <label htmlFor="name" className="block text-[14px] font-semibold text-slate-700 mb-2">
          Full Name <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`${inputBase} ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-300'}`}
        />
        {errors.name && <p className="text-[13px] text-red-500 mt-1.5">{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="email" className="block text-[14px] font-semibold text-slate-700 mb-2">
          Email Address <span className="text-red-500 ml-0.5">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className={`${inputBase} ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-300'}`}
        />
        {errors.email && <p className="text-[13px] text-red-500 mt-1.5">{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="company" className="block text-[14px] font-semibold text-slate-700 mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Your company (optional)"
          className={`${inputBase} border-slate-300`}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="phone" className="block text-[14px] font-semibold text-slate-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Your phone number (optional)"
          className={`${inputBase} border-slate-300`}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-[14px] font-semibold text-slate-700 mb-2">
          Message <span className="text-red-500 ml-0.5">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project or inquiry..."
          className={`${inputBase} resize-y ${errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-300'}`}
        />
        {errors.message && <p className="text-[13px] text-red-500 mt-1.5">{errors.message}</p>}
      </div>

      <div className="mt-6">
        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          <Send className="w-4 h-4" />
          Send Message
        </Button>
      </div>
    </form>
  )
}

function ContactInfo() {
  return (
    <div>
      <div className="mb-8">
        <div className="w-10 h-10 rounded-lg bg-steel-100 flex items-center justify-center mb-3">
          <MapPin className="w-5 h-5 text-steel-500" />
        </div>
        <h3 className="font-heading font-semibold text-navy-700 text-[17px] mb-2">Office Location</h3>
        <div className="text-[15px] text-slate-600">
          <p className="font-medium">Lumarko Mining Innovations</p>
          <p>#271, 220 TaigaNova Crescent</p>
          <p>Fort McMurray, Alberta T9K 0N9</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="w-10 h-10 rounded-lg bg-steel-100 flex items-center justify-center mb-3">
          <Mail className="w-5 h-5 text-steel-500" />
        </div>
        <h3 className="font-heading font-semibold text-navy-700 text-[17px] mb-2">Email</h3>
        <a href="mailto:Tony@Lumarko.ca" className="text-[15px] text-steel-500 hover:text-steel-400 transition-colors">
          Tony@Lumarko.ca
        </a>
      </div>

      <div className="mb-8">
        <div className="w-10 h-10 rounded-lg bg-steel-100 flex items-center justify-center mb-3">
          <Phone className="w-5 h-5 text-steel-500" />
        </div>
        <h3 className="font-heading font-semibold text-navy-700 text-[17px] mb-2">Phone</h3>
        <a href="tel:4036804965" className="text-[15px] text-steel-500 hover:text-steel-400 transition-colors">
          403-680-4965
        </a>
      </div>

      <div className="mt-4">
        <PlaceholderImage
          aspectRatio="16/10"
          label="Map Embed"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Lumarko Mining Innovations</title>
        <meta name="description" content="Get in touch with Lumarko Mining Innovations. Fort McMurray, Alberta-based engineering and consulting for mining operations." />
      </Helmet>

      <PageHeader
        heading="Contact Us"
        subtitle="We'd like to hear from you."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20">
            <Reveal>
              <h2 className="font-heading font-bold text-navy-700 text-[24px] mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.15}>
              <ContactInfo />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
