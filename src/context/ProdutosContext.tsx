"use client"

import { createContext, useContext, useState } from "react"

type Produto = {
  id: number
  nome: string
  estoque: number
  demandaDiaria: number
  capacidadeProducao: number
    unidade: string
}

type ProdutosContextType = {
  produtos: Produto[]
  setProdutos: React.Dispatch<React.SetStateAction<Produto[]>>
}

const ProdutosContext = createContext<ProdutosContextType | undefined>(undefined)

export function ProdutosProvider({ children }: { children: React.ReactNode }) {
  const [produtos, setProdutos] = useState<Produto[]>([
    { id: 1, nome: "Carioca Vasconcelos 30x1", estoque: 3250, demandaDiaria: 980 , capacidadeProducao: 1155, unidade: 'fd'},
    { id: 2, nome: "Arroz Vasconcelos 6x5", estoque: 12450, demandaDiaria: 6500 , capacidadeProducao: 7000, unidade: 'fd'},
    { id: 3, nome: "Açúcar 6x5", estoque: 805, demandaDiaria: 455 , capacidadeProducao: 980, unidade: 'fd'},
  ])

  return (
    <ProdutosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </ProdutosContext.Provider>
  )
}

export function useProdutos() {
  const context = useContext(ProdutosContext)
  if (!context) {
    throw new Error("useProdutos deve ser usado dentro de um ProdutosProvider")
  }
  return context
}
