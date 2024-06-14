import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  selectCampersCount, 
  selectFilteredCampers,
  selectIsLoading,
  selectFavoritesIDs,
  selectShowedVans,
} from "../../redux/selectors";
import { fetchCamperList } from "../../redux/operation";
import { showMore } from "../../redux/camperSlice";
import { CamperListItem } from "../CamperListItem/CamperListItem";
import logo from "../../images/camper.svg";
import styles from "./CamperList.module.css";


export const CamperList = () => {  
  const location = useLocation();
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectFilteredCampers);
  const campersCount = useSelector(selectCampersCount);
  const showedVans = useSelector(selectShowedVans);
  const favoriteCampers = useSelector(selectFavoritesIDs);

  // useEffect(() => {
  //   dispatch(fetchCamperList());
  // }, [dispatch]);

  function handleLoadMore() {
    const newShowedVans = showedVans + 4;
    dispatch(showMore(newShowedVans));
    dispatch(fetchCamperList(newShowedVans));
  }

  return (
    <>
      {location.pathname === "/catalog" && (
        <div className={styles.wrapper} id="camperList">
          {camperList.length ? (
            <ul className={styles.box}>
              {selectIsLoading &&
                camperList
                ?.map((camper) => {
                  return (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  );
              })}
          </ul>
          ) : (
              <div className={styles.infoWrapper}>
              <div className={styles.img}>
                <img src={logo} alt="My camper"  className={styles.svg} />
              </div>
                
              <div className={styles.content}>
                <p className={styles.info}>
                  There is no any favorite campers yet...
                </p>
              </div>
            </div>
          )}
          
          {campersCount > showedVans && (
            <button
              className={styles.btn}
              type="button"
              onClick={handleLoadMore}
            >
              Load more
            </button>       
          )}
        </div>
      )}

      {location.pathname === "/favorite" && (
        <div className={styles.wrapper}>
          {favoriteCampers.length ? (
            <ul className={styles.box}>
              {selectIsLoading &&
                camperList
                  ?.filter((camper) => favoriteCampers.includes(camper._id))
                  .map((camper) => (
                    <li key={camper._id}>
                      <CamperListItem camper={camper} />
                    </li>
                  ))}
            </ul>
          ) : (
            <div className={styles.infoWrapper}>
              <div className={styles.img}>
                <img src={logo} alt="My camper"  className={styles.svg} />
              </div>
                
              <div className={styles.content}>
                <p className={styles.info}>
                  There is no any favorite campers yet...
                </p>
                <Link to="/catalog" className={styles.link}>
                  Try to choose one!!!
                </Link>
              </div>
            </div>
          )}
        </div>
      )}    
    </>
  );
};
