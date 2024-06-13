import { Link } from "react-router-dom";
import logo from "../../images/camper.svg";
import styles from "./Logo.module.css";
import { useEffect, useRef } from "react";
import { LogoText } from "../LogoText/LogoText";

export const Logo = () => {
  const logoBtn = useRef(null);
  const logoText = useRef(null);

  useEffect(() => {
    logoBtn.current.classList.add(styles.show);
    logoText.current.classList.add(styles.moved);
  }, []);

  const handleMouseEnter = () => {
    logoText.current.classList.add(styles.shadow);
  };

  const handleMouseLeave = () => {
    logoText.current.classList.remove(styles.shadow);
  };

  return (
    <div className={styles.wrapper}>
      <Link
        to="/"
        className={styles.link}
        ref={logoBtn}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={logo}
          alt="Logo of the company"
          className={styles.logo}
        />
      </Link>

      <Link to="/">
        <LogoText ref={logoText} />
      </Link>
    </div>
  );
};
