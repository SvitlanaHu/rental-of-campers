import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextTruncate.module.css';

const TextTruncate = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.textContainer}>
      <span className={`${styles.text} ${isExpanded ? styles.expanded : styles.clamped}`}>
        {text}
      </span>
      <button
        onClick={toggleExpansion}
        className={
                  isExpanded ? `${styles.text} ${styles.textClamped}` : styles.textExpanded
                }
      >
        {isExpanded ? 'Show less' : '...Show more'}
      </button>
    </div>
  );
};

TextTruncate.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextTruncate;