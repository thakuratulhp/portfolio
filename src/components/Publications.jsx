import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FileText } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Selected Publications
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {resumeData.publications.map((pub, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{ padding: '1rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-color)', flexShrink: 0 }}>
                <FileText size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', lineHeight: 1.4 }}>{pub.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  {pub.authors}
                </p>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', fontWeight: 600 }}>{pub.journal}</span>
                  <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', fontSize: '0.8rem' }}>{pub.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href={resumeData.personalInfo.links.googleScholar} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Publications on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
