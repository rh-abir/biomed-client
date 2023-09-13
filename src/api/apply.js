import axios from "axios";

export const postApplyJobs = (user, applyJob) => {
  const apply = {
    name: user.name,
    email: user.email,
    image: user.photoURL,
    applyJob,
  };

  axios
    .post("http://localhost:5000/apply-jobs", apply)
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
