import { useState, useEffect } from 'react'
import axios from 'axios'
import InputPanel from '../components/InputPanel'
import OutputPanel from '../components/OutputPanel'
import LanguageSelect from '../components/LanguageSelect'
import ActionButtons from '../components/ActionButtons'
import HistoryPanel from '../components/HistoryPanel'

function Translator() {
  const [inputText, setInputText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [targetLanguage, setTargetLanguage] = useState('en')
  const [detectedLanguage, setDetectedLanguage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [history, setHistory] = useState([])

  // Load History & API Key on Mount
  useEffect(() => {
    const key = import.meta.env.VITE_RAPIDAPI_KEY
    if (key) setApiKey(key)
    
    const savedHistory = localStorage.getItem('babel_history');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, [])

  // Save History on Change
  useEffect(() => {
    localStorage.setItem('babel_history', JSON.stringify(history));
  }, [history]);

  const addToHistory = (original, translated, lang, detected) => {
    const newItem = {
      id: Date.now(),
      original,
      translated,
      lang: lang.toUpperCase(),
      detected: detected,
      timestamp: new Date().toISOString()
    };
    setHistory(prev => [newItem, ...prev].slice(0, 50));
  };

  const handleRestore = (item) => {
    setInputText(item.original);
    setTranslatedText(item.translated);
    setTargetLanguage(item.lang.toLowerCase());
    setDetectedLanguage(item.detected || null);
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('INPUT REQUIRED: Please enter text to initiate translation sequence.');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setIsLoading(true);
    setError('');
    setTranslatedText('');
    setDetectedLanguage(null);

    try {
      if (!apiKey) {
        // Simulation Mode
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        const simulatedTranslation = `[SIMULATED ${targetLanguage.toUpperCase()}] ${inputText.split('').reverse().join('')}`; 
        
        let simDetected = 'en'; 
        if (inputText.toLowerCase().includes('hola')) simDetected = 'es';
        if (inputText.toLowerCase().includes('bonjour')) simDetected = 'fr';
        if (inputText.toLowerCase().includes('konnichiwa')) simDetected = 'ja';

        setTranslatedText(simulatedTranslation);
        setDetectedLanguage(simDetected); 
        addToHistory(inputText, simulatedTranslation, targetLanguage, simDetected);

      } else {
        // Real API Call via Proxy/Wrapper
        const options = {
          method: 'POST',
          url: 'https://google-translate113.p.rapidapi.com/api/v1/translator/text',
          headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPIDAPI_HOST || 'google-translate113.p.rapidapi.com'
          },
          data: {
            text: inputText,
            to: targetLanguage,
            from: 'auto'
          }
        };

        const response = await axios.request(options);
        const translated = response.data?.trans || "TRANSLATION SEQUENCE FAILED.";
        const detected = response.data?.source_language_code || 'unk'; 
        
        setTranslatedText(translated);
        setDetectedLanguage(detected);
        addToHistory(inputText, translated, targetLanguage, detected);
      }
    } catch (err) {
      console.error(err);
      setError('CONNECTION FAILURE: Unable to reach translation mainframe. Check network status.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleClear = () => {
    setInputText('');
    setTranslatedText('');
    setError('');
    setDetectedLanguage(null);
  }

  return (
    <div className="relative">
      {/* History Panel Overlay */}
      <HistoryPanel history={history} onRestore={handleRestore} onClearBox={() => setHistory([])} />

      <div className="text-center mb-8">
         <h2 className="text-3xl font-bold font-tech text-transparent bg-clip-text bg-gradient-to-r from-hologram to-neon-purple tracking-widest">
            TEXT TRANSLATOR
         </h2>
         <p className="text-slate-400 font-mono text-sm mt-2">Convert English to your language</p>
         
         {!apiKey && (
            <div className="mt-4 inline-block font-mono text-[10px] tracking-widest text-amber-500 bg-amber-900/10 px-4 py-2 rounded-full border border-amber-500/20 backdrop-blur-md">
              ⚠ SIMULATION MODE ACTIVE
            </div>
          )}
      </div>

      <div className="glass-panel p-1 rounded-2xl relative border-t border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hologram/50 to-transparent"></div>
        
        <div className="bg-deep-space/80 backdrop-blur-xl rounded-xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Input & Controls */}
          <div className="flex flex-col gap-6">
            <div className="flex-1 min-h-[300px] flex flex-col">
              <InputPanel 
                text={inputText} 
                setText={setInputText} 
                onEnter={handleTranslate} 
                detectedLanguage={detectedLanguage} 
              />
            </div>
            
            <div className="space-y-6 pt-6 border-t border-white/5">
              <LanguageSelect selected={targetLanguage} onChange={setTargetLanguage} />
              <ActionButtons onTranslate={handleTranslate} isLoading={isLoading} onClear={handleClear} />
              {error && (
                 <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm font-mono flex items-center justify-center gap-2 animate-pulse">
                   <span>⚠ SIGNAL LOST:</span> {error}
                 </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Output */}
          <div className="flex flex-col min-h-[400px] lg:min-h-auto border-l-0 lg:border-l border-white/5 lg:pl-12">
             <OutputPanel text={translatedText} isLoading={isLoading} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Translator
