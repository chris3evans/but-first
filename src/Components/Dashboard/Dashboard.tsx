import styles from "./Dashboard.module.css";

import DashboardMenu from "../DashboardMenu/DashboardMenu";
import DashboardContent from "../DashboardContent/DashboardContent";

const Dashboard = function () {
  return (
    <div className={styles["dashboard"]}>
      <DashboardMenu></DashboardMenu>
      <DashboardContent></DashboardContent>
    </div>
  );
};

export default Dashboard;
