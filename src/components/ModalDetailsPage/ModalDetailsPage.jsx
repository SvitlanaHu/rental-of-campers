import { useState, useEffect, useCallback } from "react";
import PropTypes from 'prop-types';
import { CamperRentForm } from "../CamperRentForm/CamperRentForm";
import { CamperFeatures } from "../CamperFeatures/CamperFeatures";
import { CamperDetailsInfo } from "../CamperDetailsInfo/CamperDetailsInfo";
import { CamperImgGallery } from "../CamperImgGallery/CamperImgGallery";
import { CamperReviews } from "../CamperReviews/CamperReviews";
import DisplayNumber from '../DisplayNumber/DisplayNumber';
import TextTruncate from '../TextTruncate/TextTruncate'; 
import icons from "../../images/sprite.svg";
import styles from "./ModalDetailsPage.module.css";

export const ModalDetailsPage = ({ closeModal, camper, onClose, reviewCount }) => {
  const [activeTab, setActiveTab] = useState("features");

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.headerBlock}>
            <div className={styles.mainInfo}>
              <h3>{camper.name}</h3>
              <div className={styles.ratingLocation}>
                <div className={styles.ratingBlock}>
                  <svg className={styles.ratingSvg}>
                    <use href={`${icons}#icon-ratingstar`}></use>
                  </svg>
                  <span className={styles.ratingText}>
                    {camper.rating} ({reviewCount} Reviews)
                  </span>
                </div>
                <div className={styles.locationBlock}>
                  <svg className={styles.locationSvg}>
                    <use href={`${icons}#icon-map-pin`}></use>
                  </svg> 
                  <span>{camper.location}</span>
                </div>
              </div>
              <p className={styles.price}>€<DisplayNumber number={camper.price} /></p>
            </div>
            <button
              type="button"
              className={styles.buttonClose}
              onClick={closeModal}
            >
              <svg className={styles.iconFill} width="16" height="16">
                <use href={`${icons}#icon-close`}></use>
              </svg>
            </button>
          </div>
          <div className={styles.detailedInfo}>
            <CamperImgGallery camper={camper} />
            <TextTruncate text={camper.description} />
          </div>
          <div className={styles.featureReviews}>
            <div className={styles.tabs}>
              <button
                type="button"
                className={`${styles.chooseBtn} ${activeTab === "features" ? styles.active : ""}`}
                onClick={() => handleTabChange("features")}
              >
                Features
              </button>
              <button
                type="button"
                className={`${styles.chooseBtn} ${activeTab === "reviews" ? styles.active : ""}`}
                onClick={() => handleTabChange("reviews")}
              >
                Reviews
              </button>
            </div>
            <div className={styles.moreInfo}>
              {activeTab === "features" && (
                <div className={styles.features}>
                  <CamperFeatures camper={camper} />
                  <CamperDetailsInfo camper={camper} />
                </div>
              )}
              {activeTab === "reviews" && (
                <div className={styles.reviews}>
                  <CamperReviews reviews={camper.reviews} />
                </div>
              )}
              <CamperRentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalDetailsPage.propTypes = {
  closeModal: PropTypes.func.isRequired,
  camper: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    adults: PropTypes.number.isRequired,
    children: PropTypes.number.isRequired,
    engine: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    tank: PropTypes.string.isRequired,
    consumption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.shape({
      airConditioner: PropTypes.number.isRequired,
      bathroom: PropTypes.number.isRequired,
      kitchen: PropTypes.number.isRequired,
      beds: PropTypes.number.isRequired,
      TV: PropTypes.number.isRequired,
      CD: PropTypes.number.isRequired,
      radio: PropTypes.number.isRequired,
      shower: PropTypes.number.isRequired,
      toilet: PropTypes.number.isRequired,
      freezer: PropTypes.number.isRequired,
      hob: PropTypes.number.isRequired,
      microwave: PropTypes.number.isRequired,
      gas: PropTypes.string.isRequired,
      water: PropTypes.string.isRequired,
    }).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer_name: PropTypes.string.isRequired,
        reviewer_rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  reviewCount: PropTypes.number.isRequired,
};

export default ModalDetailsPage;