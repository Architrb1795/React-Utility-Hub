import { Link } from 'react-router-dom';
import { Languages, Type, Cpu, Layout, ArrowRight } from 'lucide-react';

const Home = () => {
    return (
        <div className="flex flex-col gap-12 sm:gap-24 pb-12">
            
            {/* 1. HERO SECTION */}
            <section className="text-center flex flex-col items-center animate-float">
                <div className="w-px h-16 sm:h-24 bg-gradient-to-b from-transparent via-hologram/50 to-transparent mb-6 sm:mb-8"></div>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-tech font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-hologram via-white to-neon-purple drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] mb-4">
                    LINGUALAB
                </h1>
                <p className="text-hologram/80 font-mono tracking-[0.2em] uppercase text-sm md:text-base mb-8">
                    Translate • Generate • Experiment
                </p>
                <div className="max-w-2xl text-slate-400 mb-10 leading-relaxed font-light">
                    A productivity-focused web platform for developers, students, and language learners to experiment with text operations using modern web technologies.
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4">
                    <Link to="/translator" className="relative group overflow-hidden px-8 py-3 rounded-md bg-hologram/10 border border-hologram/30 hover:border-hologram transition-all">
                        <div className="absolute inset-0 w-0 bg-hologram/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative font-mono font-bold tracking-widest text-hologram flex items-center gap-2 justify-center">
                            TRY TRANSLATOR <ArrowRight size={16} />
                        </span>
                    </Link>
                    <Link to="/generator" className="relative group overflow-hidden px-8 py-3 rounded-md bg-white/5 border border-white/10 hover:border-white/30 transition-all">
                        <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                        <span className="relative font-mono font-bold tracking-widest text-slate-300 group-hover:text-white flex items-center gap-2 justify-center">
                            GENERATE STRINGS <Type size={16} />
                        </span>
                    </Link>
                </div>
            </section>

            {/* 2. FEATURES OVERVIEW */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                <Link to="/translator" className="group glass-panel p-8 rounded-xl border border-white/10 hover:border-hologram/50 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-hologram/10 flex items-center justify-center text-hologram mb-4 group-hover:scale-110 transition-transform">
                        <Languages size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-tech tracking-wider text-white mb-2 group-hover:text-hologram transition-colors">TRANSLATOR</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Instant text translation powered by RapidAPI. Supports multiple languages with auto-detection.
                    </p>
                    <span className="text-xs font-mono text-hologram flex items-center gap-1">OPEN TOOL <ArrowRight size={12} /></span>
                </Link>

                <Link to="/generator" className="group glass-panel p-8 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple mb-4 group-hover:scale-110 transition-transform">
                        <Type size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-tech tracking-wider text-white mb-2 group-hover:text-neon-purple transition-colors">GENERATOR</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Generate secure, random string tokens and passwords with customizable options.
                    </p>
                    <span className="text-xs font-mono text-neon-purple flex items-center gap-1">OPEN TOOL <ArrowRight size={12} /></span>
                </Link>

                <div className="group glass-panel p-8 rounded-xl border border-white/10 hover:border-emerald-500/50 transition-all hover:-translate-y-1 cursor-default">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold font-tech tracking-wider text-white mb-2 group-hover:text-emerald-500 transition-colors">SPA ROUTING</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Seamless client-side navigation without page reloads, demonstrating React Router DOM mastery.
                    </p>
                    <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">CORE FEATURE</span>
                </div>
            </section>

            {/* 3. TECH STACK & LEARNING OUTCOMES */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                
                {/* Tech Stack */}
                <div className="glass-panel p-8 rounded-xl border border-white/10">
                    <h3 className="text-lg font-mono tracking-widest text-slate-300 mb-6 flex items-center gap-2">
                        <Cpu size={18} /> TECH STACK
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {['React 18', 'Vite', 'Tailwind CSS', 'React Router', 'RapidAPI', 'Axios'].map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-slate-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Learning Outcomes */}
                <div className="glass-panel p-8 rounded-xl border border-white/10">
                    <h3 className="text-lg font-mono tracking-widest text-slate-300 mb-6 flex items-center gap-2">
                        <Layout size={18} /> LEARNING OUTCOMES
                    </h3>
                    <ul className="space-y-3">
                        {[
                            'React Hooks (useState, useEffect, useCallback)',
                            'Third-party API Integration & Error Handling',
                            'Modern CSS Architecture with Tailwind',
                            'Client-Side Routing & Navigation Logic'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                <span className="text-hologram mt-1">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Home;
