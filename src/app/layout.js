import Header from './components/Header'
import Footer from './components/footer'
import './globals.css'
import { Inter } from 'next/font/google'

import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
