import PropTypes from 'prop-types';
import styles from './ShowMoreButton.module.css';

export const ShowMoreButton = ({ onClick, label }) => {
  return (
    <button className={styles.showMoreBtn} onClick={onClick}>
      {label}
    </button>
  );
};

ShowMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default ShowMoreButton;