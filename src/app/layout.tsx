'use client'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from 'next-themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
