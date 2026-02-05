import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-6 p-6 bg-red-500/10 rounded-full border border-red-500/30 animate-pulse">
            <AlertTriangle size={64} className="text-red-500" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-tech font-bold text-white mb-4">404</h1>
        
        <h2 className="text-xl md:text-2xl font-mono text-hologram tracking-widest mb-8">
            PAGE NOT FOUND
        </h2>
        
        <p className="text-slate-400 max-w-md mb-12">
            The neural link you are trying to access does not exist or has been severed. 
            Please return to the main hub.
        </p>
        
        <Link 
            to="/" 
            className="px-8 py-3 bg-hologram text-black font-bold font-mono tracking-widest rounded hover:bg-white transition-colors"
        >
            RETURN HOME
        </Link>
    </div>
  )
}

export default NotFound
