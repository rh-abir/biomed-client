import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { saveUser } from "../../../../api/auth";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const EditForm = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios
      .post(imageUrl, formData)
      .then((dataImage) => {
        const profileData = {
          name2: data?.name,
          city: data?.city,
          country: data?.country,
          education: data?.education,
          email: data?.email,
          age: data?.age,
          facebook: data?.facebook,
          language: data?.language,
          linkedin: data?.linkedin,
          phone: data?.phone,
          website: data?.website,
          description: data?.description,
          image: dataImage?.data?.data?.display_url,
        };
        return saveUser(user, profileData);
      })
      .then((response) => {
        console.log(response);
        if (response.modifiedCount === 1) {
          toast.success("Profile updated successfully");
          navigate("/dashboard/my-profile");
        } else {
          toast.error("Failed to update Profile. Please try again.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios(
        `${import.meta.env.VITE_BASE_URL}/users/${user?.email}`
      );
      return res?.data;
    },
  });
  const { updateData } = myProfileData;
  console.log("updateData", updateData);

  return (
    <div className="dark:bg-slate-900 dark:text-white bg-white p-6 rounded-md my-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Image */}
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            className="block w-full border
            dark:bg-slate-800  text-gray-500
            file:mr-4 file:py-4 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            dark:file:bg-slate-500
            dark:hover:file:bg-gray-700
            dark:file:text-white
            file:bg-gray-200 file:text-gray-700
            hover:file:bg-gray-100
          "
            {...register("image", {
              required: "Please upload an image",
            })}
          />
          {errors?.image && (
            <span className="text-red-500">{errors?.image.message}</span>
          )}
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              defaultValue={
                updateData?.name2 ? updateData?.name2 : user?.displayName
              }
              placeholder="Your Full Name"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("name")}
            />
          </div>
          {/*Email Field */}
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              readOnly
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("email")}
            />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              defaultValue={updateData?.phone ? updateData?.phone : null}
              placeholder="Your Phone"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("phone")}
            />
          </div>
          {/*Age Field */}
          <div className="mb-4 cursor-pointer">
            <label htmlFor="age">Age</label>
            <select
              className="w-full px-4 py-5 dark:bg-slate-800  bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
              {...register("age")}
            >
              <option className="cursor-pointer py-2" value="18-22">
                18-22 Years
              </option>
              <option className="cursor-pointer py-2" value="23-27">
                23-27 Years
              </option>
              <option className="cursor-pointer py-2" value="28-32">
                28-32 Years
              </option>
              <option className="cursor-pointer py-2" value="33-37">
                33-37 Years
              </option>
              <option className="cursor-pointer py-2" value="38-42">
                38-42 Years
              </option>
            </select>
          </div>
        </div>
        <div className="lg:grid grid-cols-2 items-center gap-4">
          {/* Education Field */}
          <div className="mb-4">
            <label htmlFor="education">Education Levels</label>
            <input
              type="text"
              id="education"
              defaultValue={
                updateData?.education ? updateData?.education : null
              }
              placeholder="Your Last Education"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("education")}
            />
          </div>
          {/*Language Field */}
          <div className="mb-4">
            <label htmlFor="language">Language</label>

            <input
              type="text"
              id="language"
              defaultValue={updateData?.language ? updateData?.language : null}
              placeholder="Language"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("language")}
            />
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-4">
          {/*Country Field */}
          <div className="mb-4">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              defaultValue={updateData?.country ? updateData?.country : null}
              placeholder="Enter Country Name"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("country")}
            />
          </div>
          {/*City Field */}
          <div className="mb-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              defaultValue={updateData?.city ? updateData?.city : null}
              placeholder="Enter City Name"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("city")}
            />
          </div>
        </div>
        {/*Website Field */}
        <div className="mb-4">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            defaultValue={updateData?.website ? updateData?.website : null}
            placeholder="Enter Website Link"
            className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
            {...register("website")}
          />
        </div>
        <div className="lg:grid grid-cols-2 gap-4">
          {/*Facebook Field */}
          <div className="mb-4">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              defaultValue={updateData?.facebook ? updateData?.facebook : null}
              placeholder="Enter Facebook Link"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("facebook")}
            />
          </div>
          {/*LinkedIn Field */}
          <div className="mb-4">
            <label htmlFor="linkedin">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              defaultValue={updateData?.linkedin ? updateData?.linkedin : null}
              placeholder="Enter LinkedIn Link"
              className="w-full px-5 py-4 dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition rounded-md outline-none mt-2"
              {...register("linkedin")}
            />
          </div>
        </div>
        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description p-10">Description</label>
          <textarea
            id="description"
            defaultValue={
              updateData?.description ? updateData?.description : null
            }
            placeholder="Enter job description"
            className="w-full h-60 px-5 py-4 rounded-md outline-none dark:bg-slate-800  bg-slate-100 border focus:border-blue-700 transition"
            {...register("description")}
          ></textarea>
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditForm;
