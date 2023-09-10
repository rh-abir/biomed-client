import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdPermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { storage } from "../../../../firebase/firebase.config";
import "./SharePostForm.css";

const SharePostForm = () => {
  const { user } = useContext(AuthContext);
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const { data: myProfileData = [] } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const res = await axios(
        `https://biomed-server.vercel.app/users/${user?.email}`
      );
      return res.data;
    },
  });

  const { updateData } = myProfileData;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const createPostMutation = useMutation(
    async (data) => {
      setLoading(true);
      const photoFile = data.photo[0];

      if (photoFile == null) return;

      const photoRef = ref(storage, `photos/${photoFile.name + v4()}`);
      await uploadBytes(photoRef, photoFile);
      const downloadUrl = await getDownloadURL(photoRef);

      data.photo = downloadUrl;

      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to create a new post");
      }

      return response.json();
    },
    {
      onSuccess: () => {
        // Trigger a refetch of the "posts" query after a new post is created successfully
        queryClient.invalidateQueries("posts");
        toast.success("Your post uploaded successfully");
        reset();
        setLoading(false);
      },
      onError: () => {
        toast.error("Oops... post uploading failed");
        setLoading(false);
      },
    }
  );

  const onSubmit = async (data) => {
    createPostMutation.mutate(data);
  };

  return (
    <div className="share">
      <div className="p-1 md:p-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <Link to={"/community/community-profile"}>
              <div
                title="View Profile"
                className="md:mx-2 w-10 h-10  rounded-full overflow-hidden cursor-pointer"
              >
                <img
                  referrerPolicy="no-referrer"
                  src={updateData?.image ? updateData?.image : user?.photoURL}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <div>
              <input
                className="border-b-2 w-11/12 md:w-full focus:outline-none px-1 pt-1"
                placeholder="Title"
                rows={3}
                cols={20}
                {...register("title")}
              />
            </div>
          </div>
          <textarea
            className="border-b-2 w-11/12 md:w-full focus:outline-none px-6 mt-2"
            placeholder="What's in your mind?"
            rows={3}
            cols={20}
            {...register("desc")}
          />
          <div className="flex justify-between items-center px-2 cursor-pointer">
            {/* Post Items  */}
            <div className="flex items-center cursor-pointer gap-1">
              <MdPermMedia className="shareIcon text-red-500" />
              <label htmlFor="photo" className="shareOptionText">
                Photo or Video
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="photo"
                {...register("photo", {
                  required: "Please upload an image",
                })}
              />
              {errors?.photo && (
                <span className="text-red-500">{errors?.photo.message}</span>
              )}
            </div>
            {/* Share Button  */}
            <button
              type="submit"
              className="border-0 rounded-md bg-green-600 font-normal text-white text-sm md:text-base cursor-pointer px-2 py-1 md:px-4 md:py-2"
            >
              {loading ? "Sharing..." : "Share"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SharePostForm;
