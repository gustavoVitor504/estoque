'use client'
import { useProdutos } from '@/context/ProdutosContext'
import { Factory, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

export default function ProducaoTab() {
  const { produtos , setProdutos } = useProdutos();
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
    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
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
    boxShadow: '0 4px 6px -1px rgba(34, 197, 94, 0.3)'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem'
  }

  const cardStyle = {
    background: 'rgba(17, 24, 39, 0.8)',
    padding: '1.5rem',
    borderRadius: '1rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    border: '1px solid rgba(55, 65, 81, 0.5)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  }

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem'
  }

  const iconContainerStyle = {
    padding: '0.5rem',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '0.5rem'
  }

  const productNameStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    margin: '0'
  }

  const dataContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem'
  }

  const dataRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const labelStyle = {
    fontSize: '0.875rem',
    color: '#d1d5db'
  }

  const valueStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'white'
  }

  const progressContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  }

  const progressBarContainerStyle = {
    width: '100%',
    height: '0.75rem',
    borderRadius: '9999px',
    background: '#374151',
    overflow: 'hidden',
    position: 'relative' as const
  }

  const getProgressBarStyle = (percentage: number) => ({
    height: '100%',
    borderRadius: '9999px',
    background: 'linear-gradient(90deg, #a855f7 0%, #7c3aed 100%)',
    width: `${Math.min(percentage, 100)}%`,
    transition: 'width 0.3s ease',
    boxShadow: '0 2px 4px rgba(168, 85, 247, 0.3)'
  })

  const progressLabelStyle = {
    fontSize: '0.75rem',
    color: '#9ca3af'
  }

  const getCoverageAlertStyle = (days: number) => {
    let bgColor, textColor, icon

    if (days > 3) {
      bgColor = 'rgba(34, 197, 94, 0.1)'
      textColor = '#22c55e'
      icon = CheckCircle
    } else if (days > 1) {
      bgColor = 'rgba(245, 158, 11, 0.1)'
      textColor = '#f59e0b'
      icon = AlertCircle
    } else {
      bgColor = 'rgba(239, 68, 68, 0.1)'
      textColor = '#ef4444'
      icon = AlertCircle
    }

    return {
      padding: '1rem',
      borderRadius: '0.75rem',
      background: bgColor,
      border: `1px solid ${textColor}20`,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }
  }

  const getCoverageMessage = (days: number) => {
    if (days > 3) return 'Estoque adequado'
    if (days > 1) return 'Atenção necessária'
    return 'Produção urgente'
  }

  const buttonStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem'
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={titleStyle}>Capacidade de Produção</h2>
        <button 
          style={addButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(34, 197, 94, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(34, 197, 94, 0.3)'
          }}
        >
          <Factory style={{ width: '1rem', height: '1rem' }} />
          Nova Produção
        </button>
      </div>

      {/* Products Grid */}
      <div style={gridStyle}>
        {produtos.map((produto) => {
          // Agora a utilização é demanda / capacidade
          const utilizacao = (produto.demandaDiaria / produto.capacidadeProducao) * 100
          const coberturaDias = produto.estoque / produto.demandaDiaria
          const coverageStyle = getCoverageAlertStyle(coberturaDias)
          const IconComponent = coberturaDias > 3 ? CheckCircle : AlertCircle
          
          return (
    <div key={produto.id} style={cardStyle}>
      {/* Header */}
      <div style={cardHeaderStyle}>
        <div style={iconContainerStyle}>
          <Factory style={{ width: '1.25rem', height: '1.25rem', color: '#a855f7' }} />
        </div>
        <h3 style={productNameStyle}>{produto.nome}</h3>
      </div>

      <div style={dataContainerStyle}>
        {/* Estoque Atual */}
        <div style={dataRowStyle}>
          <span style={labelStyle}>Estoque Atual</span>
          <span style={valueStyle}>{produto.estoque} {produto.unidade}</span>
        </div>

                {/* Demanda Diária */}
                <div style={dataRowStyle}>
                  <span style={labelStyle}>Demanda Diária</span>
                  <span style={valueStyle}>{produto.demandaDiaria} {produto.unidade}</span>
                </div>

                {/* Capacidade de Produção */}
                <div style={progressContainerStyle}>
                  <div style={dataRowStyle}>
                    <span style={labelStyle}>Capacidade de Produção</span>
                    <span style={valueStyle}>{produto.capacidadeProducao} {produto.unidade}/dia</span>
                  </div>
                  <div style={progressBarContainerStyle}>
                    <div style={getProgressBarStyle(utilizacao)} />
                  </div>
                  <span style={progressLabelStyle}>{utilizacao.toFixed(1)}% utilizada</span>
                </div>

                {/* Coverage Alert */}
                <div style={coverageStyle}>
                  <IconComponent 
                    style={{ 
                      width: '1.25rem', 
                      height: '1.25rem', 
                      color: coverageStyle.border?.replace('20', '').replace('1px solid ', '') || '#22c55e'
                    }} 
                  />
                  <div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: '600', 
                      color: 'white',
                      marginBottom: '0.25rem'
                    }}>
                      Cobertura: {coberturaDias.toFixed(1)} dias
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                      {getCoverageMessage(coberturaDias)}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  style={buttonStyle}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)'
                    e.currentTarget.style.boxShadow = '0 8px 15px -3px rgba(59, 130, 246, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <TrendingUp style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                  Programar Produção
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}