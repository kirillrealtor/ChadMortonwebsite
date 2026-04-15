import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "$250M+", label: "Total Volume Sold" },
    { value: "50+", label: "Transactions (2024)" },
    { value: "20+", label: "Years in Real Estate" },
    { value: "7", label: "Platinum Awards (Consecutive)" },
    { value: "4+", label: "National Media Features" }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#1A2744', paddingTop: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 style={{ fontSize: '3.5rem', color: '#C8A96E', marginBottom: '0.5rem', fontWeight: 700 }}>{stat.value}</h3>
              <p style={{ color: 'white', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600, opacity: 0.8 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
