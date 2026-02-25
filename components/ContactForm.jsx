
export default function ContactForm({ heading='Get a Free Appointment' }) {
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">{heading}</h2>
        https://formspree.io/f/YOUR_FORM_ID
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Name / Nombre" className="border p-3 rounded" required />
            <input name="phone" placeholder="Phone / Teléfono" className="border p-3 rounded" required />
            <select name="service" className="border p-3 rounded md:col-span-2" required>
              <option value="">Select service / Seleccionar servicio</option>
              <option>Kitchen Hood & Exhaust Cleaning</option>
              <option>Pressure Washing & Exterior</option>
              <option>Residential & General Cleaning</option>
            </select>
            <textarea name="message" placeholder="Message / Mensaje" rows={4} className="border p-3 rounded md:col-span-2"></textarea>
            <button type="submit" className="btn-primary md:col-span-2">Send Request / Enviar Solicitud</button>
          </div>
        </form>
        <p className="mt-4 text-sm">Or call us at <a className="underline" href="tel:+13852469206">(385) 246-9206</a></p>
      </div>
    </section>
  )
}
