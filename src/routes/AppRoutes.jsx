import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Translator from '../pages/Translator';
import StringGenerator from '../pages/StringGenerator';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/translator" element={<Translator />} />
      <Route path="/generator" element={<StringGenerator />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
