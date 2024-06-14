import { useState } from "react";
import PropTypes from 'prop-types';
import styles from "./FeaturesList.module.css";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

export const FeaturesList = ({ features, initialVisibleCount, showAllByDefault = false }) => {
  const [showAll, setShowAll] = useState(showAllByDefault);

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  const visibleFeatures = showAll ? features : features.slice(0, initialVisibleCount);

  return (
    <div>
      <ul className={styles.wrapper}>
        {visibleFeatures.map(feature => (
          <li className={styles.featureBox} key={feature.id}>
            <svg className={feature.iconClass} width="20" height="20">
              <use href={`${feature.icon}`}></use>
            </svg>
            <p className={styles.featureName}>{feature.text}</p>
          </li>
        ))}
      </ul>
      {!showAllByDefault && features.length > initialVisibleCount && (
        <ShowMoreButton onClick={toggleShowAll} label={showAll ? 'Show Less' : '...Show More'} />
      )}
    </div>
  );
};

FeaturesList.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      iconClass: PropTypes.string.isRequired,
    })
  ).isRequired,
  initialVisibleCount: PropTypes.number.isRequired,
  showAllByDefault: PropTypes.bool,
};

export default FeaturesList;

