// import './globals.css'
import { Navigation } from './shared/NavBar'
import './styles/output.css'
import { SocialMedia } from './components/contact/SocialMedia'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
        </main>
        <footer className="flex border-t py-4 border-[#eaeaea] justify-center">
          <SocialMedia />
        </footer>
      </body>
    </html>
  )
}
