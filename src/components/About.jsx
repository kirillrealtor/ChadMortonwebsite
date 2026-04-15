import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem', alignItems: 'center' }}>
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div 
            style={{ 
              position: 'absolute', 
              top: '-20px', 
              left: '-20px', 
              width: '100%', 
              height: '100%', 
              border: '2px solid #C8A96E',
              zIndex: 0
            }} 
          />
          <img 
            src="/assets/chad-morton-profile.jpg" 
            alt="Chad Morton" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              position: 'relative', 
              zIndex: 1,
              filter: 'grayscale(20%)',
              display: 'block'
            }} 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="accent-label" style={{ marginBottom: '1rem', display: 'block' }}>The Professional</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#1A2744', lineHeight: 1.2 }}>
            More Than an Agent. <br />
            <span style={{ color: '#C8A96E' }}>A Force.</span>
          </h2>
          
          <div style={{ color: '#4A4A4A' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Chad Morton doesn't do average. Born in Allentown, PA and raised in Pittsburgh, Chad built his foundation 
              through education and dedication — earning his Bachelor's degree from the University of Pittsburgh and 
              a Master's in Entertainment Business from Full Sail University. Before real estate, he shaped young 
              minds as a high school history teacher and coached football, wrestling, and tennis. That experience 
              taught him one thing above all else: how to connect with anyone, in any room.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              In 2004, Chad stepped into real estate with a singular mission — to build a career where his effort 
              directly defined his success. More than two decades later, he has closed over $250,000,000 in sales volume, 
              earned the Prince George's County Association of REALTORS® Platinum designation for seven consecutive years, 
              and is recognized as a Veterans United Platinum Agent. Operating as a solo agent, Chad stays personally 
              invested in every client relationship from first showing to final signature.
            </p>
            <p style={{ fontWeight: 600, color: '#1A2744', fontSize: '1.2rem', fontFamily: "'Playfair Display', serif" }}>
              He doesn't just sell homes. He delivers an experience you remember.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
