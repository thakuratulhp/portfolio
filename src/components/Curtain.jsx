import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Curtain = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The curtain stays down for a brief moment, then raises
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800); // 800ms delay before raising

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: '-100vh', 
            transition: { 
              duration: 1.2, 
              ease: [0.77, 0, 0.175, 1] // Custom sleek easing curve 
            } 
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#0f172a', // Dark elegant background
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          {/* Optional: We can show a logo or name in the center while the curtain is down */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.4 } }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit, sans-serif', letterSpacing: '2px', marginBottom: '0.5rem' }}>
              Atul Thakur<span style={{ color: 'var(--accent-color)' }}>.</span>
            </h1>
            <div style={{ height: '2px', width: '0%', background: 'var(--accent-color)', margin: '0 auto' }} 
                 className="loading-bar-animation"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Curtain;
