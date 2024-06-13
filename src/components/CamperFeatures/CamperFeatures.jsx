import PropTypes from 'prop-types';
import styles from "./CamperFeatures.module.css";
import icons from "../../images/sprite.svg";

export const CamperFeatures = ({ camper }) => {
  return (
    <ul className={styles.advList}>
      {camper.adults && (
        <li className={styles.adItem}>
          <svg className={styles.iconFill}>
            <use href={`${icons}#icon-users`}></use>
          </svg>{" "}
          {camper.adults} adults
        </li>
      )}

      {camper.transmission && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-gears`}></use>
          </svg>
          <p>{camper.transmission}</p>
        </li>
      )}

      {camper.details.airConditioner > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          <p>AC</p>
        </li>
      )}

      {camper.engine && (
        <li className={styles.adItem}>
          <svg className={styles.iconFill}>
            <use href={`${icons}#icon-fuel`}></use>
          </svg>
          {camper.engine}
        </li>
      )}

      {camper.details.kitchen > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          Kitchen
        </li>
      )}

      {camper.details.beds > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-bed`}></use>
          </svg>
          {camper.details.beds} beds
        </li>
      )}

      {camper.details.airConditioner > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-conditioner`}></use>
          </svg>
          {camper.details.airConditioner} airConditioner
        </li>
      )}

      {camper.details.CD > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-cd`}></use>
          </svg>
          CD
        </li>
      )}

      {camper.details.radio > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-radio`}></use>
          </svg>
          Radio
        </li>
      )}

      {camper.details.hob > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-hob`}></use>
          </svg>
          {camper.details.hob} hob
        </li>
      )}

      {camper.details.freezer > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-freezer`}></use>
          </svg>
          freezer
        </li>
      )}

      {camper.details.TV > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-tv`}></use>
          </svg>
          TV
        </li>
      )}

      {camper.details.bathroom > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-bathroom`}></use>
          </svg>
          Bathroom
        </li>
      )}

      {camper.details.microwave > 0 && (
        <li className={styles.adItem}>
          <svg className={styles.icon}>
            <use href={`${icons}#icon-microwave`}></use>
          </svg>
          Microwave
        </li>
      )}
    </ul>
  );
};

CamperFeatures.propTypes = {
  camper: PropTypes.shape({
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    details: PropTypes.shape({
      airConditioner: PropTypes.number,
      kitchen: PropTypes.number,
      beds: PropTypes.number,
      CD: PropTypes.number,
      radio: PropTypes.number,
      hob: PropTypes.number,
      freezer: PropTypes.number,
      TV: PropTypes.number,
      bathroom: PropTypes.number,
      microwave: PropTypes.number,
    }).isRequired,
  }).isRequired,
};
