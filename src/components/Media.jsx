import { motion } from 'framer-motion';

const Media = () => {
  const mediaOutlets = [
    { name: "HGTV", detail: "Featured on House Hunters" },
    { name: "American Dream", detail: "TV Show Co-Host" },
    { name: "Fox Business", detail: "Real Estate Expert Feature" },
    { name: "Real Producers", detail: "April 2026 Cover Story" }
  ];

  return (
    <section id="media" className="section-padding" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="accent-label">Press & Recognition</span>
          <h2 style={{ fontSize: '3rem', color: '#1A2744', marginTop: '1rem' }}>A Name the Industry Knows</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {mediaOutlets.map((outlet, index) => (
            <motion.div
              key={outlet.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="luxury-card"
              style={{ textAlign: 'center', transition: 'transform 0.3s ease' }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 style={{ color: '#1A2744', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{outlet.name}</h3>
              <p style={{ color: '#C8A96E', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {outlet.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: '2.5rem', 
            color: '#C8A96E', 
            fontStyle: 'italic',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.3
          }}>
            "Placing people in homes that they love is the most fulfilling part. There is nothing like that feeling."
          </p>
          <p className="accent-label" style={{ marginTop: '1.5rem', color: '#1A2744' }}>— Chad Morton</p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <motion.a 
            href="https://www.foxbusiness.com/real-estate/how-to-buy-a-home-competition-stiff" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-gold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Fox Business Feature
          </motion.a>
          
          <motion.a 
            href="/assets/magazine-feature.pdf" 
            target="_blank"
            className="btn-gold"
            style={{ backgroundColor: '#1A2744' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read Real Producers Story
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Media;
