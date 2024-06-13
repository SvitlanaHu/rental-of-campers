import PropTypes from 'prop-types';
import icons from "../../images/sprite.svg";
import styles from "./CamperReviewItem.module.css";

export const CamperReviewItem = ({ review }) => {
  const letter = review.reviewer_name.charAt(0);
  const rating = review.reviewer_rating;
  const stars = Array(5).fill(0);

  return (
    <div className={styles.reviewBlock}>
      <div className={styles.reviewerCont}>
        <div className={styles.avatar}>
          <p>{letter}</p>
        </div>
        <div className={styles.rating}>
          <span>{review.reviewer_name}</span>
          <div className={styles.count}>
            {stars.map((_, index) => (
              <svg 
                key={index}
                className={`${styles.ratingSvg} ${
                  index < rating ? styles.filled : ""
                }`}
              >
                <use href={`${icons}#icon-ratingstar`}></use>
              </svg>              
            ))}
          </div>
        </div>
      </div>
      <p className={styles.reviewText}>{review.comment}</p>
    </div>
  );
};

CamperReviewItem.propTypes = {
  review: PropTypes.shape({
    reviewer_name: PropTypes.string.isRequired,
    reviewer_rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  }).isRequired,
};
