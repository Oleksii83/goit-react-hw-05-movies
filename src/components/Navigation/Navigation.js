import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
      Home
    </NavLink>

    <NavLink to="/movies" className={styles.link} activeClassName={styles.activeLink}>
      Movies
    </NavLink>

    <NavLink to="/trial" className={styles.link} activeClassName={styles.activeLink}>
      Пробная
    </NavLink>
  </nav>
);

export default Navigation;
