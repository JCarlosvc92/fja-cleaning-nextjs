
import Link from 'next/link'

export default function Hero({ title, subtitle }) {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container">
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-accent">{subtitle}</p>
        <div className="mt-8 flex gap-4">
          <Link href="#contact" className="btn-primary">Get Free Appointment</Link>
          <Link href="tel:+13852469206" className="btn-outline">Call (385) 246-9206</Link>
        </div>
      </div>
    </section>
  )
}
