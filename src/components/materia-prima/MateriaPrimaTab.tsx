import { useState } from 'react'
import { Search, Plus, Filter, Edit, Package } from 'lucide-react'

export default function MateriaPrimaTab() {
  const [searchTerm, setSearchTerm] = useState('')

  const materiaPrima = [
    { id: 1, nome: 'Farinha de Trigo', estoque: 1500, minimo: 500, unidade: 'kg', status: 'ok', custo: 2.50 },
    { id: 2, nome: 'Açúcar', estoque: 200, minimo: 300, unidade: 'kg', status: 'baixo', custo: 3.20 },
    { id: 3, nome: 'Ovos', estoque: 800, minimo: 200, unidade: 'unid', status: 'ok', custo: 0.45 },
    { id: 4, nome: 'Manteiga', estoque: 50, minimo: 100, unidade: 'kg', status: 'critico', custo: 12.00 },
    { id: 5, nome: 'Fermento', estoque: 80, minimo: 50, unidade: 'kg', status: 'ok', custo: 8.50 },
    { id: 6, nome: 'Leite', estoque: 120, minimo: 150, unidade: 'L', status: 'baixo', custo: 4.20 },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ok': return { bg: '#dcfce7', text: '#166534', label: 'Normal' }
      case 'baixo': return { bg: '#fef3c7', text: '#92400e', label: 'Baixo' }
      case 'critico': return { bg: '#fee2e2', text: '#991b1b', label: 'Crítico' }
      default: return { bg: '#f3f4f6', text: '#374151', label: 'Normal' }
    }
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem'
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  }

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: 'white',
    margin: '0'
  }

  const addButtonStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '0.75rem 1.25rem',
    borderRadius: '0.75rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
  }

  const cardStyle = {
    background: 'rgba(17, 24, 39, 0.8)',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(55, 65, 81, 0.5)',
    backdropFilter: 'blur(10px)',
    overflow: 'hidden'
  }

  const cardHeaderStyle = {
    padding: '1.5rem',
    borderBottom: '1px solid rgba(55, 65, 81, 0.5)'
  }

  const searchContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem'
  }

  const searchInputContainerStyle = {
    position: 'relative' as const,
    flex: '1',
    maxWidth: '20rem'
  }

  const searchIconStyle = {
    position: 'absolute' as const,
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    width: '1rem',
    height: '1rem'
  }

  const searchInputStyle = {
    width: '100%',
    paddingLeft: '2.5rem',
    paddingRight: '1rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    background: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.75rem',
    color: 'white',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  }

  const filterButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    background: 'transparent',
    border: '1px solid #4b5563',
    borderRadius: '0.75rem',
    color: '#d1d5db',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  const tableContainerStyle = {
    overflowX: 'auto' as const
  }

  const tableStyle = {
    width: '100%',
    borderCollapse: 'separate' as const,
    borderSpacing: '0'
  }

  const tableHeaderStyle = {
    background: 'rgba(31, 41, 55, 0.5)'
  }

  const thStyle = {
    padding: '1rem 1.5rem',
    textAlign: 'left' as const,
    fontSize: '0.75rem',
    fontWeight: '500',
    color: '#9ca3af',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    borderBottom: '1px solid rgba(55, 65, 81, 0.5)'
  }

  const tbodyStyle = {
    background: 'rgba(17, 24, 39, 0.3)'
  }

  const trStyle = {
    transition: 'background-color 0.2s ease',
    borderBottom: '1px solid rgba(55, 65, 81, 0.3)'
  }

  const tdStyle = {
    padding: '1rem 1.5rem',
    whiteSpace: 'nowrap' as const,
    fontSize: '0.875rem'
  }

  const itemNameStyle = {
    fontWeight: '600',
    color: 'white'
  }

  const itemValueStyle = {
    color: '#d1d5db'
  }

  const actionButtonStyle = {
    padding: '0.5rem 0.75rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginRight: '0.5rem'
  }

  const editButtonStyle = {
    ...actionButtonStyle,
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#60a5fa'
  }

  const reorderButtonStyle = {
    ...actionButtonStyle,
    background: 'rgba(34, 197, 94, 0.1)',
    color: '#4ade80'
  }

  const filteredItems = materiaPrima.filter(item =>
    item.nome.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={titleStyle}>Gestão de Matéria-Prima</h2>
        <button 
          style={addButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(59, 130, 246, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
          }}
        >
          <Plus style={{ width: '1rem', height: '1rem' }} />
          Adicionar Item
        </button>
      </div>

      {/* Main Card */}
      <div style={cardStyle}>
        {/* Search Header */}
        <div style={cardHeaderStyle}>
          <div style={searchContainerStyle}>
            <div style={searchInputContainerStyle}>
              <Search style={searchIconStyle} />
              <input
                type="text"
                placeholder="Buscar matéria-prima..."
                style={searchInputStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6'
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#4b5563'
                  e.target.style.boxShadow = 'none'
                }}
              />
            </div>
            <button 
              style={filterButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(55, 65, 81, 0.5)'
                e.currentTarget.style.borderColor = '#6b7280'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = '#4b5563'
              }}
            >
              <Filter style={{ width: '1rem', height: '1rem' }} />
              Filtrar
            </button>
          </div>
        </div>

        {/* Table */}
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead style={tableHeaderStyle}>
              <tr>
                <th style={thStyle}>Item</th>
                <th style={thStyle}>Estoque Atual</th>
                <th style={thStyle}>Estoque Mínimo</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Custo Unit.</th>
                <th style={thStyle}>Ações</th>
              </tr>
            </thead>
            <tbody style={tbodyStyle}>
              {filteredItems.map((item, index) => {
                const statusInfo = getStatusColor(item.status)
                return (
                  <tr 
                    key={item.id} 
                    style={trStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(55, 65, 81, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(17, 24, 39, 0.3)'
                    }}
                  >
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div 
                          style={{
                            padding: '0.5rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '0.5rem'
                          }}
                        >
                          <Package style={{ width: '1rem', height: '1rem', color: '#60a5fa' }} />
                        </div>
                        <span style={itemNameStyle}>{item.nome}</span>
                      </div>
                    </td>
                    <td style={tdStyle}>
                      <span style={itemValueStyle}>
                        {item.estoque.toLocaleString()} {item.unidade}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span style={itemValueStyle}>
                        {item.minimo.toLocaleString()} {item.unidade}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span 
                        style={{
                          display: 'inline-flex',
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          borderRadius: '9999px',
                          background: statusInfo.bg,
                          color: statusInfo.text
                        }}
                      >
                        {statusInfo.label}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <span style={itemValueStyle}>
                        R$ {item.custo.toFixed(2)}
                      </span>
                    </td>
                    <td style={tdStyle}>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button 
                          style={editButtonStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)'
                          }}
                        >
                          <Edit style={{ width: '0.875rem', height: '0.875rem', marginRight: '0.25rem' }} />
                          Editar
                        </button>
                        <button 
                          style={reorderButtonStyle}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(34, 197, 94, 0.2)'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                          }}
                        >
                          Repor
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div style={{
            padding: '3rem',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <Package style={{ width: '3rem', height: '3rem', margin: '0 auto 1rem', color: '#4b5563' }} />
            <p style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.5rem' }}>
              Nenhum item encontrado
            </p>
            <p style={{ fontSize: '0.875rem' }}>
              Tente ajustar sua busca ou filtros
            </p>
          </div>
        )}
      </div>
    </div>
  )
}