
export const metadata = {
  title: 'FJA Professional Hood & Pressure Cleaning',
  description: 'Hood cleaning & pressure washing services across the United States. 24/7 free estimates.',
  metadataBase: new URL('https://fjaprofessionalcleaning.com')
}

import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
