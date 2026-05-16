import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // We have 88 photos based on the files processed.
  const photos = Array.from({ length: 88 }, (_, i) => `${import.meta.env.BASE_URL}photos/photo_${i + 1}.jpeg`);

  return (
    <section id="gallery" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Photo Gallery
        </motion.h2>

        <div className="masonry-grid">
          {photos.map((photoUrl, index) => (
            <motion.div 
              key={index}
              className="masonry-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
            >
              <div className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={photoUrl} 
                    alt={`Gallery Image ${index + 1}`} 
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
                    }} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                      if (e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      if (e.currentTarget.nextElementSibling) e.currentTarget.nextElementSibling.style.opacity = '0';
                    }}
                  />
                  {/* Overlay Gradient for premium feel */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                    opacity: 0,
                    pointerEvents: 'none',
                    transition: 'opacity 0.4s ease'
                  }}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
