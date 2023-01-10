import styles from "./ProfileContainer.module.css";

import ProfileForm from "../ProfileForm/ProfileForm";

const ProfileContainer = function () {
  return (
    <div className={styles["profile-container"]}>
      <ProfileForm></ProfileForm>
    </div>
  );
};

export default ProfileContainer;
