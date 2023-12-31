import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../Provider/AuthProvider";

const FeedbackForm = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/postFeedback`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Your feedback has added successfully");
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Opps... feedback added faild");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mb-4 shadow-lg p-4 md:p-10 rounded-lg bg-white dark:bg-slate-800 dark:text-white"
      >
        <div className="hidden">
          <div className="md:flex gap-3">
            <div className="mb-4 md:w-1/3">
              <label htmlFor="user_image" className="block mb-2">
                Your Photo:
              </label>
              <input
                type="url"
                id="user_image"
                defaultValue={user?.photoURL}
                readOnly
                {...register("user_image", { required: true })}
                className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
              />
            </div>
            <div className="mb-4 md:w-1/3">
              <label htmlFor="user_name" className="block mb-2">
                Your Name:
              </label>
              <input
                type="text"
                id="user_name"
                defaultValue={user?.displayName}
                readOnly
                {...register("user_name", { required: true })}
                className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4 md:w-1/3">
              <label htmlFor="user_email" className="block mb-2">
                Your Email:
              </label>
              <input
                type="text"
                id="user_email"
                readOnly
                defaultValue={user?.email}
                className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
                {...register("user_email", { required: true })}
              />
            </div>
          </div>
        </div>
        {/*Ratings Field */}
        <div className="mb-4 cursor-pointer">
          <label htmlFor="ratings">Give Ratings</label>
          <select
            className="w-full px-4 py-5 dark:bg-slate-800  bg-slate-100 border rounded-md focus:border-blue-600 mt-2 cursor-pointer"
            {...register("ratings")}
          >
            <option className="cursor-pointer py-2" value="1">
              1
            </option>
            <option className="cursor-pointer py-2" value="2">
              2
            </option>
            <option className="cursor-pointer py-2" value="3">
              3
            </option>
            <option className="cursor-pointer py-2" value="4">
              4
            </option>
            <option className="cursor-pointer py-2" value="5">
              5
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="feedback" className="block mb-2">
            Your Feedback:
          </label>
          <textarea
            id="feedback"
            {...register("feedback", { required: true })}
            className="w-full px-5 py-4 dark:bg-slate-800 dark:text-white bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
            rows={4}
            placeholder="Write Your Feedback"
          />
          {errors.feedback && (
            <span className="text-red-500">
              You have to write something before submit
            </span>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 duration-500 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline text-xl md:w-1/6"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
