import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import logo from "../../images/camper.svg";
import img from '../../images/404notFound.png';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5); // Початкове значення таймера

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prevSeconds => prevSeconds - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    // При знищенні компонента очищаємо таймери
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Oops! It seems like the page you are looking for does not exist.
      </h2>
      <div className={styles.textWrap}>
        <p className={styles.text}>
          Redirecting to home page in
        </p>
        <p className={styles.seconds}>{secondsLeft}</p>
        <p className={styles.text}>seconds...</p>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="My camper" className={styles.LogoSvg} />
      </div>
      <img src={img} className={styles.img} alt="404 page img" />
    </div>
  );
}