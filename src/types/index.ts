export interface MateriaPrima {
  id: number
  nome: string
  estoque: number
  minimo: number
  unidade: string
  status: 'ok' | 'baixo' | 'critico'
  custo: number
}

export interface ProdutoFabricado {
  id: number
  nome: string
  estoque: number
  demandaDiaria: number
  capacidadeProducao: number
  unidade: string
}

export interface Entrega {
  id: number
  destino: string
  capacidade: number
  ocupacao: number
  status: 'disponivel' | 'completo'
}

export type TabType = 'dashboard' | 'materia-prima' | 'producao' | 'entregas'