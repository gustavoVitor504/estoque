import { Package, AlertTriangle, TrendingUp, Truck, Factory } from 'lucide-react'
import { useProdutos } from '../../context/ProdutosContext';

export default function Dashboard() {
  const { produtos } = useProdutos();

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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

  const getCardWithBorder = (borderColor: string) => ({
    ...cardStyle,
    borderLeft: `4px solid ${borderColor}`
  })

  const cardContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  }

  const labelStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#d1d5db',
    margin: '0'
  }

  const valueStyle = {
    fontSize: '1.875rem',
    fontWeight: '700',
    color: 'white',
    margin: '0'
  }

  const iconStyle = {
    width: '2rem',
    height: '2rem'
  }

  const alertCardStyle = {
    ...cardStyle,
    marginBottom: '0'
  }

  const alertHeaderStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  }

  const alertsContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.75rem'
  }

  const getAlertItemStyle = (bgColor: string) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    background: bgColor
  })

  const alertTextStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#374151'
  }

  const getBadgeStyle = (bgColor: string, textColor: string) => ({
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    background: bgColor,
    color: textColor
  })

  const efficiencyCardStyle = {
    ...cardStyle,
    marginBottom: '0'
  }

  const efficiencyHeaderStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: 'white'
  }

  const productContainerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem'
  }

  const productItemStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  }

  const productHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const productNameStyle = {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white'
  }

  const productPercentageStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af'
  }

  const progressBarContainerStyle = {
    width: '100%',
    height: '0.5rem',
    borderRadius: '9999px',
    background: '#374151',
    overflow: 'hidden'
  }

  const getProgressBarStyle = (percentage: number) => {
    let color = '#ef4444' // red
    if (percentage > 200) color = '#22c55e' // green
    else if (percentage > 100) color = '#eab308' // yellow

    return {
      height: '100%',
      borderRadius: '9999px',
      background: color,
      width: `${Math.min(percentage, 100)}%`,
      transition: 'width 0.3s ease'
    }
  }

  const twoColumnGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '1.5rem'
  }

  return (
    <div style={containerStyle}>
      {/* Cards superiores */}
      <div style={gridStyle}>
        <div 
          style={getCardWithBorder('#3b82f6')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div style={cardContentStyle}>
            <div style={textContainerStyle}>
              <p style={labelStyle}>Matéria-Prima</p>
              <p style={valueStyle}>24 itens</p>
            </div>
            <Package style={{ ...iconStyle, color: '#3b82f6' }} />
          </div>
        </div>
        
        <div 
          style={getCardWithBorder('#22c55e')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div style={cardContentStyle}>
            <div style={textContainerStyle}>
              <p style={labelStyle}>Prod. Acabados</p>
              <p style={valueStyle}>2.170 un</p>
            </div>
            <Factory style={{ ...iconStyle, color: '#22c55e' }} />
          </div>
        </div>

        <div 
          style={getCardWithBorder('#eab308')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div style={cardContentStyle}>
            <div style={textContainerStyle}>
              <p style={labelStyle}>Cap. Produção</p>
              <p style={valueStyle}>85%</p>
            </div>
            <TrendingUp style={{ ...iconStyle, color: '#eab308' }} />
          </div>
        </div>

        <div 
          style={getCardWithBorder('#a855f7')}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
          }}
        >
          <div style={cardContentStyle}>
            <div style={textContainerStyle}>
              <p style={labelStyle}>Entregas Hoje</p>
              <p style={valueStyle}>8 rotas</p>
            </div>
            <Truck style={{ ...iconStyle, color: '#a855f7' }} />
          </div>
        </div>
      </div>

      {/* Seção inferior com alertas e eficiência */}
      <div style={twoColumnGridStyle}>
        {/* Alertas Críticos */}
        <div style={alertCardStyle}>
          <h3 style={alertHeaderStyle}>
            <AlertTriangle style={{ marginRight: '0.5rem', color: '#f97316' }} />
            Alertas Críticos
          </h3>
          <div style={alertsContainerStyle}>
            <div style={getAlertItemStyle('#fef2f2')}>
              <span style={alertTextStyle}>Carioca Classe B - Estoque Crítico</span>
              <span style={getBadgeStyle('#fee2e2', '#991b1b')}>Urgente</span>
            </div>
            <div style={getAlertItemStyle('#fffbeb')}>
              <span style={alertTextStyle}>Carioca Classe A - Abaixo do Mínimo</span>
              <span style={getBadgeStyle('#fef3c7', '#92400e')}>Atenção</span>
            </div>
            <div style={getAlertItemStyle('#fffbeb')}>
              <span style={alertTextStyle}>Açúcar - Abaixo do Mínimo</span>
              <span style={getBadgeStyle('#fef3c7', '#92400e')}>Atenção</span>
            </div>
          </div>
        </div>

        {/* Eficiência de Produção */}
        <div style={efficiencyCardStyle}>
          <h3 style={efficiencyHeaderStyle}>Eficiência de Produção</h3>
          <div style={productContainerStyle}>
            {produtos.map(produto => {
              const eficiencia = (produto.estoque / produto.demandaDiaria * 100);
              return (
                <div key={produto.id} style={productItemStyle}>
                  <div style={productHeaderStyle}>
                    <span style={productNameStyle}>{produto.nome}</span>
                    <span style={productPercentageStyle}>{eficiencia.toFixed(0)}%</span>
                  </div>
                  <div style={progressBarContainerStyle}>
                    <div style={getProgressBarStyle(eficiencia)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}