import { TrendingUp, Package, Factory, Truck } from 'lucide-react'

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: TrendingUp, color: '#3b82f6' },
    { id: 'materia-prima', name: 'Matéria-Prima', icon: Package, color: '#22c55e' },
    { id: 'producao', name: 'Produção', icon: Factory, color: '#a855f7' },
    { id: 'entregas', name: 'Entregas', icon: Truck, color: '#f97316' },
  ]

  const containerStyle = {
    marginBottom: '2rem'
  }

  const navContainerStyle = {
    background: '#111827',
    borderRadius: '1rem',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(75, 85, 99, 0.5)',
    border: '1px solid #1f2937',
    padding: '0.75rem'
  }

  const navStyle = {
    display: 'flex',
    gap: '0.5rem'
  }

  const getButtonStyle = (isActive: boolean, color: string) => ({
    position: 'relative' as const,
    flex: '1',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem 1rem',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    overflow: 'hidden',
    background: isActive ? color : 'transparent',
    color: isActive ? 'white' : '#9ca3af',
    transform: isActive ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isActive ? `0 8px 25px -8px ${color}40` : 'none'
  })

  const iconContainerStyle = (isActive: boolean) => ({
    marginBottom: '0.5rem',
    transition: 'transform 0.3s ease',
    transform: isActive ? 'scale(1.1)' : 'scale(1)'
  })

  const textStyle = {
    position: 'relative' as const,
    zIndex: 10,
    fontSize: '0.75rem',
    fontWeight: '500',
    letterSpacing: '0.025em'
  }

  const activeIndicatorStyle = {
    position: 'absolute' as const,
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2rem',
    height: '0.25rem',
    background: 'white',
    borderRadius: '9999px',
    opacity: 0.8
  }

  const backgroundGlowStyle = {
    position: 'absolute' as const,
    inset: '0',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '0.75rem'
  }

  const hoverOverlayStyle = {
    position: 'absolute' as const,
    inset: '0',
    borderRadius: '0.75rem',
    background: 'rgba(255, 255, 255, 0.05)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  }

  const accentLineStyle = {
    marginTop: '0.75rem',
    height: '1px',
    background: '#1f2937'
  }

  return (
    <div style={containerStyle}>
      <div style={navContainerStyle}>
        <nav style={navStyle}>
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={getButtonStyle(isActive, tab.color)}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = `${tab.color}15`
                    e.currentTarget.style.color = tab.color
                    e.currentTarget.style.transform = 'scale(1.02)'
                    const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement
                    if (overlay) overlay.style.opacity = '1'
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement
                    if (icon) icon.style.transform = 'scale(1.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = '#9ca3af'
                    e.currentTarget.style.transform = 'scale(1)'
                    const overlay = e.currentTarget.querySelector('.hover-overlay') as HTMLElement
                    if (overlay) overlay.style.opacity = '0'
                    const icon = e.currentTarget.querySelector('.icon-container') as HTMLElement
                    if (icon) icon.style.transform = 'scale(1)'
                  }
                }}
              >
                {/* Background glow effect for active tab */}
                {isActive && <div style={backgroundGlowStyle} />}
                
                {/* Icon with animation */}
                <div 
                  className="icon-container"
                  style={iconContainerStyle(isActive)}
                >
                  <IconComponent style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
                
                {/* Tab name */}
                <span style={textStyle}>
                  {tab.name}
                </span>
                
                {/* Active indicator line */}
                {isActive && <div style={activeIndicatorStyle} />}
                
                {/* Hover effect overlay */}
                <div className="hover-overlay" style={hoverOverlayStyle} />
              </button>
            )
          })}
        </nav>
        
        {/* Bottom accent line */}
        <div style={accentLineStyle} />
      </div>
    </div>
  )
}