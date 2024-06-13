import { LogoText } from "../LogoText/LogoText";
import { Link } from "react-router-dom";
import logo from "../../images/camper.svg";
import styles from "./WellcomePage.module.css";

export const WellcomePage = () => {
  
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBox}>
              <h1>We invite you to our</h1>
              <Link to="/catalog">
                <div className={styles.logo}>
                  <img src={logo} alt="My camper" className={styles.LogoSvg} />
                  <LogoText className={styles.logoText} />
                </div>
                
              </Link>
            </div>            
        </div>    
  );
};
