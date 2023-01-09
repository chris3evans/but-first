import styles from "./ProfileForm.module.css";

const ProfileForm = function () {
  return (
    <form className={styles["profile-form"]}>
      <div className={styles["profile-form-grouping"]}>
        <div className={styles["input-field"]}>
          <input
            type="image"
            id="profile-image"
            name="profileImage"
            className={styles["image-input"]}
          ></input>
          <label htmlFor="profile-image" className={styles["input-label"]}>
            Personal Profile
          </label>
        </div>
        <div className={styles["input-field"]}>
          <input
            className={styles["form-input"]}
            type="text"
            id="name"
            name="name"
          ></input>
          <label className={styles["form-label"]} htmlFor="name">
            Full Name
          </label>
        </div>
      </div>
      <div className={styles["input-field"]}>
        <input
          type="text"
          id="personal-bio"
          name="personalBio"
          className={styles["form-input"]}
        ></input>
        <label htmlFor="personal-bio" className={styles["form-label"]}>
          Personal Bio
        </label>
      </div>
      <div className={styles["check-box-container"]}>
        <p>What type of brand deals are you looking for?</p>
        <div className={styles["input-field"]}>
          <input
            type="checkbox"
            className={styles["form-checkbox"]}
            name="supplement"
            id="checkbox-supplement"
          ></input>
          <label className={styles["form-label"]} htmlFor="checkbox-supplement">
            Supplements
          </label>
        </div>
        <div className={styles["input-field"]}>
          <input
            type="checkbox"
            className={styles["form-checkbox"]}
            name="clothing"
            id="checkbox-clothing"
          ></input>
          <label className={styles["form-label"]} htmlFor="checkbox-clothing">
            Clothing
          </label>
        </div>
        <div className={styles["input-field"]}>
          <input
            type="checkbox"
            className={styles["form-checkbox"]}
            name="membership"
            id="checkbox-membership"
          ></input>
          <label className={styles["form-label"]} htmlFor="checkbox-membership">
            Membership / Subscription
          </label>
        </div>
        <div className={styles["input-field"]}>
          <input
            type="checkbox"
            className={styles["form-checkbox"]}
            name="equipment"
            id="checkbox-equipment"
          ></input>
          <label className={styles["form-label"]} htmlFor="checkbox-equipment">
            Equipment / Gear
          </label>
        </div>
      </div>
      <div className={styles["button-container"]}>
        <button className={styles["submit-profile-button"]} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
