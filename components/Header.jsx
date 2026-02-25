
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full py-4 bg-primary text-white">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-xl flex items-center gap-3">
          <img src="/logo.webp" alt="FJA logo" className="h-8 w-8" />
          <span>FJA Cleaning</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="tel:+13852469206" className="btn-outline">Call Now</Link>
          <Link href="/es" className="underline">ES</Link>
          <span className="opacity-60">|</span>
          <Link href="/en" className="underline">EN</Link>
        </div>
      </div>
    </header>
  )
}
