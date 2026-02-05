import React from 'react';
import Loader from './Loader';
import { Send, Trash2 } from 'lucide-react';

const ActionButtons = ({ onTranslate, isLoading, onClear }) => {
  return (
    <div className="flex gap-4 items-center mt-6 w-full">
      <button 
        onClick={onTranslate}
        disabled={isLoading}
        className="relative overflow-hidden group flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-tech font-bold tracking-[0.2em] text-lg uppercase py-4 rounded-xl shadow-neon transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale disabled:pointer-events-none hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
      >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none"></div>
        
        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
        <div className="flex items-center justify-center gap-3 relative z-10">
           {isLoading ? <Loader /> : <>
             <span>Initiate Sequence</span>
             <Send size={18} className="group-hover:translate-x-3 group-hover:-translate-y-1 transition-transform duration-300" />
           </>}
        </div>
      </button>

      <button 
        onClick={onClear}
        className="px-5 py-4 rounded-xl glass-panel text-slate-400 hover:text-red-400 hover:border-red-500/30 transition-all hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] flex items-center justify-center"
        title="Purge Data"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};
export default ActionButtons;
