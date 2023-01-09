import styles from "./DashboardContent.module.css";

import ProfileContainer from "../ProfileContainer/ProfileContainer";

const DashboardContent = function () {
  return (
    <div className={styles["dashboard-content"]}>
      <ProfileContainer></ProfileContainer>
    </div>
  );
};

export default DashboardContent;
