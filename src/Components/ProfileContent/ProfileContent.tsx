import styles from "./ProfileContent.module.css";

const ProfileContent = function () {
  return (
    <div className={styles["profile-content"]}>
      <div className={styles["profile-content-grouping"]}>
        <div className={styles["profile-image"]}>
          <img
            alt="Profile Image"
            src="../../Assets/mock-profile-picture.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
