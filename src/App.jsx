import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Publications from './components/Publications';
import Patents from './components/Patents';
import Gallery from './components/Gallery';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <>
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
            <a href="#about" style={{ color: 'var(--text-color)' }}>About</a>
            <a href="#experience" style={{ color: 'var(--text-color)' }}>Experience</a>
            <a href="#research" style={{ color: 'var(--text-color)' }}>Research</a>
            <a href="#publications" style={{ color: 'var(--text-color)' }}>Publications</a>
            <a href="#gallery" style={{ color: 'var(--text-color)' }}>Gallery</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Publications />
        <Patents />
        <Gallery />
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
