import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
import { selectFavoritesIDs } from "../../redux/selectors";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

export const NavBar = () => {
  const favoriteTipRef = useRef(null);
  const favoriteCount = useSelector(selectFavoritesIDs);

  useEffect(() => {
    if (favoriteTipRef.current) {
      favoriteTipRef.current.setAttribute(
        "data-favorite-count",
        favoriteCount.length ? `+${favoriteCount.length}` : ''
      );
    }
  }, [favoriteCount]);

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/catalog">
            <span>Catalog</span>
          </NavLink>
        </li>
        <li key={nanoid()} className={styles.listItem}>
          <NavLink className={buildLinkClass} to="/favorite">
            <span>Favorite</span>
          </NavLink>
        </li>
        <li>
           <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};
