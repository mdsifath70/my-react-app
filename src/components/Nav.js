// import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
import profileImg from '../assets/img/sifath.jpg';
import styles from '../styles/Nav.module.css';
import Account from './Account';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/" exact="true" className={styles.brand}>
                        <img src={profileImg} alt="Profile" style={{ borderRadius: '50%' }} />
                        <h3>Sifath</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
