import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="accent-label">Contact</span>
            <h2 style={{ fontSize: '3rem', color: '#1A2744', marginTop: '1rem', marginBottom: '1.5rem' }}>Ready to Make Your Move?</h2>
            <p style={{ color: '#4A4A4A', marginBottom: '3rem', fontSize: '1.1rem' }}>
              Chad Morton brings the same energy to every conversation that he brings to every closing. Reach out — he picks up.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#1A2744', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Office</h4>
                <p style={{ margin: 0 }}>Maverick Realty</p>
                <p style={{ margin: 0 }}>137 National Plaza, Suite 313</p>
                <p style={{ margin: 0 }}>National Harbor, MD 20745</p>
              </div>
              
              <div>
                <h4 style={{ color: '#1A2744', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Direct</h4>
                <p style={{ margin: 0 }}>
                  <a href="tel:302-373-5929" style={{ color: 'inherit', textDecoration: 'none' }}>302-373-5929</a>
                </p>
                <p style={{ margin: 0 }}>
                  <a href="mailto:chadmortonrealtor@gmail.com" style={{ color: '#C8A96E', textDecoration: 'none', fontWeight: 600 }}>chadmortonrealtor@gmail.com</a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-card"
          >
            <form 
              action="https://formsubmit.co/chadmortonrealtor@gmail.com" 
              method="POST"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1A2744' }}>Name</label>
                <input type="text" name="name" required style={{ padding: '1rem', border: '1px solid #ddd', outline: 'none', fontFamily: 'inherit' }} />
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1A2744' }}>Email</label>
                  <input type="email" name="email" required style={{ padding: '1rem', border: '1px solid #ddd', outline: 'none', fontFamily: 'inherit', width: '100%' }} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1A2744' }}>Phone</label>
                  <input type="tel" name="phone" style={{ padding: '1rem', border: '1px solid #ddd', outline: 'none', fontFamily: 'inherit', width: '100%' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#1A2744' }}>Message</label>
                <textarea name="message" rows="5" required style={{ padding: '1rem', border: '1px solid #ddd', outline: 'none', fontFamily: 'inherit', resize: 'none' }}></textarea>
              </div>

              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Website Inquiry — Chad Morton" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <button className="btn-gold" type="submit" style={{ marginTop: '1rem' }}>Send Message</button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
