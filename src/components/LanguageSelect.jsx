import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages } from '../data/languages';

const LanguageSelect = ({ selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const selectedLang = languages.find(l => l.code === selected) || languages[0];

  // Close logs on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredLanguages = languages.filter(lang => 
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col mb-6 w-full group relative z-50" ref={dropdownRef}>
      <label className="text-hologram font-tech font-bold text-sm uppercase mb-2 tracking-[0.2em] flex items-center gap-2">
        <span className="w-2 h-2 bg-hologram/50 rounded-full animate-pulse"></span>
        Target Frequency
      </label>
      
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full glass-input p-4 rounded-xl font-sans text-lg flex items-center justify-between hover:border-hologram/30 focus:shadow-neon transition-all text-left"
        >
          <span className="flex items-center gap-3">
             <span className="text-2xl">{selectedLang.flag}</span>
             <span className="text-slate-200">{selectedLang.name}</span>
          </span>
          <ChevronDown className={`text-hologram/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-deep-space/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 max-h-[300px] flex flex-col"
            >
              {/* Search Bar */}
              <div className="p-3 border-b border-white/5 sticky top-0 bg-deep-space/95 z-10">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Search frequencies..." 
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-slate-200 focus:outline-none focus:border-hologram/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>

              {/* Language List */}
              <div className="overflow-y-auto flex-1 custom-scrollbar scroll-smooth">
                {filteredLanguages.length === 0 ? (
                  <div className="p-4 text-center text-slate-500 text-xs font-mono">NO FREQUENCY FOUND</div>
                ) : (
                  filteredLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onChange(lang.code);
                        setIsOpen(false);
                        setSearchTerm('');
                      }}
                      className={`w-full px-4 py-3 flex items-center justify-between hover:bg-hologram/10 transition-colors ${selected === lang.code ? 'bg-hologram/5' : ''}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl">{lang.flag}</span>
                        <span className={`text-sm ${selected === lang.code ? 'text-hologram font-bold' : 'text-slate-300'}`}>
                          {lang.name}
                        </span>
                      </span>
                      {selected === lang.code && <Check size={16} className="text-hologram" />}
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default LanguageSelect;
