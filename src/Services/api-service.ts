import { ProfileData } from "../Interfaces";

const baseUrl =
  process.env.NODE_ENV === "production" ? "#" : "http://localhost:4000";

export const addProfileInfo = async function (data: ProfileData) {
  try {
    const response = await fetch(`${baseUrl}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    console.log(
      `There was an error in sending the data - client api service: ${error}`
    );
  }
};
