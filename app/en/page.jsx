
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import ContactForm from '../../components/ContactForm'

export default function Page() {
  const items = [
    { title: 'Kitchen Hood & Exhaust Cleaning', desc: 'Hoods, ducts, fans, grease traps — NFPA 96 compliant.' },
    { title: 'Pressure Washing & Exterior', desc: 'Roofs, façades, sidewalks, parking lots, floors.' },
    { title: 'Residential & General Cleaning', desc: 'Deep cleaning for homes, offices, and facilities.' }
  ]

  return (
    <main>
      <Hero title="Professional Hood & Pressure Cleaning Across the U.S." subtitle="Reliable, certified, and 24/7 services for restaurants, businesses, and homes." />
      <Services items={items} />
      <ContactForm />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': ['Organization','LocalBusiness','ProfessionalService'],
        name: 'FJA Professional Hood Cleaning & Pressure Washing',
        url: 'https://fjaprofessionalcleaning.com/',
        telephone: '+13852469206',
        areaServed: 'United States',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '878 E 900 S',
          addressLocality: 'Provo',
          addressRegion: 'UT',
          postalCode: '84606',
          addressCountry: 'US'
        },
        serviceOffer: [
          { '@type':'Service', name:'Kitchen Hood & Exhaust Cleaning' },
          { '@type':'Service', name:'Pressure Washing & Exterior Cleaning' },
          { '@type':'Service', name:'Residential & General Cleaning' }
        ]
      })}} />
    </main>
  )
}
