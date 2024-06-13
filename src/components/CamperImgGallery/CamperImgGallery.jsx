import PropTypes from 'prop-types';
import styles from "./CamperImgGallery.module.css";

export const CamperImgGallery = ({ camper }) => {
  return (
    <ul className={styles.imgList}>
      {camper.gallery.map((image, index) => (
        <li key={index} className={styles.imgListItem}>
          <img
            src={image}
            alt={`Camper image ${index + 1}`}
            className={styles.galleryImage}
          />
        </li>
      ))}
    </ul>
  );
};

CamperImgGallery.propTypes = {
  camper: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};