import PropTypes from 'prop-types';
import styles from "./CamperDetailsInfo.module.css";

export const CamperDetailsInfo = ({ camper }) => {
  function formatStringValue(value) {
    return value.replace(/(\d+)([a-zA-Z])/g, "$1 $2");
  }

  return (
    <div className={styles.details}>
      <h3 className={styles.subTitle}>Vehicle details</h3>
      <hr className={styles.line} />
      <ul className={styles.detailsList}>
        <li className={styles.detailsItem}>
          <span>Form</span>
          <span style={{ textTransform: "capitalize" }}>{camper.form}</span>
        </li>
        <li className={styles.detailsItem}>
          <span>Length</span>
          <span>{formatStringValue(camper.length)}</span>
        </li>
        <li className={styles.detailsItem}>
          <span>Width</span>
          <span>{formatStringValue(camper.width)}</span>
        </li>
        <li className={styles.detailsItem}>
          <span>Height</span>
          <span>{formatStringValue(camper.height)}</span>
        </li>
        <li className={styles.detailsItem}>
          <span>Tank</span>
          <span>{formatStringValue(camper.tank)}</span>
        </li>
        <li className={styles.detailsItem}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

CamperDetailsInfo.propTypes = {
  camper: PropTypes.shape({
    form: PropTypes.string,
    length: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tank: PropTypes.string,
    consumption: PropTypes.string,
  }).isRequired,
};
