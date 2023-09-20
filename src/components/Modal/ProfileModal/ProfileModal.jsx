import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Fragment } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ProfileModal = ({ closeModal, isOpen, email }) => {
  const { data: userData = {}, refetch } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const res = await axios.get(
        `https://biomed-server.vercel.app/users/${email}`
      );
      return res.data;
    },
  });


  // TODO get all user

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={closeModal}>
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
                <Dialog.Title
                  as="h3"
                  className=" bg-gray-100 py-10 px-5 rounded-lg leading-6 text-2xl font-semibold text-gray-900"
                >
                  User Profile
                </Dialog.Title>
                {userData ? (
                  <div className="bg-white p-6 rounded-lg">
                    <div className="flex items-center">
                      <img
                        src={userData?.image}
                        alt={userData?.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h2 className="text-2xl font-bold">{userData?.name}</h2>
                        <p className="text-gray-600">{userData.email}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">About Me</h3>
                      <p className="text-gray-700">
                        {userData?.updateData?.description
                          ? userData?.updateData?.description
                          : "No data"}
                      </p>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">
                        Contact Information
                      </h3>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>
                          Phone:{" "}
                          {userData?.updateData?.phone
                            ? userData?.updateData?.phone
                            : "01xxx-xxxxxx"}
                        </li>
                        <li>
                          Email:{" "}
                          {userData?.updateData?.email
                            ? userData?.updateData?.email
                            : "example@gmail.com"}
                        </li>
                        <li>
                          Website:{" "}
                          <a
                            href={userData?.updateData?.website}
                            className="text-blue-500"
                          >
                            {userData?.website ? userData?.website : "www.exapmle.com"}
                          </a>
                        </li>
                        <li>
                          Country:{" "}
                          {userData?.updateData?.country
                            ? userData?.updateData?.country
                            : "no country  "}
                        </li>
                        <li>
                          City:{" "}
                          {userData?.updateData?.city
                            ? userData?.updateData?.city
                            : "no city "}
                        </li>
                        <li>
                          Language:{" "}
                          {userData?.updateData?.language
                            ? userData?.updateData?.language
                            : "no language"}
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Education</h3>
                      <p className="text-gray-700">
                        {userData?.updateData?.education
                          ? userData?.updateData?.education
                          : "empty "}
                      </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Social Media</h3>
                      {userData?.linkedin && (
                        <a
                          href={userData.updateData?.linkedin}
                          className="text-blue-500 hover:underline block mb-2"
                        >
                          LinkedIn
                        </a>
                      )}
                      {userData?.twitter && (
                        <a
                          href={userData?.updateData?.twitter}
                          className="text-blue-500 hover:underline block mb-2"
                        >
                          Twitter
                        </a>
                      )}
                      {/* Add more social media links as needed */}
                    </div>
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProfileModal;
