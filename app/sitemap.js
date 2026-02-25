
export default function sitemap() {
  const base = 'https://fjaprofessionalcleaning.com'
  return [
    { url: `${base}/en`, lastModified: new Date() },
    { url: `${base}/es`, lastModified: new Date() }
  ]
}
