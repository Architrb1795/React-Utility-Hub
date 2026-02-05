import { useState, useCallback } from 'react';

const CHARSET = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  special: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

const useRandomString = () => {
  const [generatedString, setGeneratedString] = useState('');
  const [history, setHistory] = useState([]);

  const generateString = useCallback(({ length, options }) => {
    let chars = '';
    
    if (options.uppercase) chars += CHARSET.uppercase;
    if (options.lowercase) chars += CHARSET.lowercase;
    if (options.numbers) chars += CHARSET.numbers;
    if (options.special) chars += CHARSET.special;

    // Fallback if nothing selected
    if (chars === '') chars = CHARSET.lowercase; 

    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setGeneratedString(result);
    setHistory(prev => [result, ...prev].slice(0, 10)); // Keep last 10
    return result;
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { generatedString, history, generateString, clearHistory };
};

export default useRandomString;
