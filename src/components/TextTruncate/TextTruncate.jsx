import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TextTruncate.module.css';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';

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
      <ShowMoreButton
        onClick={toggleExpansion}
        label={isExpanded ? 'Show less' : '...Show more'}
      />
    </div>
  );
};

TextTruncate.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextTruncate;
