import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-deep-space relative selection:bg-hologram selection:text-black font-sans text-white overflow-x-hidden">
        
        {/* Global Background Ambience */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-hologram/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        </div>

        <Navbar />

        <main className="flex-grow pt-24 px-4 pb-12 relative z-10 container mx-auto max-w-7xl">
          <AppRoutes />
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  )
}

export default App
