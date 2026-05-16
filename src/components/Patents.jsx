import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Lightbulb, CheckCircle2, Clock } from 'lucide-react';

const Patents = () => {
  return (
    <section id="patents" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Patents & Innovations
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {resumeData.patents.map((patent, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05, color: 'var(--accent-color)' }}>
                <Lightbulb size={120} />
              </div>
              
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                padding: '0.25rem 0.75rem', 
                borderRadius: '50px', 
                fontSize: '0.8rem', 
                fontWeight: 600,
                marginBottom: '1rem',
                background: patent.status === 'Granted' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(234, 179, 8, 0.1)',
                color: patent.status === 'Granted' ? '#4ade80' : '#facc15'
              }}>
                {patent.status === 'Granted' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                {patent.status}
              </div>

              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.4, position: 'relative', zIndex: 1 }}>
                {patent.title}
              </h3>

              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Date: {patent.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patents;
