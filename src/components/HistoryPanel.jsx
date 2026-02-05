import React, { useState } from 'react';
import { History, Clock, RotateCcw, Trash2, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HistoryPanel = ({ history, onRestore, onClearBox }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-deep-space/90 border-y border-r border-hologram/30 p-2 rounded-r-xl shadow-neon transition-all hover:pl-4 hover:border-hologram ${isOpen ? 'translate-x-[320px]' : 'translate-x-0'}`}
        title="Transmission Logs"
      >
        {isOpen ? <ChevronLeft className="text-hologram" /> : <History className="text-hologram" />}
      </button>

      {/* Slide-out Panel */}
      <div className={`fixed inset-y-0 left-0 w-80 bg-deep-space/95 backdrop-blur-xl border-r border-hologram/20 transform transition-transform duration-500 z-40 p-6 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <h2 className="text-hologram font-tech font-bold text-xl tracking-widest uppercase flex items-center gap-2">
            <Clock size={20} /> LOGS
          </h2>
          <button onClick={onClearBox} className="text-red-400 hover:text-red-300 transition-colors" title="Purge Logs">
            <Trash2 size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {history.length === 0 ? (
             <div className="text-slate-500 font-mono text-xs text-center mt-10 italic">
               NO TRANSMISSION DATA FOUND
             </div>
          ) : (
            history.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/5 hover:border-hologram/30 rounded-lg p-3 group transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[10px] font-mono text-slate-500">{new Date(item.timestamp).toLocaleTimeString()}</span>
                   <span className="text-[10px] font-tech text-hologram/70 border border-hologram/20 px-1 rounded">{item.lang}</span>
                </div>
                <p className="text-slate-300 text-sm font-sans line-clamp-2 mb-3 opacity-80">{item.original}</p>
                <button 
                  onClick={() => onRestore(item)}
                  className="w-full py-1.5 flex items-center justify-center gap-2 text-xs font-tech uppercase tracking-wider bg-hologram/10 text-hologram hover:bg-hologram/20 rounded transition-colors"
                >
                  <RotateCcw size={12} /> Restore Signal
                </button>
              </motion.div>
            ))
          )}
        </div>

        <div className="mt-4 pt-4 border-t border-white/10 text-[10px] font-mono text-slate-600 text-center">
           STORAGE CAPACITY: {history.length}/50
        </div>
      </div>
    </>
  );
};

export default HistoryPanel;
