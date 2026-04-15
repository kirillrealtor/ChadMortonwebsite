import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Credibility from './components/Credibility'
import About from './components/About'
import Media from './components/Media'
import Videos from './components/Videos'
import Stats from './components/Stats'
import Community from './components/Community'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for premium feel
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A2744] text-white"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1A2744', zIndex: 1000 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-serif tracking-widest text-[#C8A96E]"
            >
              CHAD MORTON
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <Credibility />
          <About />
          <Media />
          <Videos />
          <Stats />
          <Community />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </div>
  )
}

export default App
