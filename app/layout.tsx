// import './globals.css'
import { Navigation } from './lib/shared/NavBar'
import './styles/output.css'
import { SocialMedia } from './lib/shared/components/about/SocialMedia'
import { AnalyticsWrapper } from './lib/shared/components/analytics/Analytics'
import { dsDigital, lora, raleway, vcrOsdMono, vt323 } from './styles/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const parent = document.getElementById('root')
  return (
    <html
      lang="en"
      className={`${vcrOsdMono.variable} ${dsDigital.variable} ${vt323.variable} ${lora.style} ${raleway.variable}`}
    >
      <head>
        <script
          src="https://kit.fontawesome.com/1e9272c1ba.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Navigation />
        <main
          className={'tracking-wider min-h-screen justify-center items-center'}
        >
          {children}
          <AnalyticsWrapper />
        </main>
        <footer className="flex border-t py-4 border-[#eaeaea] justify-center">
          <SocialMedia />
        </footer>
      </body>
    </html>
  )
}
