import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 z-50 border-b border-white/10 bg-deep-space/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-tech font-bold text-transparent bg-clip-text bg-gradient-to-r from-hologram to-neon-purple tracking-widest">
                            LINGUALAB
                        </Link>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => `font-mono text-sm tracking-widest hover:text-hologram transition-colors ${isActive ? 'text-hologram border-b border-hologram' : 'text-slate-400'}`}
                            >
                                HOME
                            </NavLink>
                            <NavLink 
                                to="/translator" 
                                className={({ isActive }) => `font-mono text-sm tracking-widest hover:text-hologram transition-colors ${isActive ? 'text-hologram border-b border-hologram' : 'text-slate-400'}`}
                            >
                                TRANSLATOR
                            </NavLink>
                            <NavLink 
                                to="/generator" 
                                className={({ isActive }) => `font-mono text-sm tracking-widest hover:text-hologram transition-colors ${isActive ? 'text-hologram border-b border-hologram' : 'text-slate-400'}`}
                            >
                                GENERATOR
                            </NavLink>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => `font-mono text-sm tracking-widest hover:text-hologram transition-colors ${isActive ? 'text-hologram border-b border-hologram' : 'text-slate-400'}`}
                            >
                                ABOUT
                            </NavLink>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button placeholder - can be interactive later */}
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
