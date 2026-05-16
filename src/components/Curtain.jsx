import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Curtain = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [startSplit, setStartSplit] = useState(false);

  useEffect(() => {
    // 1. Text animates first.
    // 2. Then the text fades out and the curtain splits.
    const textTimer = setTimeout(() => {
      setStartSplit(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2200); // Wait for the split animation to finish

    return () => {
      clearTimeout(textTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Framer motion variants
  const leftCurtainVariants = {
    initial: { x: 0 },
    split: { 
      x: '-100vw', 
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } 
    }
  };

  const rightCurtainVariants = {
    initial: { x: 0 },
    split: { 
      x: '100vw', 
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } 
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          pointerEvents: 'none', // Prevents blocking clicks after it fades
          display: 'flex'
        }}>
          
          {/* Left Half */}
          <motion.div
            variants={leftCurtainVariants}
            initial="initial"
            animate={startSplit ? "split" : "initial"}
            style={{
              width: '50vw',
              height: '100vh',
              background: 'linear-gradient(135deg, #fdfbfb 0%, #f3f4f6 100%)',
              borderRight: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '10px 0 30px rgba(0,0,0,0.05)',
              position: 'relative',
              zIndex: 2
            }}
          />

          {/* Right Half */}
          <motion.div
            variants={rightCurtainVariants}
            initial="initial"
            animate={startSplit ? "split" : "initial"}
            style={{
              width: '50vw',
              height: '100vh',
              background: 'linear-gradient(135deg, #f3f4f6 0%, #fdfbfb 100%)',
              borderLeft: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.05)',
              position: 'relative',
              zIndex: 2
            }}
          />

          {/* Center Logo/Text Overlay */}
          <AnimatePresence>
            {!startSplit && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)', transition: { duration: 0.6, ease: 'easeInOut' } }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  zIndex: 3,
                  color: '#1e293b'
                }}
              >
                <h1 style={{ 
                  fontSize: '3rem', 
                  fontWeight: 800, 
                  fontFamily: 'Outfit, sans-serif', 
                  letterSpacing: '4px',
                  textShadow: '0 0 20px rgba(14, 165, 233, 0.5)'
                }}>
                  Atul Thakur<span style={{ color: 'var(--accent-color)' }}>.</span>
                </h1>
                
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  style={{ height: '3px', background: 'var(--accent-color)', margin: '10px auto 0', borderRadius: '2px' }} 
                />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      )}
    </AnimatePresence>
  );
};

export default Curtain;
