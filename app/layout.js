import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3Top Ecclesia',
  description: 'Threetop Travels Site',
  manifest: '/manifest.json',
  icons: {apple: '/icon512_maskable.png'}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
