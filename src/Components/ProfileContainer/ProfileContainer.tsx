import styles from "./ProfileContainer.module.css";

import ProfileForm from "../ProfileForm/ProfileForm";
import ProfileContent from "../ProfileContent/ProfileContent";

const ProfileContainer = function () {
  return (
    <div className={styles["profile-container"]}>
      <ProfileForm></ProfileForm>
      <ProfileContent></ProfileContent>
    </div>
  );
};

export default ProfileContainer;
