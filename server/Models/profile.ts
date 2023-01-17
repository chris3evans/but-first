const saveNewProfileData = async (profileData) => {
  try {
    console.log("hello");
  } catch (error) {
    console.log(`Error in saving new profile data to database: ${error}`);
  }
};

module.exports = { saveNewProfileData };
