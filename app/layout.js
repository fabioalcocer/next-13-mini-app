import '../styles/globals.css'
import Navigation from './index/components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My First Next.js App</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
