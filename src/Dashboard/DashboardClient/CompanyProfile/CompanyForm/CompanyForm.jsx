import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../../../Provider/AuthProvider";
import axios from "axios";
import { saveClient } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const CompanyForm = () => {
  const { user } = useContext(AuthContext);
  const [teamOptions, setTeamOptions] = useState(null);
  const [allowOptions, setAllowOptions] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

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
            className="block w-full border dark:border-gray-500 text-gray-500
                file:mr-4 file:py-4 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-gray-200 file:text-gray-700 dark:file:bg-gray-700 dark:file:text-gray-200
                hover:file:bg-gray-100
              "
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
            <label htmlFor="name">Company name (optional)</label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter title"
              defaultValue={
                updateData?.companyName ? updateData?.companyName : null
              }
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none dark:bg-gray-700 dark:border-gray-500"
              {...register("companyName")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              disabled
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none cursor-not-allowed"
              {...register("email")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Phone Number</label>
            <input
              type="text"
              id="number"
              defaultValue={updateData?.number ? updateData?.number : null}
              placeholder="+88011888822"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("number")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Website</label>
            <input
              type="text"
              id="website"
              defaultValue={updateData?.website ? updateData?.website : null}
              placeholder="Enter Website link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("website")}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Team Size</label>

            <CreatableSelect
              className="w-full px-4 py-2 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={teamOptions}
              onChange={setTeamOptions}
              options={teamSize}
              styles={customStyles}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Allow In Search & Listing</label>

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
          <label htmlFor="description">About Company</label>

          <textarea
            id="aboutCompany"
            placeholder="Enter About Company"
            defaultValue={
              updateData?.aboutCompany ? updateData?.aboutCompany : null
            }
            className="w-full h-60 px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
            {...register("aboutCompany")}
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Facebook</label>
            <input
              type="text"
              id="facebook"
              defaultValue={updateData?.facebook ? updateData?.facebook : null}
              placeholder="Enter Facebook Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("facebook")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Twitter</label>
            <input
              type="text"
              id="twitter"
              defaultValue={updateData?.twitter ? updateData?.twitter : null}
              placeholder="Enter Twitter Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("twitter")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Linkedin</label>
            <input
              type="text"
              id="linkedin"
              defaultValue={updateData?.linkedin ? updateData?.linkedin : null}
              placeholder="Enter Linkedin Account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("linkedin")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Github</label>
            <input
              type="text"
              id="github"
              defaultValue={updateData?.github ? updateData?.github : null}
              placeholder="Enter Github account Link"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("github")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Country</label>

            <input
              type="text"
              id="country"
              defaultValue={updateData?.country ? updateData?.country : null}
              placeholder="Enter country name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("country")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">City</label>

            <input
              type="text"
              id="city"
              defaultValue={updateData?.city ? updateData?.city : null}
              placeholder="Enter city name"
              className="w-full px-5 py-4 bg-[#F1F5F9] rounded-md outline-none"
              {...register("city")}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="name">Complete Address</label>

          <input
            type="text"
            id="address"
            defaultValue={updateData?.address ? updateData?.address : null}
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
      </form>
    </div>
  );
};

export default CompanyForm;
