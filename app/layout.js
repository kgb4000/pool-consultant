import './globals.scss'
import Head from 'next/head'
import StyledComponentsRegistry from '/registry'
import { Inter } from 'next/font/google'
import GoogleAnalytics from './components/googleAnalytics/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pool Builder SEO Consultant | I Help Pool Builders Get More Leads',
  description: `I help pool builders and pool contractors boost website traffic, leads, and sales with search engine optimization. Book your SEO consultation today!`,
  alternates: {
    canonical: 'https://poolbuilderseoconsultant.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
