
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import ContactForm from '../../components/ContactForm'
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/es"); // Cambiar a /en si querés inglés
}

export default function Page() {
  const items = [
    { title: 'Limpieza de campanas y extracción', desc: 'Campanas, ductos, ventiladores, trampas de grasa — cumplimiento NFPA 96.' },
    { title: 'Lavado a presión y exteriores', desc: 'Techos, fachadas, aceras, estacionamientos, pisos.' },
    { title: 'Limpieza residencial y general', desc: 'Limpieza profunda para hogares, oficinas y locales.' }
  ]

  return (
    <main>
      <Hero title="Limpieza profesional de campanas y lavado a presión en todo EE. UU." subtitle="Servicio confiable, certificado y 24/7 para restaurantes, negocios y hogares." />
      <Services heading="Nuestros servicios" items={items} />
      <ContactForm heading="Agenda una cita gratis" />
    </main>
  )
}
