import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-deep-space text-white p-4 text-center">
           <div className="mb-6 p-6 bg-red-500/10 rounded-full border border-red-500/30 animate-pulse">
             <AlertTriangle size={64} className="text-red-500" />
           </div>
           <h1 className="text-4xl font-tech font-bold tracking-widest mb-4">SYSTEM CRITICAL FAILURE</h1>
           <p className="text-slate-400 max-w-md mb-8">
             An unexpected error has caused a neural link disruption. 
             {this.state.error?.message && <span className="block mt-2 text-xs font-mono text-red-400 bg-red-900/20 p-2 rounded">{this.state.error.message}</span>}
           </p>
           <button 
             onClick={() => window.location.reload()}
             className="flex items-center gap-2 px-8 py-3 bg-hologram text-black font-bold font-mono tracking-widest rounded hover:bg-white transition-colors"
           >
             <RefreshCw size={18} /> REBOOT SYSTEM
           </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
