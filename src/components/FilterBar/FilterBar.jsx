
import styles from "./FilterBar.module.css";

import { FilterForm } from "../FilterForm/FilterForm";

export const FilterBar = () => {
  return (
    <div className={styles.wrapper}>
    <FilterForm/>
    </div>
  );
};
