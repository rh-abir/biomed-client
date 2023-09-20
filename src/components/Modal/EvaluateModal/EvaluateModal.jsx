import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { storage } from "../../../firebase/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import CreatableSelect from "react-select/creatable";

const EvaluateModal = ({ closeModal, isOpen, applicantInfo }) => {
  const [pointsOptions, setPointsOptions] = useState(null);
  const {
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const points = [
    { value: "1", label: "1 points" },
    { value: "2", label: "2 points" },
    { value: "3", label: "3 points" },
    { value: "4", label: "4 points" },
    { value: "5", label: "5 points" },
  ];

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

  const onSubmit = (data) => {
    const resumeFile = data.resume[0];

    if (resumeFile == null) return;

    const resumeRef = ref(storage, `report/${resumeFile.name + v4()}`);
    uploadBytes(resumeRef, resumeFile).then(() => {
      getDownloadURL(resumeRef).then((downloadUrl) => {
        const evaluateTask = {
          downloadEvaluate: downloadUrl,
          feedback: data?.feedback,
          isEvaluate: true,
          point: pointsOptions,
        };

        axios
          .put(
            `https://biomed-server.vercel.app/appliedjob/${applicantInfo?._id}`,
            evaluateTask
          )
          .then((response) => {
            console.log(response);
            reset();
            toast.success("Evaluate Successfully");
            closeModal();
          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-end mb-3">
                  <button
                    type="button"
                    className="text-3xl text-red-500 bg-red-300 p-1 rounded-full hover:bg-red-400 hover:text-gray-50 transition"
                    onClick={closeModal}
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
                <div className="text-xl mb-3">
                  <span className="font-semibold">Evaluate Task:</span>{" "}
                  {applicantInfo?.appliedjobdata.title}
                </div>
                <Dialog.Title
                  as="h3"
                  className=" bg-gray-100 py-10 px-5 rounded-lg leading-6 text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        className="w-16 h-16 object-cover rounded-full"
                        src={applicantInfo?.appliedjobdata.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="text-xl font-semibold">
                        {applicantInfo?.appliedjobdata.name
                          ? applicantInfo?.appliedjobdata.name
                          : "Name not found"}
                      </div>
                      <h3 className="">
                        {applicantInfo?.appliedjobdata.email
                          ? applicantInfo?.appliedjobdata.email
                          : "email not found"}
                      </h3>
                    </div>
                  </div>
                </Dialog.Title>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5 mt-5"
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="resume"
                    >
                      Upload Evaluate Report
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register("resume")}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
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

                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="coverLetter"
                    >
                      Give this user feedback
                    </label>
                    <textarea
                      rows="10"
                      {...register("feedback")}
                      className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-primary hover:bg-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Evaluate Task
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EvaluateModal;
