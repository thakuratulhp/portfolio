import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Microscope } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Research Projects
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>
                <Microscope size={32} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', flexGrow: 1 }}>{project.title}</h3>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', marginTop: 'auto' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Funded by</div>
                <div style={{ fontWeight: 600, color: 'var(--text-color)', marginBottom: '0.5rem' }}>{project.funder}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)' }}>{project.duration}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
