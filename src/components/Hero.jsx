import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { Typewriter } from 'react-simple-typewriter';
import { Tilt } from 'react-tilt';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: '1 1 500px' }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{ display: 'inline-block', padding: '0.5rem 1rem', borderRadius: '50px', background: 'var(--card-bg)', border: '1px solid var(--accent-color)', color: 'var(--accent-color)', marginBottom: '1.5rem', fontWeight: 600, fontSize: '0.9rem' }}
              className="pulse-glow"
            >
              Top 2% Researcher by Stanford-Elsevier
            </motion.div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              Hi, I'm <br />
              <span className="text-gradient">{resumeData.personalInfo.name}</span>
            </h1>
            
            <h2 style={{ fontSize: '1.8rem', fontWeight: 500, color: 'var(--text-color)', marginBottom: '2rem', height: '40px' }}>
              <span style={{ color: 'var(--text-muted)' }}>I am a </span>
              <span className="text-gradient" style={{ fontWeight: 'bold' }}>
                <Typewriter
                  words={resumeData.personalInfo.affiliations.map(a => a.split(',')[0])}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={2000}
                />
              </span>
            </h2>
            
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
              {resumeData.personalInfo.summary}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`mailto:${resumeData.personalInfo.email.split(' / ')[0]}`} className="btn btn-primary">
                <Mail size={18} />
                Contact Me
              </a>
              <a href={resumeData.personalInfo.links.googleScholar} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <ExternalLink size={18} />
                Google Scholar
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', flex: '1 1 400px' }}
          >
            <Tilt options={{ max: 15, scale: 1.05, speed: 400, glare: true, 'max-glare': 0.2 }}>
              <div className="floating" style={{ position: 'relative', width: '100%', maxWidth: '400px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '4px solid white' }}>
                <img src={`${import.meta.env.BASE_URL}atul_dp.jpeg`} alt="Prof. Atul Thakur" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </Tilt>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
