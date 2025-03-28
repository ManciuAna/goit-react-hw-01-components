import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const generateContrastingGradient = () => {
  const color1 = `hsl(${Math.floor(Math.random() * 360)}, 85%, 55%)`; 
  const color2 = `hsl(${Math.floor(Math.random() * 360)}, 85%, 45%)`; 
  return `linear-gradient(to right, ${color1}, ${color2})`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.item}
            style={{ background: generateContrastingGradient() }} 
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};