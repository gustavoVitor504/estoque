import { Truck, MapPin, Clock, Package } from 'lucide-react'

export default function EntregasTab() {
  const entregas = [
    { id: 1, destino: 'Supermercado A', capacidade: 1000, ocupacao: 750, status: 'disponivel', horario: '08:00' },
    { id: 2, destino: 'Restaurante B', capacidade: 500, ocupacao: 500, status: 'completo', horario: '10:30' },
    { id: 3, destino: 'Padaria C', capacidade: 800, ocupacao: 200, status: 'disponivel', horario: '14:00' },
    { id: 4, destino: 'Hotel Premium', capacidade: 600, ocupacao: 450, status: 'disponivel', horario: '16:30' },
    { id: 5, destino: 'Shopping Center', capacidade: 1200, ocupacao: 1200, status: 'completo', horario: '09:00' },
  ]

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'disponivel': 
        return { bg: 'rgba(59, 130, 246, 0.1)', text: '#3b82f6', label: 'Disponível', icon: '🟢' }
      case 'completo': 
        return { bg: 'rgba(107, 114, 128, 0.1)', text: '#6b7280', label: 'Completo', icon: '🔴' }
      default: 
        return { bg: 'rgba(107, 114, 128, 0.1)', text: '#6b7280', label: 'Normal', icon: '⚪' }
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
    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
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
    boxShadow: '0 4px 6px -1px rgba(168, 85, 247, 0.3)'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem'
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '1.5rem'
  }

  const destinationContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  }

  const iconContainerStyle = {
    padding: '0.5rem',
    background: 'rgba(168, 85, 247, 0.1)',
    borderRadius: '0.5rem'
  }

  const destinationNameStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    margin: '0'
  }

  const getStatusBadgeStyle = (statusInfo: any) => ({
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    borderRadius: '9999px',
    background: statusInfo.bg,
    color: statusInfo.text,
    border: `1px solid ${statusInfo.text}30`
  })

  const dataContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem'
  }

  const infoRowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#d1d5db'
  }

  const progressSectionStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  }

  const progressHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    color: '#d1d5db'
  }

  const progressBarContainerStyle = {
    width: '100%',
    height: '0.75rem',
    borderRadius: '9999px',
    background: '#374151',
    overflow: 'hidden',
    position: 'relative' as const
  }

  const getProgressBarStyle = (percentage: number) => {
    let color = '#22c55e' // green
    if (percentage === 100) color = '#ef4444' // red
    else if (percentage > 80) color = '#eab308' // yellow

    return {
      height: '100%',
      borderRadius: '9999px',
      background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
      width: `${percentage}%`,
      transition: 'width 0.3s ease',
      boxShadow: `0 2px 4px ${color}30`
    }
  }

  const capacityInfoStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af',
    padding: '0.75rem',
    background: 'rgba(55, 65, 81, 0.3)',
    borderRadius: '0.5rem'
  }

  const buttonContainerStyle = {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.5rem'
  }

  const primaryButtonStyle = {
    flex: '1',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    color: 'white',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  const secondaryButtonStyle = {
    flex: '1',
    background: 'transparent',
    color: '#d1d5db',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #4b5563',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  const summaryCardStyle = {
    ...cardStyle,
    padding: '2rem'
  }

  const summaryTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: 'white',
    marginBottom: '1.5rem'
  }

  const summaryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem'
  }

  const summaryItemStyle = {
    textAlign: 'center' as const,
    padding: '1rem',
    background: 'rgba(55, 65, 81, 0.3)',
    borderRadius: '0.75rem'
  }

  const summaryValueStyle = (color: string) => ({
    fontSize: '2rem',
    fontWeight: '700',
    color: color,
    margin: '0 0 0.5rem 0'
  })

  const summaryLabelStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af'
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={titleStyle}>Capacidade de Entrega</h2>
        <button 
          style={addButtonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(168, 85, 247, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(168, 85, 247, 0.3)'
          }}
        >
          <Truck style={{ width: '1rem', height: '1rem' }} />
          Nova Rota
        </button>
      </div>

      {/* Delivery Cards Grid */}
      <div style={gridStyle}>
        {entregas.map((entrega) => {
          const percentualOcupacao = (entrega.ocupacao / entrega.capacidade) * 100
          const statusInfo = getStatusInfo(entrega.status)
          
          return (
            <div 
              key={entrega.id} 
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Card Header */}
              <div style={cardHeaderStyle}>
                <div style={destinationContainerStyle}>
                  <div style={iconContainerStyle}>
                    <MapPin style={{ width: '1.25rem', height: '1.25rem', color: '#a855f7' }} />
                  </div>
                  <h3 style={destinationNameStyle}>{entrega.destino}</h3>
                </div>
                <span style={getStatusBadgeStyle(statusInfo)}>
                  {statusInfo.label}
                </span>
              </div>

              <div style={dataContainerStyle}>
                {/* Horário */}
                <div style={infoRowStyle}>
                  <Clock style={{ width: '1rem', height: '1rem' }} />
                  <span>Horário: {entrega.horario}</span>
                </div>

                {/* Ocupação Progress */}
                <div style={progressSectionStyle}>
                  <div style={progressHeaderStyle}>
                    <span>Ocupação</span>
                    <span>{entrega.ocupacao}/{entrega.capacidade} kg</span>
                  </div>
                  <div style={progressBarContainerStyle}>
                    <div style={getProgressBarStyle(percentualOcupacao)} />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                    {percentualOcupacao.toFixed(1)}% ocupado
                  </div>
                </div>

                {/* Capacidade Disponível */}
                <div style={capacityInfoStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Package style={{ width: '1rem', height: '1rem' }} />
                    <span>Capacidade disponível: {entrega.capacidade - entrega.ocupacao} kg</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={buttonContainerStyle}>
                  <button 
                    style={primaryButtonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)'
                      e.currentTarget.style.boxShadow = '0 8px 15px -3px rgba(59, 130, 246, 0.3)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    Agendar
                  </button>
                  <button 
                    style={secondaryButtonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(55, 65, 81, 0.5)'
                      e.currentTarget.style.borderColor = '#6b7280'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = '#4b5563'
                    }}
                  >
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Summary Card */}
      <div style={summaryCardStyle}>
        <h3 style={summaryTitleStyle}>Resumo de Entregas</h3>
        <div style={summaryGridStyle}>
          <div style={summaryItemStyle}>
            <div style={summaryValueStyle('#3b82f6')}>12</div>
            <div style={summaryLabelStyle}>Entregas Programadas</div>
          </div>
          <div style={summaryItemStyle}>
            <div style={summaryValueStyle('#22c55e')}>8</div>
            <div style={summaryLabelStyle}>Entregas Concluídas</div>
          </div>
          <div style={summaryItemStyle}>
            <div style={summaryValueStyle('#eab308')}>4</div>
            <div style={summaryLabelStyle}>Em Andamento</div>
          </div>
          <div style={summaryItemStyle}>
            <div style={summaryValueStyle('#a855f7')}>85%</div>
            <div style={summaryLabelStyle}>Taxa de Sucesso</div>
          </div>
        </div>
      </div>
    </div>
  )
}