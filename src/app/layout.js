import { Barlow, Mulish } from 'next/font/google'
import './globals.css'
import { TogglesAndTokenProvider } from '@/context/TogglesAndTokenContext'

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
})

const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mulish',
})

export const metadata = {
  title: 'Futbol Argentino',
  description: '¡Información de tu equipo favorito de manera instantánea!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${barlow.variable} ${mulish.variable}`}>
        <TogglesAndTokenProvider>
          {children}
        </TogglesAndTokenProvider>
      </body>
    </html>
  )
}
