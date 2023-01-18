const profile = require("./schema");

export const saveNewProfileData = async (req, res) => {
  try {
    console.log(req.body);
    const profileData = req.body;
    const Profile = new profile(profileData);
  } catch (error) {
    console.log(`Error in saving new profile data to database: ${error}`);
  }
};

module.exports = { saveNewProfileData };
