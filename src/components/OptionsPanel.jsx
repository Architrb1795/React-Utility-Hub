import React, { useState } from 'react';

const PRESETS = [
  { id: 'custom', label: 'Custom', length: null, options: null },
  { id: 'pin', label: 'PIN', length: 4, options: { uppercase: false, lowercase: false, numbers: true, symbols: false } },
  { id: 'password', label: 'Password', length: 16, options: { uppercase: true, lowercase: true, numbers: true, symbols: true } },
  { id: 'api', label: 'API Key', length: 32, options: { uppercase: true, lowercase: true, numbers: true, symbols: false } },
];

const OptionsPanel = ({ length, startLength, maxLength, setLength, options, setOptions, autoGenerate, setAutoGenerate }) => {
  const [activePreset, setActivePreset] = useState('custom');
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const handlePresetChange = (presetId) => {
    setActivePreset(presetId);
    const preset = PRESETS.find(p => p.id === presetId);
    if (preset && preset.length) {
      setLength(preset.length);
      setOptions(preset.options);
    }
  };

  const handleOptionChange = (key) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
    setActivePreset('custom'); // Switch to custom if user tweaks options
  };

  const handleLengthChange = (e) => {
    setLength(Number(e.target.value));
    if (activePreset !== 'custom') setActivePreset('custom');
  };

  return (
    <div className="options-panel flex-col gap-5">
      
      {/* Length Control */}
      <div className="control-group">
        <label className="flex-between" style={{ marginBottom: '0.5rem' }}>
          <span className="text-sm text-secondary font-weight-500">Length</span>
          <span className="length-value font-mono" style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{length}</span>
        </label>
        <div className="slider-container">
          <input 
            type="range" 
            min={startLength} 
            max={maxLength} 
            value={length} 
            onChange={handleLengthChange}
            className="slider"
          />
        </div>
      </div>

      {/* Segmented Presets */}
      <div className="segmented-control">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            className={`segment-btn ${activePreset === preset.id ? 'active' : ''}`}
            onClick={() => handlePresetChange(preset.id)}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Collapsible Advanced Options */}
      <div className="advanced-section">
        <button 
          className="collapsible-trigger"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
        >
          <span>Advanced Options</span>
          <span style={{ transform: isAdvancedOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
        </button>

        <div 
            className="collapsible-content" 
            style={{ 
                height: isAdvancedOpen ? 'auto' : '0', 
                opacity: isAdvancedOpen ? 1 : 0,
                paddingTop: isAdvancedOpen ? '1rem' : 0
            }}
        >
            <div className="flex-col gap-4">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <label className="checkbox-label flex-center gap-2 text-sm" style={{ justifyContent: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={options.uppercase} onChange={() => handleOptionChange('uppercase')} />
                    Uppercase
                    </label>
                    <label className="checkbox-label flex-center gap-2 text-sm" style={{ justifyContent: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={options.lowercase} onChange={() => handleOptionChange('lowercase')} />
                    Lowercase
                    </label>
                    <label className="checkbox-label flex-center gap-2 text-sm" style={{ justifyContent: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={options.numbers} onChange={() => handleOptionChange('numbers')} />
                    Numbers
                    </label>
                    <label className="checkbox-label flex-center gap-2 text-sm" style={{ justifyContent: 'flex-start', cursor: 'pointer' }}>
                    <input type="checkbox" checked={options.symbols} onChange={() => handleOptionChange('symbols')} />
                    Symbols
                    </label>
                </div>

                <div className="flex-between" style={{ padding: '0.5rem 0', borderTop: '1px solid var(--border)' }}>
                    <span className="text-sm text-secondary">Auto-update</span>
                    <div className="toggle-switch relative" style={{ width: '40px', height: '22px', position: 'relative' }}>
                        <input 
                            type="checkbox" 
                            checked={autoGenerate}
                            onChange={() => setAutoGenerate(!autoGenerate)}
                            style={{ opacity: 0, width: '100%', height: '100%', cursor: 'pointer', zIndex: 1, position: 'absolute', top: 0, left: 0 }}
                        />
                        <span style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            background: autoGenerate ? 'var(--primary)' : 'var(--border)',
                            borderRadius: '20px', transition: '0.2s'
                        }}></span>
                        <span style={{
                            position: 'absolute', top: '2px', left: '2px', width: '18px', height: '18px',
                            background: 'white', borderRadius: '50%', transition: '0.2s',
                            transform: autoGenerate ? 'translateX(18px)' : 'translateX(0)'
                        }}></span>
                    </div>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default OptionsPanel;
