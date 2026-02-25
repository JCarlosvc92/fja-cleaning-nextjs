
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-16">
      <div className="container py-10">
        <p className="font-semibold">FJA Professional Cleaning</p>
        <p>878 E. 900 S. Provo, UT 84606 • (385) 246-9206 • Service Area: United States</p>
        <p className="text-xs mt-3 opacity-70">© {new Date().getFullYear()} FJA Professional Cleaning. All rights reserved.</p>
      </div>
    </footer>
  )
}
