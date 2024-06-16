import PropTypes from 'prop-types';
import { CamperReviewItem } from "../CamperReviewItem/CamperReviewItem";
import styles from "./CamperReviews.module.css";

export const CamperReviews = ({ reviews }) => {
  return (
    <ul className={styles.container}>
      {reviews.map((review, index) => (
        <CamperReviewItem key={index} review={review} />
      ))}
    </ul>
  );
};

CamperReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer_name: PropTypes.string.isRequired,
      reviewer_rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired,
};
