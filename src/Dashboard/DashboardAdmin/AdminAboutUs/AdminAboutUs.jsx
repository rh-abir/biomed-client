import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DashboardTitle from "../../../components/DashboardTitle/DashboardTitle";

const AdminAboutUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const descOne = data.descOne;
    const descTwo = data.descTwo;
    const pointOne = data.pointOne;
    const pointTwo = data.pointTwo;
    const pointThree = data.pointThree;
    const updatedAboutUs = {
      descOne,
      descTwo,
      pointOne,
      pointTwo,
      pointThree,
    };
    fetch("http://localhost:5000/aboutDetails", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedAboutUs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          reset();
          toast.success("Updated Successfully");
        } else {
          toast.error("Update Faild");
        }
      });
  };

  //   Getting data for Default value
  const { data: aboutUs = [] } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/aboutDetails");
      return res?.data;
    },
  });
  
  console.log("About data", aboutUs[0]?.descOne);
  
  return (
    <div className="px-10 py-6 bg-gray-100 min-h-screen">
      <DashboardTitle title={"About Us"} slogan={"Update Info"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="descOne">Description 1</label>
          <textarea
            type="text"
            id="descOne"
            placeholder="Enter Description"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            defaultValue={aboutUs[0]?.descOne}
            {...register("descOne")}
          />
          {errors.descOne && (
            <p className="text-red-500">{errors.descOne.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="descTwo">Description 2</label>
          <textarea
            type="text"
            id="descTwo"
            placeholder="Enter Description"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            defaultValue={aboutUs[0]?.descTwo}
            {...register("descTwo")}
          />
          {errors.descTwo && (
            <p className="text-red-500">{errors.descTwo.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="pointOne">Point 1</label>
          <input
            type="text"
            id="pointOne"
            placeholder="Enter Point"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            defaultValue={aboutUs[0]?.pointOne}
            {...register("pointOne")}
          />
          {errors.pointOne && (
            <p className="text-red-500">{errors.pointOne.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="pointTwo">Point 2</label>
          <input
            type="text"
            id="pointTwo"
            placeholder="Enter Point"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            defaultValue={aboutUs[0]?.pointTwo}
            {...register("pointTwo")}
          />
          {errors.pointTwo && (
            <p className="text-red-500">{errors.pointTwo.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="pointThree">Point 3</label>
          <input
            type="text"
            id="pointThree"
            placeholder="Enter Point"
            className="w-full px-5 py-4 dark:bg-slate-700 bg-[#F1F5F9] rounded-md outline-none"
            defaultValue={aboutUs[0]?.pointThree}
            {...register("pointThree")}
          />
          {errors.pointThree && (
            <p className="text-red-500">{errors.pointThree.message}</p>
          )}
        </div>
        <button
          className="bg-primary px-10 py-3 text-lg font-semibold rounded-md text-gray-50 mt-10"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default AdminAboutUs;
