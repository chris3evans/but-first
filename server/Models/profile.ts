const saveNewProfileData = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(`Error in saving new profile data to database: ${error}`);
  }
};

module.exports = { saveNewProfileData };
