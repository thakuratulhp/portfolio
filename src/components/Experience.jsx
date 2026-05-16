import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical line for timeline */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-color), var(--accent-secondary))',
            opacity: 0.3
          }}></div>

          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '3rem'
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--bg-color)',
                border: '4px solid var(--accent-color)',
                boxShadow: '0 0 10px var(--accent-glow)'
              }}></div>

              <div className="glass-panel" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{exp.role}</h3>
                <div style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '0.5rem' }}>
                  {exp.institution}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Briefcase size={14} />
                  {exp.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
