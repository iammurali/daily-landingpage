import './globals.css'
import { Montserrat_Alternates } from 'next/font/google'

const montserrat_alternates = Montserrat_Alternates({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], })

export const metadata = {
  title: 'Daily',
  description: 'Daily is creating a world-leading crypto payment and data network and to help you make payments, cut costs and onboard more customers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat_alternates.className}>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
