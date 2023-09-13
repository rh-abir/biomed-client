import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Fragment } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ProfileModal = ({ closeModal, isOpen, email }) => {
  const { data: user = {}, refetch } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/users/${email}`
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
                {user ? (
                  <div className="bg-white p-6 rounded-lg">
                    <div className="flex items-center">
                      <img
                        src={user?.image}
                        alt={user?.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h2 className="text-2xl font-bold">{user?.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">About Me</h3>
                      <p className="text-gray-700">
                        {user?.updateData?.description
                          ? user?.updateData?.description
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
                          {user?.updateData?.phone
                            ? user?.updateData?.phone
                            : "01xxx-xxxxxx"}
                        </li>
                        <li>
                          Email:{" "}
                          {user?.updateData?.email
                            ? user?.updateData?.email
                            : "example@gmail.com"}
                        </li>
                        <li>
                          Website:{" "}
                          <a
                            href={user?.updateData?.website}
                            className="text-blue-500"
                          >
                            {user?.website ? user?.website : "www.exapmle.com"}
                          </a>
                        </li>
                        <li>
                          Country:{" "}
                          {user?.updateData?.country
                            ? user?.updateData?.country
                            : "no country  "}
                        </li>
                        <li>
                          City:{" "}
                          {user?.updateData?.city
                            ? user?.updateData?.city
                            : "no city "}
                        </li>
                        <li>
                          Language:{" "}
                          {user?.updateData?.language
                            ? user?.updateData?.language
                            : "no language"}
                        </li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Education</h3>
                      <p className="text-gray-700">
                        {user?.updateData?.education
                          ? user?.updateData?.education
                          : "empty "}
                      </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">Social Media</h3>
                      {user?.linkedin && (
                        <a
                          href={user.updateData?.linkedin}
                          className="text-blue-500 hover:underline block mb-2"
                        >
                          LinkedIn
                        </a>
                      )}
                      {user?.twitter && (
                        <a
                          href={user?.updateData?.twitter}
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
