import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { saveUser } from "../../../api/auth";

const Login = () => {
  const { loginUser, googleLoginUser, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");

  const [toggle, setToggle] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogle = () => {
    googleLoginUser()  
      .then((result) => {
        saveUser(result.user);
        navigate(from, { replace: true });
        toast.success("Successfully login with Google");
      })
      .catch((error) => setError(error.message));
  };

  const resetPass = () => {
    const targetEmail = document.getElementById("email").value;
    resetPassword(targetEmail)
      .then((result) => {
        console.log(result.user);
        toast.success("Check your email");
      })
      .catch((error) => console.log(error.message));
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

  return (
    <div
      style={gradientBg}
      className=" lg:min-h-screen h-screen flex items-center justify-center bg-no-repeat bg-cover lg:bg-contain"
    >
      <div className="dark:bg-gray-800 dark:text-white bg-gray-50 px-5 md:px-12 lg:px-20 py-12  rounded-md shadow-md">
        <div>
          <div className="mb-10 px-10">
            <h1 className="text-4xl font-semibold mb-5">Sign in</h1>
            <p>
              If you don’t have an account register <br /> You can{" "}
              <Link to={"/register"} className="text-primary">
                Register here !
              </Link>
            </p>
          </div>

          <div className="px-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 w-full"
            >
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full p-2 border-b border-gray-300 dark:text-gray-700 rounded outline-none"
                  {...register("email", {
                    required: "Email is required",
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
                  className="w-full p-2 border-b text-gray-600 border-gray-300 dark:text-gray-700 rounded outline-none"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <div
                  onClick={() => setToggle(!toggle)}
                  className="absolute cursor-pointer right-0 bottom-2"
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

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-primary w-full text-white py-2 px-4 hover:bg-hover rounded-3xl"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="mt-4 flex justify-between cursor-pointer">
              <p className="text-red-500">{error}</p>
              <div onClick={resetPass} className="text-primary hover:underline">
                Reset Password
              </div>
            </div>

            <h2 className="text-center my-10 text-gray-600">
              or continue with
            </h2>

            <div className="flex items-center justify-center ">
              <button
                onClick={handleGoogle}
                className="flex items-center gap-3 border px-10 text-2 py-3 rounded-md hover:bg-gray-100 hover:text-gray-700 transition"
              >
                <FcGoogle />
                Login with google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
