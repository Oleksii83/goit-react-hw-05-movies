import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  const location = useLocation();
  return (
    <nav>
      <NavLink
        exact
        to={{
          pathname: `/`,
          state: { from: location },
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        to={{
          pathname: `/movies`,
          state: { from: location },
        }}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
