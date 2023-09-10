import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const PostEditModal = ({ setIsEditModalOpen, title, desc, postId }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://localhost:5000/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          Swal.fire("Success", "Post updated successfully", "success");
          closeEditModal()
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Error", "Failed to update post. Please try again.", "error");
      });
  };

  // Function to close the edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10 px-2">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Edit Post</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row items-center gap-2 mb-2">
            {/* image field */}
            <input
              type="file"
              name="photo"
              {...register("photo")}
              className="w-full px-5 py-4 bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
            />
            {/* title field */}
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title || ""}
              {...register("title")}
              //   onChange={handleInputChange}
              className="w-full px-5 py-4 bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
            />
          </div>
          <textarea
            name="description"
            placeholder="Description"
            defaultValue={desc || ""}
            {...register("desc")}
            className="w-full px-5 py-4 bg-slate-100 border focus:border-green-600 transition rounded-md outline-none"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 duration-500"
            type="submit"
          >
            Save
          </button>
          <button
            onClick={closeEditModal}
            className="bg-red-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-red-700 duration-500"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostEditModal;
