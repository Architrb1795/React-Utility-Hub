const Footer = () => {
    return (
        <footer className="w-full border-t border-white/10 bg-black/20 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <p className="text-slate-500 font-mono text-xs tracking-[0.2em] mb-4">
                    REACT UTILITY HUB // V1.0.0
                </p>
                
                <div className="flex gap-6 mb-4">
                     <span className="text-slate-600 font-tech text-xs border border-slate-700 px-2 py-1 rounded">REACT</span>
                     <span className="text-slate-600 font-tech text-xs border border-slate-700 px-2 py-1 rounded">TAILWIND</span>
                     <span className="text-slate-600 font-tech text-xs border border-slate-700 px-2 py-1 rounded">RAPIDAPI</span>
                </div>

                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} LinguaLab. Built by Archit Bagayatkar.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
