import React, { useMemo } from 'react';

const StrengthMeter = ({ string, length }) => {
  const strength = useMemo(() => {
    if (!string) return null; // Logic handled here, but parent conditionally renders too

    let score = 0;
    if (length > 8) score += 1;
    if (length > 12) score += 1;
    if (length > 16) score += 1;
    if (/[A-Z]/.test(string)) score += 1;
    if (/[0-9]/.test(string)) score += 1;
    if (/[^A-Za-z0-9]/.test(string)) score += 1;

    // Normalize to 0-4
    if (score < 3) return { label: 'Weak', color: 'var(--danger)' };
    if (score < 5) return { label: 'Medium', color: 'var(--warning)' };
    if (score < 7) return { label: 'Strong', color: 'var(--success)' };
    return { label: 'Very Strong', color: 'var(--primary)' };
  }, [string, length]);

  if (!string || !strength) return null;

  return (
    <div className="strength-meter flex-center gap-2 animate-fade-in" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: strength.color }}></div>
      <span className="text-sm text-secondary">Strength:</span>
      <span className="text-sm font-weight-600" style={{ color: strength.color, fontWeight: 600 }}>{strength.label}</span>
      {/* Could add details tooltip here later */}
    </div>
  );
};

export default StrengthMeter;
