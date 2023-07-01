//GoogleAnalytics.tsx

'use client'
import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YRDW6P3R0K" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YRDW6P3R0K');
        `}
      </Script>
    </div>
  )
}
