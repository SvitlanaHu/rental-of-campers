import styles from './Header.module.css'
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar'

export const Header =()=>{
    return <div className={styles.wrapper}>
        <Logo/>
        <NavBar/>
    </div>
}