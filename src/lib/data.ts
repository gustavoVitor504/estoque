import { MateriaPrima, ProdutoFabricado, Entrega } from '@/types'

export const materiaPrimaData: MateriaPrima[] = [
    { id: 1, nome: 'Farinha de Trigo', estoque: 1500, minimo: 500, unidade: 'kg', status: 'ok', custo: 2.50 },
    { id: 2, nome: 'Açúcar', estoque: 200, minimo: 300, unidade: 'kg', status: 'baixo', custo: 3.20 },
    { id: 3, nome: 'Ovos', estoque: 800, minimo: 200, unidade: 'unid', status: 'ok', custo: 0.45 },
    { id: 4, nome: 'Manteiga', estoque: 150, minimo: 100, unidade: 'kg', status: 'critico', custo: 12.00 },
]

export const produtosFabricadosData: ProdutoFabricado[] = [
  { id: 1, nome: 'Pão Francês', estoque: 2000, demandaDiaria: 800, capacidadeProducao: 1200, unidade: 'unid' },
  { id: 2, nome: 'Bolo de Chocolate', estoque: 50, demandaDiaria: 30, capacidadeProducao: 60, unidade: 'unid' },
  { id: 3, nome: 'Croissant', estoque: 120, demandaDiaria: 100, capacidadeProducao: 150, unidade: 'unid' },
]

export const entregasData: Entrega[] = [
  { id: 1, destino: 'Supermercado A', capacidade: 1000, ocupacao: 750, status: 'disponivel' },
  { id: 2, destino: 'Restaurante B', capacidade: 500, ocupacao: 500, status: 'completo' },
  { id: 3, destino: 'Padaria C', capacidade: 800, ocupacao: 200, status: 'disponivel' },
]