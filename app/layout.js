import './globals.scss'
import StyledComponentsRegistry from '/registry'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:
    'Pool Builder SEO Consultant Ready To Get You More Traffic, Leads, and Sales',
  description: `Want to work with the best Pool Builder SEO consultant? You're in luck! I'm taking a small number of new clients. Click here to learn more.`,
  alternates: {
    canonical: 'https://poolbuilderseoconsultant.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
