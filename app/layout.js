import './globals.scss'
import StyledComponentsRegistry from '/registry'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const metadata = {
  title: 'Pool Builder SEO Consultant | I Help Pool Builders Get Leads',
  description: `I help pool builders and pool contractors boost website traffic, leads, and sales with search engine optimization. Book your SEO consultation today!`,
  alternates: {
    canonical: 'https://poolbuilderseoconsultant.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  )
}
