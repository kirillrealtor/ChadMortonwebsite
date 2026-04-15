import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Media', href: '#media' },
    { name: 'Videos', href: '#videos' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '1rem 2rem' : '2rem 3rem',
        backgroundColor: scrolled ? 'rgba(26, 39, 68, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: scrolled ? '1px solid rgba(200, 169, 110, 0.3)' : 'none'
      }}
    >
      <div 
        style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          color: scrolled ? '#C8A96E' : 'white',
          letterSpacing: '0.1em'
        }}
      >
        Chad Morton
      </div>

      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              textDecoration: 'none',
              color: scrolled ? 'white' : 'white',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.8rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              transition: 'color 0.3s ease',
              opacity: scrolled ? 1 : 0.8
            }}
            onMouseOver={(e) => e.target.style.color = '#C8A96E'}
            onMouseOut={(e) => e.target.style.color = scrolled ? 'white' : 'white'}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
