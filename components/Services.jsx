
export default function Services({ heading='Our Services', items }) {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">{heading}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <article key={i} className="card">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm mt-2">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
