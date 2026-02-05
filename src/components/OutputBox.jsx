import React, { useState } from 'react';

// Icons
const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>
);
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
);

const OutputBox = ({ generatedString, onRegenerate, isGenerateDisabled }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!generatedString) return;
    navigator.clipboard.writeText(generatedString).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    if (!generatedString) return;
    const blob = new Blob([generatedString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-string.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="output-section flex-col gap-2 w-full">
      <div className="flex-between">
         <span className="text-secondary text-sm font-weight-500 uppercase tracking-wide">Output</span>
         <div className="flex-center gap-2">
            <button 
                onClick={onRegenerate}
                className="icon-btn"
                title="Regenerate"
                disabled={isGenerateDisabled}
            >
                <RefreshIcon />
            </button>
            <button 
                onClick={handleDownload}
                className="icon-btn"
                title="Download"
                disabled={!generatedString}
            >
                <DownloadIcon />
            </button>
         </div>
      </div>

      <div 
        className="output-hero"
        style={{
            position: 'relative',
            background: 'var(--bg-input)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border)',
            padding: '1.25rem',
            paddingRight: '3.5rem', // Space for copy button
            minHeight: '60px',
            display: 'flex',
            alignItems: 'center'
        }}
      >
        <div 
          className="font-mono"
          style={{ 
            fontSize: '1.1rem', 
            color: generatedString ? 'var(--text-main)' : 'var(--text-secondary)',
            wordBreak: 'break-all',
            width: '100%'
          }}
        >
          {generatedString || "Click generate..."}
        </div>

        <button
            onClick={handleCopy}
            disabled={!generatedString}
            style={{
                position: 'absolute',
                right: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: copied ? 'var(--success)' : 'var(--bg-card)',
                color: copied ? 'white' : 'var(--text-main)',
                border: '1px solid var(--border)',
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: !generatedString ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                boxShadow: 'var(--shadow-sm)'
            }}
        >
            {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </div>
        <style>{`
            .icon-btn {
                background: transparent;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 4px;
                border-radius: 4px;
                display: flex;
            }
            .icon-btn:hover:not(:disabled) {
                background: var(--bg-input);
                color: var(--primary);
            }
            .icon-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        `}</style>
    </div>
  );
};

export default OutputBox;
