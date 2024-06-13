import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./CamperListItem.module.css";

import { HeroImage } from "../HeroImage/HeroImage";
import { CamperDetails } from "../CamperDetails/CamperDetails";
import { ModalDetailsPage } from "../ModalDetailsPage/ModalDetailsPage";

export const CamperListItem = ({ camper }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <div className={styles.wrapper}>
      <HeroImage image={camper.gallery[0]} />
      <div className={styles.content}>
        <CamperDetails camper={camper} />
        <button
          className={styles.btn}
          onClick={toggleModal}
          type="button"
        >
          Show more
        </button>
        {modalIsOpen && (
            <ModalDetailsPage
              camper={camper}
              closeModal={toggleModal}
              modalIsOpen={modalIsOpen}
            />
          )}
      </div>      
    </div>
  );
};

CamperListItem.propTypes = {
  camper: PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.string).isRequired,    
  }).isRequired,
};
