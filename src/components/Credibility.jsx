import { motion } from 'framer-motion';

const Credibility = () => {
  const stats = [
    { icon: "🏆", label: "Over $250,000,000 Sold" },
    { icon: "🏠", label: "50+ Transactions Closed in 2024" },
    { icon: "⭐", label: "7x Platinum Agent — PG County" },
    { icon: "🎖️", label: "Veterans United Platinum Agent" },
    { icon: "📺", label: "American Dream TV Co-Host & HGTV Content" }
  ];

  return (
    <div 
      style={{ 
        backgroundColor: '#F9F7F4', 
        borderBottom: '1px solid rgba(26, 39, 68, 0.1)',
        padding: '2.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              color: '#1A2744',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{stat.icon}</span>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Credibility;
