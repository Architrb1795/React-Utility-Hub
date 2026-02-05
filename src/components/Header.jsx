import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex-between w-full animate-fade-in" style={{ padding: '0 0.5rem' }}>
      <div className="flex-col">
        <div className="flex-center gap-2" style={{ justifyContent: 'flex-start' }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            background: 'var(--primary)', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            #
          </div>
          <h1 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '700', 
            margin: 0,
            color: 'var(--text-main)'
          }}>
            Random String Generator
          </h1>
        </div>
        <p style={{ 
          margin: '0.25rem 0 0 40px', 
          fontSize: '0.875rem', 
          color: 'var(--text-secondary)' 
        }}>
          Secure • Configurable • Developer-friendly
        </p>
      </div>

      <button 
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '0.5rem',
          cursor: 'pointer',
          color: 'var(--text-main)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {theme === 'light' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        )}
      </button>
    </header>
  );
};

export default Header;
