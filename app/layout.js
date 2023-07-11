import './globals.scss'
import StyledComponentsRegistry from '/registry'
import Script from 'next/script'

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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YRDW6P3R0K
      "
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YRDW6P3R0K');
        `}
      </Script>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
