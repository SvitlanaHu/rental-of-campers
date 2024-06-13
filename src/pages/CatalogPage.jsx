
import styles from './SharedStyles.module.css';
import { FilterBar } from '../components/FilterBar/FilterBar';
import { CamperList } from "../components/CamperList/CamperList";

export const CatalogPage = () => {
  return (
    <div className={styles.wrapper}>
      <aside>
        <FilterBar/>
      </aside>
      <CamperList/>
    </div>
    
  );
};
