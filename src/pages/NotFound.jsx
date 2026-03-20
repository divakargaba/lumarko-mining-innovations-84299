import { Helmet } from 'react-helmet-async'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Lumarko Mining Innovations</title>
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <h1 className="font-heading font-bold text-navy-700 text-[48px] mb-4">404</h1>
          <p className="text-[18px] text-slate-500 mb-8">Page not found.</p>
          <Button to="/" variant="primary">Back to Home</Button>
        </div>
      </div>
    </>
  )
}
