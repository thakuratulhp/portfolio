import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  // We have 88 photos based on the files processed.
  const photos = Array.from({ length: 88 }, (_, i) => `/photos/photo_${i + 1}.jpeg`);

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

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {photos.map((photoUrl, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 5) * 0.1 }}
              style={{ padding: '0.5rem', overflow: 'hidden' }}
            >
              <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%' }}>
                <img 
                  src={photoUrl} 
                  alt={`Gallery Image ${index + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    aspectRatio: '1 / 1',
                    display: 'block',
                    transition: 'transform 0.5s ease'
                  }} 
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
