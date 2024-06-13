import { FilterBar } from '../components/FilterBar/FilterBar';
import styles from './SharedStyles.module.css';
import { WellcomePage } from "../components/WellcomePage/WellcomePage";

export const HomePage = () => {
  return <>

  <div className={styles.wrapper}>
    <aside>
      <FilterBar/>
    </aside>
    <WellcomePage />
  </div></>;
};
