import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { BookOpen, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Research Interests</h3>
            </div>
            <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)' }}>
              {resumeData.personalInfo.researchInterests.map((interest, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{interest}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                <BookOpen size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Education</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <h4 style={{ color: 'var(--text-color)', fontSize: '1.1rem' }}>{edu.degree}</h4>
                  <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{edu.institution}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {edu.year} {edu.details ? `• ${edu.details}` : ''}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Metrics</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, className: 'text-gradient' }}>{resumeData.personalInfo.metrics.citations}</div>
                <div style={{ color: 'var(--text-muted)' }}>Citations</div>
              </div>
              <div style={{ display: 'flex', gap: '2rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{resumeData.personalInfo.metrics.hIndex}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>h-index</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{resumeData.personalInfo.metrics.i10Index}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>i10-index</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
