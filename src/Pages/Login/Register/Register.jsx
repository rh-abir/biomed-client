import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { saveUser } from "../../../api/auth";

const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    axios.post(imageUrl, formData).then((dataImage) => {
      createUser(data.email, data.password)
        .then((result) => {
          console.log(result.user);
          updateUser(data.name, dataImage.data.data.display_url)
            .then(() => {
              console.log(result?.user);
              saveUser(result?.user);
              toast.success("Successfully Sign Up");
              navigate(from, { replace: true });
            })
            .catch((error) => setError(error.message));
        })
        .catch((error) => setError(error.message));
    });
  };

  const gradientBg = {
    backgroundColor: "rgb(224, 231, 255)",
    backgroundImage:
      "radial-gradient(at 54% 54%, rgb(229, 229, 229) 0, transparent 70%), " +
      "radial-gradient(at 6% 91%, rgb(236, 252, 203) 0, transparent 67%), " +
      "radial-gradient(at 3% 64%, rgb(194, 65, 12) 0, transparent 45%), " +
      "radial-gradient(at 69% 78%, rgb(30, 64, 175) 0, transparent 59%), " +
      "radial-gradient(at 17% 88%, rgb(212, 212, 212) 0, transparent 14%), " +
      "radial-gradient(at 91% 95%, rgb(244, 63, 94) 0, transparent 62%)",
  };

  // TODO google authentication

  return (
    <div
      style={gradientBg}
      className="h-full md:h-1/3 2xl:min-h-screen flex items-center justify-center bg-no-repeat bg-cover lg:bg-contain m-2 md:py-10"
    >
      <div className="dark:bg-gray-800 dark:text-white  bg-gray-50 shadow-md px-6 py-8 md:px-16 lg:px-20 rounded-md">
        <div>
          <div className="mb-10 px-10 ">
            <h1 className="text-xl md:text-2xl 2xl:text-4xl font-semibold mb-5">Sign up</h1>
            <p>
              If you already have an account register <br /> You can{" "}
              <Link to={"/login"} className="text-primary">
                Login here !
              </Link>
            </p>
          </div>

          <div className="px-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 w-full"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border-b border-gray-300 dark:text-gray-700 rounded outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border-b border-gray-300 dark:text-gray-700 rounded outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4 relative">
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <input
                  type={toggle ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-2 border-b border-gray-300 dark:text-gray-700 rounded outline-none"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      message:
                        "Password must contain at least 8 characters, one letter, one number, and one special character",
                    },
                  })}
                />

                <div
                  onClick={() => setToggle(!toggle)}
                  className="absolute cursor-pointer right-5 bottom-2"
                >
                  {toggle ? (
                    <AiFillEye className="text-xl text-gray-600" />
                  ) : (
                    <AiFillEyeInvisible className="text-xl text-gray-600" />
                  )}
                </div>

                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-4 relative">
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <input
                  type={toggle2 ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full p-2 border-b border-gray-300 dark:text-gray-700 rounded outline-none"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "The passwords do not match",
                  })}
                />
                <div
                  onClick={() => setToggle2(!toggle2)}
                  className="absolute cursor-pointer right-5 bottom-2"
                >
                  {toggle2 ? (
                    <AiFillEye className="text-xl text-gray-600" />
                  ) : (
                    <AiFillEyeInvisible className="text-xl text-gray-600" />
                  )}
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="image" className="block mb-1">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  className="block w-full border text-gray-500
                  file:mr-4 file:py-4 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-200 file:text-gray-700
                  hover:file:bg-gray-100
                "
                  {...register("image", {
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

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-primary w-full rounded-3xl text-white py-3 px-4  hover:bg-[#65ca73]"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-1 text-red-500">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;