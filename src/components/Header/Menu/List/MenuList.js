import { Link } from "react-router-dom";

import styles from "./styles/menu-list.module.scss";

const MenuList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__link}>
          Home
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/characters" className={styles.list__link}>
          Characters
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/episodes" className={styles.list__link}>
          Episodes
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/locations" className={styles.list__link}>
          Locations
        </Link>
      </li>
    </ul>
  );
};

export default MenuList;
