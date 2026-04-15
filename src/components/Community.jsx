import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: '#F9F7F4' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="accent-label">Giving Back</span>
          <h2 style={{ fontSize: '3rem', color: '#1A2744', marginTop: '1rem', marginBottom: '2rem' }}>
            Investing in People, Not Just Properties.
          </h2>
          <div style={{ maxWidth: '850px', margin: '0 auto', borderTop: '1px solid #C8A96E', paddingTop: '2.5rem' }}>
            <p style={{ fontSize: '1.2rem', color: '#2C2C2C', lineHeight: 1.8 }}>
              Chad partners with Washington Adventist University to support motivational and educational forums 
              for the next generation. A longtime mentor and educator at heart, he believes real success 
              is measured by what you give back — not just what you close.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
