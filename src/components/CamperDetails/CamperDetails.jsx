import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import styles from "./CamperDetails.module.css";
import icons from "../../images/sprite.svg";
import { selectFavoritesIDs } from "../../redux/selectors";
import { toggleFavorite } from "../../redux/camperSlice";
import { Features } from "../Features/Features";
import DisplayNumber from '../DisplayNumber/DisplayNumber';

export const CamperDetails = ({ camper }) => {
  const dispatch = useDispatch();
  const favoritesIDs = useSelector(selectFavoritesIDs);

  useEffect(() => {
    if (!favoritesIDs.length) return;

    for (let i = 0; i < favoritesIDs.length; i++)
      document
        .getElementById(`favorite${favoritesIDs[i]}`)
        .classList.add(styles.active);
  }, [favoritesIDs, favoritesIDs.length]);

  const handleFavorite = (event) => {
    const _id = event.currentTarget.dataset.camperid;
    dispatch(toggleFavorite(_id));
    event.currentTarget.classList.toggle(styles.active);
  };

  return (
    <div className={styles.details}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <h2>{camper.name}</h2>
          <div className={styles.priceBox}>
            <h2 className={styles.price}>€<DisplayNumber number={camper.price} /></h2>
            <button
              id={`favorite${camper._id}`}
              type="button"
              data-camperid={camper._id}
              className={styles.favoriteButton}
              onClick={handleFavorite}
            >
              <svg
                className={styles.svgHeart} 
                width="22"
                height="22"
              >
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
            
          </div>        
        </div>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingBox}>
            <svg className={styles.svgRating} width="16" height="16">
              <use href={`${icons}#icon-ratingstar`}></use>
            </svg>
            <p>
              {camper.reviews && camper.reviews.length > 0 ? (
               <>
                  {camper.reviews.reduce((acc, review) => {
                    return acc + review.reviewer_rating;
                  }, 0) / camper.reviews.length}
                  ({camper.reviews.length} Reviews)
                </>
              ) : (
                "No Reviews"
              )}
            </p>
          </div>
          <div className={styles.ratingBox}>
            <svg className={styles.svgMap} width="16" height="16">
              <use href={`${icons}#icon-map-pin`}></use>
            </svg>
            <span>{camper.location}</span>
          </div>          
        </div>
      </div>        
      <p className={styles.description}>{camper.description}</p>
      <Features camper={camper} />      
    </div>
  );
};

CamperDetails.propTypes = {
  camper: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_rating: PropTypes.number.isRequired,
      })
    ),
    location: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    details: PropTypes.shape({
      beds: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
