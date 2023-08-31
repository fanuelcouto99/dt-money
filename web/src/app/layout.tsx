import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const robotoRegular = Roboto({subsets: ['latin'], weight: '400', variable: '--font-roboto-400'});
const robotoBold = Roboto({subsets: ['latin'], weight: '700', variable: '--font-roboto-700'});

export const metadata: Metadata = {
  title: 'DT Money',
  description: 'Aplicação para controle financeiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${robotoRegular.variable} ${robotoBold.variable} bg-gray-800 text-gray-100`}>{children}</body>
    </html>
  )
}
