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
          Experience Timeline
        </motion.h2>

        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto', padding: '2rem 0' }}>
          {/* Vertical central line for timeline */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            bottom: 0,
            width: '4px',
            background: 'linear-gradient(to bottom, var(--accent-color), var(--accent-secondary))',
            opacity: 0.2,
            borderRadius: '2px'
          }} className="timeline-center-line"></div>

          {resumeData.experience.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  marginBottom: '4rem',
                  width: '100%'
                }}
              >
                {/* Timeline node in the center */}
                <motion.div 
                  className="timeline-node"
                  whileInView={{ scale: [1, 1.5, 1], backgroundColor: 'var(--accent-color)', boxShadow: '0 0 20px var(--accent-glow)' }}
                  viewport={{ once: true, margin: "-100px" }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '20px',
                    transform: 'translate(-50%, -50%)',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--bg-color)',
                    border: '4px solid var(--accent-color)',
                    zIndex: 10
                  }}
                ></motion.div>

                <div style={{ width: '45%' }}>
                  <div className="glass-panel" style={{ padding: '2rem', position: 'relative' }}>
                    {/* Arrow pointing to center */}
                    <div style={{
                      content: '""',
                      position: 'absolute',
                      top: '20px',
                      [isLeft ? 'right' : 'left']: '-10px',
                      borderStyle: 'solid',
                      borderWidth: isLeft ? '10px 0 10px 10px' : '10px 10px 10px 0',
                      borderColor: `transparent ${isLeft ? 'var(--card-bg)' : 'transparent'} transparent ${isLeft ? 'transparent' : 'var(--card-bg)'}`,
                      display: 'block',
                      width: 0,
                      zIndex: 1
                    }}></div>

                    <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>{exp.role}</h3>
                    <div style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem', marginBottom: '1rem' }}>
                      {exp.institution}
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(249, 115, 22, 0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 500 }}>
                      <Briefcase size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
