import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <motion.div
        className="w-2.5 h-2.5 bg-hologram/40 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        className="w-2.5 h-2.5 bg-hologram/70 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
      />
      <motion.div
        className="w-2.5 h-2.5 bg-hologram rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
};
export default Loader;
