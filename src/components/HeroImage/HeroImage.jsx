import PropTypes from 'prop-types';
import styles from './HeroImage.module.css'

export const HeroImage = ({ image }) => {
    return (
        <div className={styles.wrapper} >
            <img src={image} alt="Photo of the camper" className={styles.image} />
        </div>
    )    
};

HeroImage.propTypes = {
  image: PropTypes.string.isRequired,
};
