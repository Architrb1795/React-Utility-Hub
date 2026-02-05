import React, { useEffect, useState, useRef } from 'react';
import { Copy, Download, FileJson } from 'lucide-react';

const OutputPanel = ({ text, isLoading }) => {
  const [copied, setCopied] = React.useState(false);
  const [displayText, setDisplayText] = useState('');
  
  // Decoding Effect Logic
  useEffect(() => {
    if (!text) {
      setDisplayText('');
      return;
    }
    
    let iteration = 0;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    const interval = setInterval(() => {
      setDisplayText(text
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return text[index]; 
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('')
      );
      
      if (iteration >= text.length) { 
        clearInterval(interval);
      }
      
      iteration += 1 / 2; // Speed of decoding
    }, 15); // Refresh rate
    
    return () => clearInterval(interval);
  }, [text]);

  const copyToClipboard = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  const downloadTxt = () => {
    if(!text) return;
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "decoded_signal.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex justify-between items-center mb-3">
        <label className="text-neon-purple font-tech font-bold tracking-[0.15em] text-sm uppercase flex items-center gap-2">
           <span className="w-1.5 h-1.5 bg-neon-purple rotate-45"></span>
           Decoded Signal
        </label>
        
        <div className="flex items-center gap-2">
           <button onClick={downloadTxt} className="text-neon-purple/50 hover:text-neon-purple transition-colors" title="Download .txt">
             <Download size={14} />
           </button>
           <div className="w-px h-3 bg-white/10"></div>
           <button 
            onClick={copyToClipboard}
            className={`transition-all duration-300 text-xs font-tech tracking-wider uppercase px-3 py-1 rounded border ${
              copied 
              ? 'bg-green-500/20 text-green-400 border-green-500/50' 
              : 'bg-neon-purple/10 text-neon-purple border-neon-purple/30 hover:bg-neon-purple/20 hover:shadow-neon-purple'
            } flex items-center gap-2`}
          >
            {copied ? 'COPIED' : <><Copy size={12} /> COPY</>}
          </button>
        </div>
      </div>
      <div className={`w-full flex-1 glass-panel p-6 rounded-xl overflow-auto transition-all duration-500 border-neon-purple/20 ${isLoading ? 'animate-pulse bg-deep-space/80' : ''}`}>
        {text ? (
          <p className="text-slate-100 font-sans text-base md:text-lg leading-relaxed break-words">
            {displayText}
          </p>
        ) : (
          <div className="h-full flex flex-col items-center justify-center opacity-40">
            <div className="w-12 h-12 border-2 border-neon-purple/30 rounded-full flex items-center justify-center mb-4 relative">
               <div className="absolute inset-0 border-t-2 border-neon-purple animate-spin-slow rounded-full"></div>
               <div className="w-2 h-2 bg-neon-purple rounded-full animate-ping"></div>
            </div>
            <p className="text-neon-purple font-tech text-sm tracking-widest uppercase">Waiting for signal...</p>
          </div>
        )}
      </div>
      
      {/* Decorative Scanner Line */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-purple/50 shadow-[0_0_15px_#d946ef] animate-[scan_2s_ease-in-out_infinite]"></div>
      )}
    </div>
  );
};
export default OutputPanel;
