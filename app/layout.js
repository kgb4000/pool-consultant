import './globals.scss'
import StyledComponentsRegistry from '/registry'
import Script from 'next/script'
import GA4 from './components/GA4'
import * as gtag from 'lib/gtag'

export const metadata = {
  title: 'Pool Builder SEO Consultant | I Help Pool Builders Get Leads',
  description: `I help pool builders and pool contractors boost website traffic, leads, and sales with search engine optimization. Book your SEO consultation today!`,
  alternates: {
    canonical: 'https://poolbuilderseoconsultant.com',
  },
}

export default function RootLayout({ children }) {
  ;<GA4 />
  return (
    <html lang="en">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
