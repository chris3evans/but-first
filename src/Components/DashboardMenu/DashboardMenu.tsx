import styles from "./DashboardMenu.module.css";

const DashboardMenu = function () {
  return (
    <div className={styles["dashboard-menu"]}>
      <ul className={styles["dashboard-menu-list"]}>
        <li className={styles["dashboard-menu-item"]}>
          <button type="button" className={styles["dashboard-menu-button"]}>
            <h2 className={styles["dashboard-menu-text"]}>Profile</h2>
          </button>
        </li>
        <li className={styles["dashboard-menu-item"]}>
          <button type="button" className={styles["dashboard-menu-button"]}>
            <h2 className={styles["dashboard-menu-text"]}>Find Brands</h2>
          </button>
        </li>
        <li className={styles["dashboard-menu-item"]}>
          <button type="button" className={styles["dashboard-menu-button"]}>
            <h2 className={styles["dashboard-menu-text"]}>My Offers</h2>
          </button>
        </li>
        <li className={styles["dashboard-menu-item"]}>
          <button type="button" className={styles["dashboard-menu-button"]}>
            <h2 className={styles["dashboard-menu-text"]}>My Sponsors</h2>
          </button>
        </li>
        <li className={styles["dashboard-menu-item"]}>
          <button type="button" className={styles["dashboard-menu-button"]}>
            <h2 className={styles["dashboard-menu-text"]}>Settings</h2>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardMenu;
