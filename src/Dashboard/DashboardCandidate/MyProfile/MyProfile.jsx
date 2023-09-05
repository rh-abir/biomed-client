import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import axios from "axios";
// import { saveClient } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Provider/AuthProvider";
import { saveClient } from "../../../api/auth";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const CompanyForm = () => {
  const { user } = useContext(AuthContext);
  const [teamOptions, setTeamOptions] = useState(null);
  const [allowOptions, setAllowOptions] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { data: companyView = [] } = useQuery({
    queryKey: ["companyView"],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res?.data;
    },
  });

  const { updateData } = companyView;

  useEffect(() => {
    if (updateData) {
      setValue("companyName", updateData?.companyName || "");
      setValue("email", user?.email || "");
      setValue("number", updateData?.number || "");
      setValue("website", updateData?.website || "");
      setValue("aboutCompany", updateData?.aboutCompany || "");
      setValue("facebook", updateData?.facebook || "");
      setValue("twitter", updateData?.twitter || "");
      setValue("linkedin", updateData?.linkedin || "");
      setValue("github", updateData?.github || "");
      setValue("country", updateData?.country || "");
      setValue("city", updateData?.city || "");
      setValue("address", updateData?.address || "");

      if (updateData?.teamSize) {
        setTeamOptions({ value: updateData.teamSize, label: updateData.teamSize });
      }

      if (updateData?.allow) {
        setAllowOptions({ value: updateData.allow, label: updateData.allow });
      }
    }
  }, [updateData, user, setValue]);

  const onSubmit = (data) => {
    const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios
      .post(imageUrl, formData)
      .then((dataImage) => {
        const clientProfile = {
          companyName: data?.companyName,
          companyEmail: data?.email,
          companyPhone: data?.number,
          website: data?.website,
          teamSize: teamOptions?.label,
          allow: allowOptions?.label,
          aboutCompany: data?.aboutCompany,
          facebook: data?.facebook,
          twitter: data?.twitter,
          linkedin: data?.linkedin,
          github: data?.github,
          country: data?.country,
          city: data?.city,
          address: data?.address,
          image: dataImage?.data?.data?.display_url,
        };
        return saveClient(user, clientProfile);
      })
      .then((response) => {
        console.log(response);
        if (response.modifiedCount === 1) {
          toast.success("Profile updated successfully");
          navigate("/dashboard/company-view");
        } else {
          toast.error("Failed to update Profile. Please try again.");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
    }),
  };

  const teamSize = [
    { value: "smallTeam", label: "Small Team (1-10 members)" },
    { value: "mediumTeam", label: "Medium Team (11-50 members)" },
    { value: "largeTeam", label: "Large Team (51-100 members)" },
    { value: "enterpriseTeam", label: "Enterprise Team (100+ members)" },
    { value: "crossFunctionalTeam", label: "Cross-Functional Team" },
  ];

  const allowToSearch = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-1">
            Upload Company Logo
          </label>
          <input
            type="file"
            id="image"
            className="block w-full border dark:border-gray-500 text-gray-500 file:mr-4 file:py-4 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 dark:file:bg-gray-700 dark:file:text-gray-200 hover:file:bg-gray-100"
            {...register("image", {
              required: "Upload logo is required",
              validate: {
                fileSize: (file) =>
                  file[0]?.size < 1048576 || "Image size must be less than 1MB",
                fileType: (file) =>
                  /jpeg|png|gif/.test(file[0]?.type) ||
                  "Unsupported image format (jpeg/png/gif only)",
              },
            })}
          />
          {errors.image && <p className="text-red-500">{errors.image.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="companyName">Company name (optional)</label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter title"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
              {...register("companyName")}
            />
          </div>
        </div>
      <div
        key={myProfileData._id}
        className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-md my-6"
      >
        {/* Image Section */}
        <div className="md:flex justify-between">
          <div className="md:flex gap-6 items-center">
            <div className="mb-3 md:mb-0">
              <img
                className="rounded-full h-32 w-32 mx-auto md:mx-0"
                src={
                  updateData?.image ? updateData?.image : myProfileData?.image
                }
                alt=""
              />
              <Link to="/dashboard/editProfile">
                <p className="lg:hidden flex items-center justify-center gap-1 text-xl cursor-pointer text-primary pt-2 md:mt-0">
                  <BiEdit /> <span>Edit</span>
                </p>
              </Link>
            </div>
            <div className="space-y-3">
              <p className="flex flex-col text-sm">
                Full Name{" "}
                <span className="text-xl">
                  {updateData?.name2 ? updateData?.name2 : myProfileData?.name}
                </span>
              </p>
              <p className="flex flex-col text-sm">
                Email Address{" "}
                <span className="text-xl">
                  {updateData?.email ? updateData?.email : myProfileData?.email}
                </span>
              </p>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              id="number"
              defaultValue={updateData?.number || ""}
              placeholder="+88011888822"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("number")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              defaultValue={updateData?.website || ""}
              placeholder="Enter Website link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("website")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="teamSize">Team Size</label>
            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={teamOptions}
              onChange={setTeamOptions}
              options={teamSize}
              styles={customStyles}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="allow">Allow In Search & Listing</label>
            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={allowOptions}
              onChange={setAllowOptions}
              options={allowToSearch}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="aboutCompany">About Company</label>
          <textarea
            id="aboutCompany"
            placeholder="Enter About Company"
            defaultValue={updateData?.aboutCompany || ""}
            className="w-full h-60 px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("aboutCompany")}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              defaultValue={updateData?.facebook || ""}
              placeholder="Enter Facebook Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("facebook")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              id="twitter"
              defaultValue={updateData?.twitter || ""}
              placeholder="Enter Twitter Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("twitter")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="linkedin">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              defaultValue={updateData?.linkedin || ""}
              placeholder="Enter Linkedin Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("linkedin")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="github">Github</label>
            <input
              type="text"
              id="github"
              defaultValue={updateData?.github || ""}
              placeholder="Enter Github account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("github")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              defaultValue={updateData?.country || ""}
              placeholder="Enter country name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("country")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              defaultValue={updateData?.city || ""}
              placeholder="Enter city name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("city")}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address">Complete Address</label>
          <input
            type="text"
            id="address"
            defaultValue={updateData?.address || ""}
            placeholder="Enter address"
            className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("address")}
          />
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Save Profile
        </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
