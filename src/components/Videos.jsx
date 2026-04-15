import { motion } from 'framer-motion';

const Videos = () => {
  return (
    <section id="videos" className="section-padding" style={{ backgroundColor: '#1A2744', color: 'white', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="accent-label" style={{ color: '#C8A96E' }}>Featured In TV</span>
          <h2 style={{ fontSize: '3rem', color: 'white', marginTop: '1rem' }}>Watch Chad in Action</h2>
          <p style={{ maxWidth: '700px', margin: '1rem auto', opacity: 0.8 }}>
            Featured on The American Dream TV — the nation's premier real estate lifestyle show.
          </p>
        </div>

        {/* Combined Gallery: Vimeo + Local Videos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '3rem', marginBottom: '1rem' }}>
          {/* Vimeo 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', border: '1px solid rgba(200, 169, 110, 0.2)' }}
          >
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: '1.5rem' }}>
              <iframe 
                src="https://player.vimeo.com/video/1065962809?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="The American Dream — Season 9, Episode 7"
              ></iframe>
            </div>
            <h4 style={{ color: '#C8A96E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>TV Show: Season 9, Ep 7</h4>
            <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>Power Player Feature on The American Dream</p>
          </motion.div>

          {/* Local Video 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', border: '1px solid rgba(200, 169, 110, 0.2)' }}
          >
            <video controls style={{ width: '100%', marginBottom: '1.5rem' }}>
              <source src="/assets/video1.mp4" type="video/mp4" />
            </video>
            <h4 style={{ color: '#C8A96E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Professional Showcase I</h4>
            <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>A closer look at Chad's real estate process.</p>
          </motion.div>

          {/* Local Video 2 (Full Episode) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', border: '1px solid rgba(200, 169, 110, 0.2)' }}
          >
            <video controls style={{ width: '100%', marginBottom: '1.5rem' }}>
              <source src="/assets/video2.mp4" type="video/mp4" />
            </video>
            <h4 style={{ color: '#C8A96E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Power Player (Full Episode)</h4>
            <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>The complete American Dream feature story.</p>
          </motion.div>

          {/* Local Video 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', border: '1px solid rgba(200, 169, 110, 0.2)' }}
          >
            <video controls style={{ width: '100%', marginBottom: '1.5rem' }}>
              <source src="/assets/video3.mp4" type="video/mp4" />
            </video>
            <h4 style={{ color: '#C8A96E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Market Expertise</h4>
            <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>Insights into the DC & Maryland luxury markets.</p>
          </motion.div>

          {/* Vimeo 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1.5rem', border: '1px solid rgba(200, 169, 110, 0.2)' }}
          >
            <div style={{ padding: '56.25% 0 0 0', position: 'relative', marginBottom: '1.5rem' }}>
              <iframe 
                src="https://player.vimeo.com/video/1046847390?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                title="The American Dream — Chad Morton Feature"
              ></iframe>
            </div>
            <h4 style={{ color: '#C8A96E', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Industry Spotlight</h4>
            <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>National media recognition for excellence.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Videos;
