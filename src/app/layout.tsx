'use client'
import Navbar from '@/components/Navbar'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider attribute='class' enableSystem={true}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
