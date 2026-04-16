import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1A2744',
        overflow: 'hidden'
      }}
    >
      {/* Background with overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/assets/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />

      {/* Gradient Overlay for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(26,39,68,0.8), rgba(26,39,68,0.4), rgba(26,39,68,0.8))'
        }}
      />

      <div
        className="container"
        style={{
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          padding: '0 1rem'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className="accent-label"
            style={{
              display: 'block',
              marginBottom: '1.5rem',
              color: '#C8A96E'
            }}
          >
            Premier Real Estate
          </span>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              maxWidth: '1000px',
              margin: '0 auto 1.5rem'
            }}
          >
            The DMV’s Top Agent is READY <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400 }}>to go to work for you!</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: 300,
              marginBottom: '3rem',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              opacity: 0.9,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Over $250,000,000 Sold. 20+ Years of Excellence. <br />
            Your Home. Your Terms.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold"
          >
            Work With Chad
          </motion.a>
        </motion.div>
      </div>

      {/* Profile Image Preview in Hero (Subtle Side Placement) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          right: '5%',
          height: '70vh',
          zIndex: 5,
          display: 'none', // Hide on small screens
        }}
        className="hero-profile-container"
      >
        {/* We can add media query in CSS for this */}
      </motion.div>
    </section>
  );
};

export default Hero;
