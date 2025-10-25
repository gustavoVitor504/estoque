import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ProdutosProvider } from '@/context/ProdutosContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sistema de Estoque Integrado',
  description: 'Gestão integrada de matéria-prima, produção e entregas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ProdutosProvider>
        {children}

        </ProdutosProvider>
      </body>
    </html>
  )
}