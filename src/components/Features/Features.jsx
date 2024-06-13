import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import styles from "./Features.module.css";
import icons from "../../images/sprite.svg";

export const Features = ({ camper }) => {
  return (
    <ul className={styles.wrapper} >
      <li className={styles.featureBox} key={nanoid()}>
        <svg className={styles.svgFill} width="20" height="20">
          <use href={`${icons}#icon-users`}></use>
        </svg>
        <p className={styles.featureName}>{camper.adults} adults</p>
      </li>
      <li className={styles.featureBox} key={nanoid()}>
        <svg className={styles.svg} width="20" height="20">
          <use href={`${icons}#icon-gears`}></use>
        </svg>
        <p className={styles.featureName}>{camper.transmission}</p>
      </li>
      <li className={styles.featureBox} key={nanoid()}>
        <svg className={styles.svgFill} width="20" height="20">
          <use href={`${icons}#icon-fuel`}></use>
        </svg>
        <p className={styles.featureName}>{camper.engine}</p>
      </li>
      <li className={styles.featureBox} key={nanoid()}>
        <svg className={styles.svg} width="20" height="20">
          <use href={`${icons}#icon-kitchen`}></use>
        </svg>
        <p className={styles.featureName}>Kitchen</p>
      </li>
      <li className={styles.featureBox} key={nanoid()}>
        <svg className={styles.svg} width="20" height="20">
          <use href={`${icons}#icon-bad`}></use>
        </svg>
        <p className={styles.featureName}>{camper.details.beds} beds</p>
      </li>
      <li className={styles.featureBox} key={nanoid()}>
        <svg className={styles.svgFill} width="20" height="20">
          <use href={`${icons}#icon-ac`}></use>
        </svg>
        <p className={styles.featureName}>AC</p>
      </li>
    </ul>
  );
};

Features.propTypes = {
  camper: PropTypes.shape({
    adults: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    engine: PropTypes.string.isRequired,
    details: PropTypes.shape({
      beds: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};