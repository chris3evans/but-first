import styles from "./ProfileForm.module.css";
import { useState } from "react";

const ProfileForm = function () {
  const submitHandler = function (event: React.SyntheticEvent) {
    event.preventDefault();
    console.log("hello");
  };

  return (
    <form onSubmit={submitHandler} className={styles["profile-form"]}>
      <div className={styles["profile-form-grouping"]}>
        <div className={styles["input-image"]}>
          <label className={styles["form-label"]} htmlFor="profile-image">
            Profile Photo
          </label>
          <input
            type="file"
            id="profile-image"
            accept="image/png, image/jpeg"
            name="profileImage"
            alt="Upload Image"
            className={styles["image-input"]}
          ></input>
        </div>
        <div className={styles["input-field"]}>
          <label className={styles["form-label"]} htmlFor="name">
            Full Name
          </label>
          <input
            className={styles["form-input"]}
            type="text"
            id="name"
            name="name"
          ></input>
        </div>
      </div>
      <div className={styles["bio-field"]}>
        <label htmlFor="personal-bio" className={styles["form-label"]}>
          Personal Bio
        </label>
        <textarea
          id="personal-bio"
          name="personalBio"
          className={styles["textarea-input"]}
        ></textarea>
      </div>
      <div className={styles["check-box-container"]}>
        <p className={styles["deal-title"]}>
          What type of brand deals are you looking for?
        </p>
        <div className={styles["checkbox-field"]}>
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
        <div className={styles["checkbox-field"]}>
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
        <div className={styles["checkbox-field"]}>
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
        <div className={styles["checkbox-field"]}>
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
