import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | SERANEX',
    default: 'SERANEX - Elite Digital Engineering',
  },
  description: 'A global digital engineering firm specializing in high-performance web applications, strategic branding, and custom software solutions.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} bg-black text-gray-100`}>
          <Header />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
