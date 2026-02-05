import { useState, useEffect } from 'react'
import useRandomString from '../hooks/useRandomString'
import { Copy, RefreshCw, Trash2, History } from 'lucide-react'

const StringGenerator = () => {
  const { generatedString, history, generateString, clearHistory } = useRandomString();
  
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: false
  });

  const [copied, setCopied] = useState(false);

  const [error, setError] = useState('');

  const handleGenerate = () => {
    // Validation: Check if at least one option is selected
    if (!Object.values(options).some(Boolean)) {
      setError('CONFIGURATION ERROR: Select at least one character type.');
      setTimeout(() => setError(''), 3000);
      return;
    }
    
    setError('');
    generateString({ length, options });
    setCopied(false);
  };

  // Auto-generate on mount
  useEffect(() => {
    handleGenerate();
  }, []); // Run once on mount

  const handleCopy = () => {
    if (!generatedString) return;
    navigator.clipboard.writeText(generatedString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleOption = (key) => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
         <h2 className="text-3xl font-bold font-tech text-transparent bg-clip-text bg-gradient-to-r from-hologram to-neon-purple tracking-widest">
            STRING GENERATOR
         </h2>
         <p className="text-slate-400 font-mono text-sm mt-2">Generate strong, random passwords & tokens</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Controls Column */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-panel p-6 rounded-xl border border-white/10">
            <h3 className="text-hologram font-mono text-sm tracking-widest mb-4 border-b border-white/10 pb-2">CONFIGURATION</h3>
            
            {/* Length Control */}
            <div className="mb-6">
              <label className="block text-slate-300 text-xs mb-2 flex justify-between">
                <span>LENGTH</span>
                <span className="text-hologram font-bold">{length}</span>
              </label>
              <input 
                type="range" 
                min="6" 
                max="64" 
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-hologram h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              {Object.keys(options).map(key => (
                <label key={key} className="flex items-center space-x-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    checked={options[key]} 
                    onChange={() => toggleOption(key)}
                    className="w-4 h-4 rounded border-slate-600 text-hologram focus:ring-hologram bg-transparent transition-colors"
                  />
                  <span className="text-slate-300 text-sm capitalize group-hover:text-white transition-colors">
                    {key}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-8">
              {error && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono text-center animate-pulse">
                  {error}
                </div>
              )}

              <button 
                onClick={handleGenerate}
                className="w-full py-3 bg-gradient-to-r from-hologram to-cyan-600 text-black font-bold font-mono tracking-widest rounded-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all active:scale-95"
              >
                GENERATE
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-xl border border-white/10">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                <h3 className="text-hologram font-mono text-sm tracking-widest flex items-center gap-2">
                    <History size={14} /> RECENT
                </h3>
                <button onClick={clearHistory} className="text-slate-500 hover:text-red-400 transition-colors">
                    <Trash2 size={14} />
                </button>
            </div>
            <ul className="space-y-2 max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                {history.map((str, i) => (
                    <li key={i} className="text-xs font-mono text-slate-400 bg-black/20 p-2 rounded truncate border border-transparent hover:border-hologram/30 hover:text-hologram transition-all cursor-pointer" onClick={() => {
                        navigator.clipboard.writeText(str);
                        // Optional: show toast
                    }}>
                        {str}
                    </li>
                ))}
                {history.length === 0 && <li className="text-slate-600 text-xs italic">No history yet...</li>}
            </ul>
          </div>
        </div>

        {/* Output Column */}
        <div className="md:col-span-2">
            <div className="glass-panel p-1 rounded-2xl relative overflow-hidden h-full min-h-[300px] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hologram/50 to-transparent"></div>
                <div className="bg-deep-space/80 backdrop-blur-xl rounded-xl p-8 h-full flex flex-col items-center justify-center relative">
                    
                    <div className="w-full mb-8 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-hologram to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-black/60 border border-white/10 rounded-lg p-6 min-h-[120px] flex items-center justify-center break-all">
                             <span className="text-3xl md:text-4xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-wider">
                                {generatedString}
                             </span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button 
                            onClick={handleCopy}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm tracking-widest border transition-all ${copied ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'}`}
                        >
                            {copied ? 'COPIED!' : 'COPY'} <Copy size={16} />
                        </button>
                        <button 
                            onClick={handleGenerate}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm tracking-widest bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all hover:rotate-180 duration-500"
                            title="Regenerate"
                        >
                             <RefreshCw size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default StringGenerator
