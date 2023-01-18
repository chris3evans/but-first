const mongoose = require("../index.ts");

const profileSchema = new mongoose.Schema({
  profileImage: { type: String },
  fullName: { type: String },
  personalBio: { type: String },
  brandDeal: { type: String },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = { Profile };
