import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import icons from "../../images/sprite.svg";
import FeaturesList from "../FeaturesList/FeaturesList";
import styles from "./Features.module.css";

export const Features = ({ camper }) => {
  const features = [
    {
      id: nanoid(),
      icon: `${icons}#icon-users`,
      text: `${camper.adults} adults`,
      iconClass: styles.svgFill,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-gears`,
      text: camper.transmission,
      iconClass: styles.svg,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-fuel`,
      text: camper.engine,
      iconClass: styles.svgFill,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-kitchen`,
      text: 'Kitchen',
      iconClass: styles.svg,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-bed`,
      text: `${camper.details.beds} beds`,
      iconClass: styles.svg,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-ac`,
      text: 'AC',
      iconClass: styles.svgFill,
    }
  ];

  return <FeaturesList features={features} initialVisibleCount={6} />;
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
