import './globals.css'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import {  Providers } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '퍼즐',
  description: '프로젝트 개발 가이드라인을 제공하는 플랫폼',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Providers>
            {children}
          </Providers>
        </Suspense>
      </body> 
    </html>
  )
}