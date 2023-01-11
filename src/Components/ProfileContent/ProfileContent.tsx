import styles from "./ProfileContent.module.css";

const ProfileContent = function () {
  return (
    <div className={styles["profile-content"]}>
      <div className={styles["profile-content-grouping"]}>
        <div className={styles["profile-image"]}>
          <img
            alt="Profile Image"
            src={require("../../Assets/mock-profile-picture.png")}
          ></img>
        </div>
        <div className={styles["full-name"]}>
          <h3 className={styles["full-name-text"]}>John Doe</h3>
        </div>
      </div>
      <div className={styles["profile-description"]}>
        <p className={styles["profile-description-text"]}>
          I am a fitness influencer with over 50k followers and a passion for
          training in the gym. I share my journey with others in the hopes of
          inspiring and changing the lives of others.
        </p>
      </div>
      <div className={styles["profile-content-grouping"]}>
        <div className={styles["profile-experience"]}>
          <h3 className={styles["profile-experience-text"]}>
            Has Worked With{" "}
            <span className={styles["profile-experience-text-color"]}>4</span>{" "}
            <br />
            Different Brands
          </h3>
        </div>
        <div className={styles["profile-type"]}>
          <h3 className={styles["profile-type-text"]}>
            Favorite Deal Type:
            <br />
            Supplements
            <br />
            Clothing
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
