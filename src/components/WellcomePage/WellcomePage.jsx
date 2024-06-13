import styles from "./WellcomePage.module.css";
import { Logo } from "../Logo/Logo";

export const WellcomePage = () => {
  
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleBox}>
          <h1>We invite you to our</h1>
          <Logo />
    </div>
            
      </div>
    
  );
};
