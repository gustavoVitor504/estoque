'use client'

import { useState, useEffect } from 'react'
import Header from './ui/Header'
import Navigation from './ui/Navigation'
import Dashboard from './dashboard/Dashboard'
import MateriaPrimaTab from './materia-prima/MateriaPrimaTab'
import ProducaoTab from './producao/ProducaoTab'
import EntregasTab from './entregas/EntregasTab'

export default function SistemaEstoqueIntegrado() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const mainContainerStyle = {
    minHeight: '100vh',
    background: '#030712',
    position: 'relative' as const
  }

  const backgroundOverlayStyle = {
    position: 'fixed' as const,
    inset: '0',
    background: '#030712',
    zIndex: 0
  }

  const gridPatternStyle = {
    position: 'absolute' as const,
    inset: '0',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.02)'%3e%3cpath d='m0 .5h32m0 31h-32m31.5 0v-32m-31 32v-32'/%3e%3c/svg%3e")`,
    backgroundSize: '50px 50px'
  }

  const gradientOverlayStyle = {
    position: 'absolute' as const,
    inset: '0',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)'
  }

  const mainContentStyle = {
    position: 'relative' as const,
    zIndex: 10
  }

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '2rem 1rem'
  }

  const navigationContainerStyle = {
    marginBottom: '2rem'
  }

  const contentAreaStyle = {
    position: 'relative' as const
  }

  const contentBackdropStyle = {
    position: 'absolute' as const,
    inset: '0',
    background: 'rgba(17, 24, 39, 0.2)',
    backdropFilter: 'blur(40px)',
    borderRadius: '1.5rem',
    border: '1px solid rgba(31, 41, 55, 0.3)'
  }

  const tabContentStyle = {
    position: 'relative' as const,
    zIndex: 10,
    padding: '2rem',
    borderRadius: '1.5rem'
  }

  const animationStyle = {
    opacity: 0,
    transform: 'translateY(10px)',
    animation: 'fadeIn 0.5s ease-out forwards'
  }

  const footerStyle = {
    position: 'relative' as const,
    zIndex: 10,
    marginTop: '4rem',
    paddingBottom: '2rem'
  }

  const footerContainerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const footerContentStyle = {
    textAlign: 'center' as const
  }

  const statusIndicatorStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  }

  const statusDotStyle = {
    width: '0.5rem',
    height: '0.5rem',
    background: '#22c55e',
    borderRadius: '50%',
    animation: 'pulse 2s infinite'
  }

  const separatorStyle = {
    color: '#374151'
  }

  return (
    <div style={mainContainerStyle}>
      {/* Background layers */}
      <div style={backgroundOverlayStyle}>
        <div style={gridPatternStyle} />
        <div style={gradientOverlayStyle} />
      </div>

      {/* Main content */}
      <div style={mainContentStyle}>
        <Header />
        
        {/* Main container */}
        <main style={containerStyle}>
          {/* Navigation */}
          <div style={navigationContainerStyle}>
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          
          {/* Content area */}
          <div style={contentAreaStyle}>
            {/* Content backdrop */}
            <div style={contentBackdropStyle} />
            
            {/* Tab content */}
            <div style={tabContentStyle}>
              {activeTab === 'dashboard' && (
                <div style={animationStyle}>
                  <Dashboard />
                </div>
              )}
              {activeTab === 'materia-prima' && (
                <div style={animationStyle}>
                  <MateriaPrimaTab />
                </div>
              )}
              {activeTab === 'producao' && (
                <div style={animationStyle}>
                  <ProducaoTab />
                </div>
              )}
              {activeTab === 'entregas' && (
                <div style={animationStyle}>
                  <EntregasTab />
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer style={footerStyle}>
          <div style={footerContainerStyle}>
            <div style={footerContentStyle}>
              <div style={statusIndicatorStyle}>
                <div style={statusDotStyle} />
                <span>Sistema Online</span>
                <span style={separatorStyle}>•</span>
                <span>Última atualização: {currentTime.toLocaleTimeString('pt-BR')}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}