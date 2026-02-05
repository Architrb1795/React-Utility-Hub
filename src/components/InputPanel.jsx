import React from 'react';
import { getLanguageName } from '../data/languages';

const InputPanel = ({ text, setText, limit = 500, onEnter, detectedLanguage }) => {
  const isSignalActive = text.length > 0;

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col group">
      <div className="flex justify-between items-center mb-3">
        <label className={`font-tech font-bold tracking-[0.15em] text-sm uppercase flex items-center gap-2 transition-colors duration-300 ${isSignalActive ? 'text-hologram' : 'text-slate-500'}`}>
          <span className={`w-1.5 h-1.5 rotate-45 transition-all duration-300 ${isSignalActive ? 'bg-hologram shadow-[0_0_10px_#22d3ee] scale-125' : 'bg-slate-600'}`}></span>
          Origin Transmission
        </label>
        
        <div className="flex items-center gap-3">
           {/* Detected Language Chip */}
           {detectedLanguage && (
             <span className="text-[10px] font-mono transition-all duration-500 animate-pulse text-green-400 bg-green-900/20 px-2 py-0.5 rounded border border-green-500/30">
               SIGNAL IDENTIFIED: {getLanguageName(detectedLanguage).toUpperCase()}
             </span>
           )}
           
           {!detectedLanguage && (
             <span className={`text-[10px] font-mono transition-opacity duration-300 ${isSignalActive ? 'opacity-100 text-hologram animate-pulse' : 'opacity-0'}`}>
               SIGNAL DETECTED
             </span>
           )}

           <span className="font-tech text-hologram/60 text-xs tracking-wider border border-hologram/20 px-2 py-0.5 rounded backdrop-blur-sm">
             {text.length} <span className="text-slate-500">/</span> {limit}
           </span>
        </div>
      </div>
      
      <div className="relative flex-1">
        <textarea
          className={`w-full h-full glass-input p-6 rounded-xl resize-none font-sans text-base md:text-lg leading-relaxed shadow-inner transition-all duration-500 ${isSignalActive ? 'border-hologram/30 shadow-[inset_0_0_20px_rgba(34,211,238,0.05)] text-slate-100' : 'border-white/5 text-slate-400'}`}
          placeholder="Enter encrypted data stream... [Ctrl + Enter to Transmit]"
          value={text}
          onChange={(e) => setText(e.target.value.slice(0, limit))}
          onKeyDown={handleKeyDown}
        />
        {/* Corner Accents */}
        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isSignalActive ? 'border-hologram/50' : 'border-slate-700/50'} rounded-br-lg pointer-events-none transition-colors duration-500`}></div>
        <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isSignalActive ? 'border-hologram/50' : 'border-slate-700/50'} rounded-tl-lg pointer-events-none transition-colors duration-500`}></div>
      </div>
    </div>
  );
};
export default InputPanel;
