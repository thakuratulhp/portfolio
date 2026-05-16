import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Publications from './components/Publications';
import Patents from './components/Patents';
import Gallery from './components/Gallery';
import Curtain from './components/Curtain';
import { resumeData } from './data/resumeData';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'research', 'publications', 'gallery'];
      let current = 'hero';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <>
      <Curtain />
      
      {/* Background Orbs */}
      <div className="bg-gradient-orb bg-gradient-1 floating"></div>
      <div className="bg-gradient-orb bg-gradient-2 floating" style={{ animationDelay: '-3s' }}></div>

      {/* Navigation */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        zIndex: 100, 
        background: 'var(--nav-bg)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--card-border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>
            Atul Thakur<span className="text-gradient">.</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                style={{ 
                  color: activeSection === link.id ? 'var(--accent-color)' : 'var(--text-color)',
                  fontWeight: activeSection === link.id ? '600' : '400',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span style={{ position: 'absolute', bottom: '-5px', left: 0, right: 0, height: '2px', background: 'var(--accent-color)', borderRadius: '2px' }} />
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="research"><Research /></div>
        <div id="publications"><Publications /></div>
        <div id="patents"><Patents /></div>
        <div id="gallery"><Gallery /></div>
      </main>

      {/* Footer */}
      <footer style={{ 
        borderTop: '1px solid var(--card-border)', 
        padding: '3rem 0', 
        textAlign: 'center',
        marginTop: '4rem'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>{resumeData.personalInfo.name}</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>{resumeData.personalInfo.email}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} All rights reserved. Designed for Academic Excellence.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
