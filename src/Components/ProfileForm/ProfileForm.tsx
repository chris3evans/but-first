import styles from "./ProfileForm.module.css";
import { useState, FormEvent } from "react";
import { addProfileInfo } from "../../Services/api-service";

const ProfileForm = function () {
  const submitHandler = async function (event: any) {
    event.preventDefault();

    const profileData = {
      profileImage: event.target.profileImage.value,
      fullName: event.target.name.value,
      personalBio: event.target.personalBio.value,
      brandDeal: event.target.brandDeal.value,
    };
    console.log(profileData);

    try {
      await addProfileInfo(profileData);
      return "profile data saved";
    } catch (error) {
      return `Error profile data not saved: ${error}`;
    }
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
      <div className={styles["brands-container"]}>
        <p className={styles["deal-title"]}>
          What type of brand deals are you looking for?
        </p>
        <select className={styles["brands-selector"]} name="brandDeal">
          <option className={styles["brands-option"]} value="clothing">
            Clothing
          </option>
          <option className={styles["brands-option"]} value="supplements">
            Supplements
          </option>
          <option className={styles["brands-option"]} value="memberships">
            Memberships
          </option>
          <option className={styles["brands-option"]} value="equipment">
            Equipment
          </option>
        </select>
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
