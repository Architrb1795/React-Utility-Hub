import React from 'react';

const GeneratorCard = ({ children }) => {
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border)',
      padding: '1.5rem',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {children}
    </div>
  );
};

export default GeneratorCard;
