import styles from "./WellcomePage.module.css";
import { LogoText } from "../LogoText/LogoText";

export const WellcomePage = () => {
  
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBox}>
          <h1>We invite you to our</h1>
          <LogoText />
    </div>
            
      </div>
    
  );
};
