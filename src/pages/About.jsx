import { Github, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl font-tech font-bold text-transparent bg-clip-text bg-gradient-to-r from-hologram to-neon-purple tracking-widest mb-4">
                ABOUT LINGUALAB
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-hologram to-transparent mx-auto"></div>
        </div>

        <div className="space-y-8">
            
            {/* Project Overview */}
            <div className="glass-panel p-8 rounded-xl border border-white/10">
                <h2 className="text-xl font-mono text-hologram tracking-widest mb-4">PROJECT OVERVIEW</h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                    LinguaLab is a "Text Intelligence Toolkit" designed to demonstrate modern React development practices. 
                    Unlike simple tutorial apps, it combines multiple utilities into a cohesive, scalable single-page application.
                </p>
                <p className="text-slate-300 leading-relaxed">
                    The project serves as a showcase for state management, API integration, and component-based architecture 
                    within a professional-grade UI environment.
                </p>
            </div>

            {/* Objectives */}
            <div className="glass-panel p-8 rounded-xl border border-white/10">
                <h2 className="text-xl font-mono text-neon-purple tracking-widest mb-4">CORE OBJECTIVES</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        'Mastering React Hooks (useState, useEffect, useCallback)',
                        'Implementing Client-Side Routing (React Router v6)',
                        'Consuming REST APIs (RapidAPI / Axios)',
                        'Building Responsive UIs with Tailwind CSS',
                        'Handling Asynchronous Data & Loading States',
                        'Creating Reusable Clean Components'
                    ].map((obj, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-purple mt-2"></span>
                            <span className="text-slate-300 text-sm">{obj}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Internship / Credits */}
            <div className="glass-panel p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-hologram/10 rounded-lg text-hologram">
                        <Github size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">Developed by Archit Bagayatkar</h3>
                        <p className="text-slate-400 text-sm mb-4">
                            This project was built as part of the QSkill Front-End Development Internship program logic & implementation tasks.
                        </p>
                        <a href="https://github.com/Architrb1795" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-hologram hover:text-white transition-colors">
                            VIEW ON GITHUB <ExternalLink size={12} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
