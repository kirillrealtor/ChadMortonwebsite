const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1A2744', color: 'white', padding: '5rem 0 2rem' }}>
      <div className="container">
        {/* Gold Accent Line */}
        <div style={{ height: '1px', backgroundColor: '#C8A96E', width: '100%', marginBottom: '4rem', opacity: 0.5 }}></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#C8A96E', marginBottom: '1.5rem', letterSpacing: '0.1em' }}>
              CHAD MORTON
            </h3>
            <p style={{ opacity: 0.7, fontSize: '1rem', maxWidth: '300px' }}>
              Washington DC's agent who goes all gas, no brakes. Delivering excellence for over 20 years.
            </p>
          </div>

          <div>
            <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#C8A96E' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Home</a></li>
              <li><a href="#about" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>About</a></li>
              <li><a href="#media" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Media</a></li>
              <li><a href="#videos" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Videos</a></li>
              <li><a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.8 }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', marginBottom: '1.5rem', color: '#C8A96E' }}>Contact Info</h4>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>137 National Plaza, Suite 313</p>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>National Harbor, MD 20745</p>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>302-373-5929</p>
            <p style={{ opacity: 0.8 }}>chadmortonrealtor@gmail.com</p>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', opacity: 0.6, fontSize: '0.85rem' }}>
          <p>© {new Date().getFullYear()} Chad Morton | Maverick Realty. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
