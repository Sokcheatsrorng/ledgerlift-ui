import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LedgerLift - Blockchain-Powered Donations',
  description: 'Elevate your impact with transparent, secure blockchain donations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}