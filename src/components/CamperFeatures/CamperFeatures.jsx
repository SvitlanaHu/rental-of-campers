import { nanoid } from "nanoid";
import PropTypes from 'prop-types';
import icons from "../../images/sprite.svg";
import FeaturesList from "../FeaturesList/FeaturesList";
import styles from "./CamperFeatures.module.css";

export const CamperFeatures = ({ camper, showAllFeatures = false }) => {
  const features = [
    {
      id: nanoid(),
      icon: `${icons}#icon-users`,
      text: `${camper.adults} adults`,
      iconClass: styles.iconFill,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-gears`,
      text: camper.transmission,
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-ac`,
      text: 'AC',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-tv`,
      text: 'TV',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-fuel`,
      text: camper.engine,
      iconClass: styles.iconFill,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-kitchen`,
      text: 'Kitchen',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-bed`,
      text: `${camper.details.beds} beds`,
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-bathroom`,
      text: 'Bathroom',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-cd`,
      text: 'CD',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-radio`,
      text: 'Radio',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-hob`,
      text: `${camper.details.hob} hob`,
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-conditioner`,
      text: `${camper.details.airConditioner} airConditioner`,
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-freezer`,
      text: 'Freezer',
      iconClass: styles.icon,
    },
    {
      id: nanoid(),
      icon: `${icons}#icon-microwave`,
      text: 'Microwave',
      iconClass: styles.icon,
    }
  ];

  return <FeaturesList features={features} initialVisibleCount={9} showAllByDefault={showAllFeatures} />;
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
  showAllFeatures: PropTypes.bool,
};

