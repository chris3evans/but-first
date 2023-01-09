import styles from "./ProfileContainer.module.css";

import ProfileForm from "../ProfileForm/ProfileForm";

const ProfileContainer = function () {
  return (
    <div className={styles["profile-container"]}>
      <h3 className={styles["profile-title"]}>Fill In Your Profile</h3>
      <ProfileForm></ProfileForm>
    </div>
  );
};

export default ProfileContainer;
