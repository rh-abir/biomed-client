import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import CreatableSelect from "react-select/creatable";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../../../firebase/firebase.config";
import LoaderAdvanced from "../../../../components/Loader/LoaderAdvanced";
import { useAxiosSecure } from "../../../../components/hook/useAxiosSecure";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const TaskForm = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [skillOptions, setSkillOptions] = useState(null);
  const [jobOptions, setJobOptions] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState(null);
  const [qualificationOptions, setQualificationOptions] = useState(null);
  const [genderOptions, setGenderOptions] = useState(null);
  const [startDateOptions, setStartDateOptions] = useState(null);
  const [pointsOptions, setPointsOptions] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const skills = [
    { value: "research", label: "Research Skills" },
    { value: "critical-thinking", label: "Critical Thinking" },
    { value: "communication", label: "Communication Skills" },
    { value: "problem-solving", label: "Problem Solving" },
    { value: "time-management", label: "Time Management" },
    { value: "analytical", label: "Analytical Skills" },
    { value: "teamwork", label: "Teamwork/Collaboration" },
    { value: "technical-proficiency", label: "Technical Proficiency" },
    { value: "adaptability", label: "Adaptability" },
    { value: "presentation", label: "Presentation Skills" },
  ];

  const tasksTypes = [
    { value: "assignment", label: "Assignment" },
    { value: "quiz", label: "Quiz" },
    { value: "project", label: "Project" },
    { value: "presentation", label: "Presentation" },
    { value: "caseStudy", label: "Case Study" },
    { value: "groupWork", label: "Group Work" },
    { value: "codingProgramming", label: "Coding/Programming" },
    { value: "labReport", label: "Lab Report" },
  ];

  const startDate = [
    { value: "immediately", label: "Immediately" },
    { value: "withinTwoWeeks", label: "Within Two Weeks" },
    { value: "withinOneMonth", label: "Within One Month" },
    { value: "flexible", label: "Flexible" },
  ];

  const categories = [
    { value: "science", label: "Science" },
    { value: "mathematics", label: "Mathematics" },
    { value: "literature", label: "Literature" },
    { value: "history", label: "History" },
    { value: "technology", label: "Technology" },
    { value: "business", label: "Business" },
    { value: "arts", label: "Arts" },
    { value: "healthAndWellness", label: "Health and Wellness" },
    { value: "retail", label: "Social Sciences" },
  ];

  const qualification = [
    { value: "highSchool", label: "High School Diploma" },
    { value: "bachelorsDegree", label: "Bachelor's Degree" },
    { value: "mastersDegree", label: "Master's Degree" },
    { value: "phd", label: "Ph.D." },
    { value: "certification", label: "Professional Certification" },
  ];

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "both", label: "Both" },
    { value: "other", label: "Other" },
  ];

  const points = [
    { value: "10", label: "10 points" },
    { value: "25", label: "25 points" },
    { value: "50", label: "50 points" },
    { value: "75", label: "75 points" },
    { value: "100", label: "100 points" },
  ];

  const onSubmit = (data) => {
    setLoading(true);
    const attachmentFile = data.attachment[0];
    console.log(attachmentFile);

    if (attachmentFile == null) return;

    const resumeRef = ref(storage, `attachments/${attachmentFile.name + v4()}`);
    uploadBytes(resumeRef, attachmentFile).then(() => {
      getDownloadURL(resumeRef).then((downloadUrl) => {
        const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

        const formData1 = new FormData();
        formData1.append("image", data.image1[0]);

        const formData2 = new FormData();
        formData2.append("image", data.image2[0]);

        Promise.all([
          axios.post(imageUrl, formData1),
          axios.post(imageUrl, formData2),
        ]).then(([dataImage1, dataImage2]) => {
          const currentData = {
            title: data.name,
            companyName: data.companyName,
            email: user?.email,
            description: data.description,
            username: data.username,
            grading: data.grading,
            country: data.country,
            city: data.city,
            deadline: data.deadline,
            address: data.address,
            skills: skillOptions,
            jobType: jobOptions.label,
            qualification: qualificationOptions.label,
            gender: genderOptions.label,
            industry: categoryOptions.label,
            startDate: startDateOptions.label,
            logo: dataImage1.data.data.display_url,
            thumbnail: dataImage2.data.data.display_url,
            attachment: downloadUrl,
            date: new Date(),
          };
          axiosSecure.post(`/jobs`, currentData).then((data) => {
            if (data.data.insertedId) {
              reset();
              toast.success("Successfully Added Job");
              setLoading(false);
            } else {
              toast.error("Task Added failed");
              setLoading(false);
            }
          });
        });
      });
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

  return (
    <div className="mt-10 dark:bg-gray-800 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2  lg:gap-10">
          <div className="mb-4">
            <label htmlFor="image" className="block mb-1">
              Upload Task Logo
            </label>
            <input
              type="file"
              id="image"
              className="block w-full border text-gray-500
                file:mr-4 file:py-4 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                dark:file:bg-gray-400
                file:bg-gray-200 file:text-gray-700
                hover:file:bg-gray-100
              "
              {...register("image1", {
                required: "Image is required",
                validate: {
                  fileSize: (file) =>
                    file[0]?.size < 1048576 ||
                    "Image size must be less than 1MB",
                  fileType: (file) =>
                    /jpeg|png|gif/.test(file[0]?.type) ||
                    "Unsupported image format (jpeg/png/gif only)",
                },
              })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block mb-1">
              Upload Task Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              className="block w-full border text-gray-500
                file:mr-4 file:py-4 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                dark:file:bg-gray-400
                file:bg-gray-200 file:text-gray-700
                hover:file:bg-gray-100
              "
              {...register("image2", {
                required: "Thumbnail is required",
                validate: {
                  fileSize: (file) =>
                    file[0]?.size < 1048576 ||
                    "thumbnail size must be less than 1MB",
                  fileType: (file) =>
                    /jpeg|png|gif/.test(file[0]?.type) ||
                    "Unsupported image format (jpeg/png/gif only)",
                },
              })}
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="attachment" className="block mb-1">
            Upload Task Attachments
          </label>
          <input
            type="file"
            id="attachment"
            className="block w-full border text-gray-500
      file:mr-4 file:py-4 file:px-4
      file:rounded-md file:border-0
      file:text-sm file:font-semibold
      dark:file:bg-gray-400
      file:bg-gray-200 file:text-gray-700
      hover:file:bg-gray-100"
            {...register("attachment", {
              required: "Attachment is required",
              validate: {
                fileType: (file) => {
                  const allowedFormats = ["pdf", "doc", "docx", "txt"];
                  const fileExtension = file[0]?.name.split(".").pop();
                  return (
                    allowedFormats.includes(fileExtension) ||
                    "Unsupported file format (pdf, doc, docx, txt only)"
                  );
                },
              },
            })}
          />
          {errors.attachment && (
            <p className="text-red-500">{errors.attachment.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="mb-4">
            <label htmlFor="name">Task Title</label>
            <input
              type="text"
              id="name"
              placeholder="Enter title"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
              {...register("name", { required: "Title is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="name">Company Name (optional) </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter title"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName.message}</p>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-5">
          <div className="mb-4">
            <label htmlFor="name">Email Address</label>

            <input
              type="email"
              id="email"
              defaultValue={user?.email}
              placeholder="email"
              className="w-full px-5 py-4 cursor-not-allowed dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="name">Username</label>

            <input
              type="text"
              id="username"
              placeholder="username"
              defaultValue={user?.displayName}
              className="w-full px-5 py-4 dark:bg-slate-700 cursor-not-allowed bg-[#F1F5F9] rounded-md outline-none"
              {...register("username")}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Task Description</label>

          <textarea
            id="description"
            placeholder="Enter task description"
            className="w-full h-60 px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("description", {
              required: "Task Description is required",
            })}
          ></textarea>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="description">Grading Criteria/Rubric</label>

          <textarea
            id="grading"
            placeholder="Enter task Grading Criteria/Rubric"
            className="w-full h-60 px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("grading", {
              required: "Task Grading Criteria/Rubric is required",
            })}
          ></textarea>
          {errors.grading && (
            <p className="text-red-500">{errors.grading.message}</p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Start Date</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={startDateOptions}
              onChange={setStartDateOptions}
              options={startDate}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Specialisms</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={skillOptions}
              onChange={setSkillOptions}
              options={skills}
              styles={customStyles}
              isMulti
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Task Type</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={jobOptions}
              onChange={setJobOptions}
              options={tasksTypes}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Gender</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={genderOptions}
              onChange={setGenderOptions}
              options={gender}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name">Categories Task</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={categoryOptions}
              onChange={setCategoryOptions}
              options={categories}
              styles={customStyles}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qualification">Qualification</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={qualificationOptions}
              onChange={setQualificationOptions}
              options={qualification}
              styles={customStyles}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="qualification">Point Option</label>

            <CreatableSelect
              className="w-full px-4 py-2 dark:bg-slate-700 bg-gray-100 border rounded-md focus:ring focus:ring-blue-300"
              defaultValue={pointsOptions}
              onChange={setPointsOptions}
              options={points}
              styles={customStyles}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="deadline">Application Deadline Date</label>

          <input
            type="date"
            id="deadline"
            placeholder="Enter application deadline"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("deadline", { required: "Title is required" })}
          />
          {errors.deadline && (
            <p className="text-red-500">{errors.deadline.message}</p>
          )}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="name">Country</label>

            <input
              type="text"
              id="country"
              placeholder="Enter country name"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
              {...register("country", { required: "Title is required" })}
            />
            {errors.country && (
              <p className="text-red-500">{errors.country.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name">City</label>

            <input
              type="text"
              id="city"
              placeholder="Enter city name"
              className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="text-red-500">{errors.city.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="name">Complete Address</label>

          <input
            type="text"
            id="address"
            placeholder="Enter address"
            className="w-full px-5 py-4  dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          {loading ? "Task Adding..." : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
