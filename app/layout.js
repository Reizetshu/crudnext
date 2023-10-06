import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple Topic',
  description: 'Simple CRUD using NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-3xl mx-auto p-4'>
          <NavBar />
          <div className='mt-8'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
