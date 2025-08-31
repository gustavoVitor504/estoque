import { Package, Bell, Settings, ChevronDown, Search } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [notifications] = useState(3)

  const headerStyle = {
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
    borderBottom: '1px solid #374151',
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
    position: 'relative' as const
  }

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const flexContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '5rem'
  }

  const logoContainerStyle = {
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    padding: '0.75rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }

  const titleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }

  const mainTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'white',
    margin: '0'
  }

  const subtitleStyle = {
    fontSize: '0.875rem',
    color: '#9ca3af',
    margin: '0.25rem 0 0 0'
  }

  const searchContainerStyle = {
    position: 'relative' as const,
    width: '100%',
    maxWidth: '28rem',
    margin: '0 2rem'
  }

  const searchInputStyle = {
    width: '100%',
    paddingLeft: '3rem',
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

  const searchIconStyle = {
    position: 'absolute' as const,
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    width: '1.25rem',
    height: '1.25rem'
  }

  const actionButtonStyle = {
    position: 'relative' as const,
    padding: '0.75rem',
    color: '#9ca3af',
    background: 'transparent',
    border: 'none',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  const notificationBadgeStyle = {
    position: 'absolute' as const,
    top: '-0.25rem',
    right: '-0.25rem',
    width: '1.25rem',
    height: '1.25rem',
    background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  }

  const profileButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.5rem',
    background: 'transparent',
    border: 'none',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }

  const userInfoStyle = {
    textAlign: 'right' as const
  }

  const userNameStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'white',
    margin: '0'
  }

  const userRoleStyle = {
    fontSize: '0.75rem',
    color: '#9ca3af',
    margin: '0.25rem 0 0 0'
  }

  const avatarStyle = {
    width: '3rem',
    height: '3rem',
    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.125rem',
    fontWeight: '700',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  }

  const dropdownStyle = {
    position: 'absolute' as const,
    right: '0',
    marginTop: '0.5rem',
    width: '14rem',
    background: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.75rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
    overflow: 'hidden'
  }

  const dropdownHeaderStyle = {
    padding: '1rem',
    borderBottom: '1px solid #4b5563'
  }

  const dropdownLinkStyle = {
    display: 'block',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#d1d5db',
    textDecoration: 'none',
    transition: 'all 0.2s ease'
  }

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  }

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={flexContainerStyle}>
          
          {/* Left section - Logo and Title */}
          <div style={titleContainerStyle}>
            <div 
              style={logoContainerStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(59, 130, 246, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
              }}
            >
              <Package style={{ width: '2rem', height: '2rem', color: 'white' }} />
            </div>
            
            <div>
              <h1 style={mainTitleStyle}>Sistema Integrado</h1>
              <p style={subtitleStyle}>Gestão de Estoque e Produção</p>
            </div>
          </div>

          {/* Center section - Search bar */}
          <div style={searchContainerStyle}>
            <Search style={searchIconStyle} />
            <input
              type="text"
              placeholder="Pesquisar..."
              style={searchInputStyle}
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

          {/* Right section - Actions and Profile */}
          <div style={rightSectionStyle}>
            
            {/* Notification button */}
            <button 
              style={actionButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#374151'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#9ca3af'
              }}
            >
              <Bell style={{ width: '1.5rem', height: '1.5rem' }} />
              {notifications > 0 && (
                <span style={notificationBadgeStyle}>{notifications}</span>
              )}
            </button>

            {/* Settings button */}
            <button 
              style={actionButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#374151'
                e.currentTarget.style.color = 'white'
                const icon = e.currentTarget.querySelector('svg')
                if (icon) icon.style.transform = 'rotate(90deg)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#9ca3af'
                const icon = e.currentTarget.querySelector('svg')
                if (icon) icon.style.transform = 'rotate(0deg)'
              }}
            >
              <Settings style={{ width: '1.5rem', height: '1.5rem', transition: 'transform 0.3s ease' }} />
            </button>

            {/* Profile section */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                style={profileButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#374151'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <div style={userInfoStyle}>
                  <div style={userNameStyle}>Admin User</div>
                  <div style={userRoleStyle}>Administrador</div>
                </div>
                
                <div style={avatarStyle}>
                  <span>A</span>
                </div>
                
                <ChevronDown 
                  style={{ 
                    width: '1rem', 
                    height: '1rem', 
                    color: '#9ca3af',
                    transition: 'transform 0.3s ease',
                    transform: isProfileOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>

              {/* Dropdown menu */}
              {isProfileOpen && (
                <div style={dropdownStyle}>
                  <div style={dropdownHeaderStyle}>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white' }}>Admin User</div>
                    <div style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>admin@sistema.com</div>
                  </div>
                  <div style={{ padding: '0.5rem 0' }}>
                    <a 
                      href="#" 
                      style={dropdownLinkStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#4b5563'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#d1d5db'
                      }}
                    >
                      Meu Perfil
                    </a>
                    <a 
                      href="#" 
                      style={dropdownLinkStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#4b5563'
                        e.currentTarget.style.color = 'white'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = '#d1d5db'
                      }}
                    >
                      Configurações
                    </a>
                    <div style={{ borderTop: '1px solid #4b5563', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
                      <a 
                        href="#" 
                        style={{ ...dropdownLinkStyle, color: '#f87171' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#4b5563'
                          e.currentTarget.style.color = '#fca5a5'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = '#f87171'
                        }}
                      >
                        Sair
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}