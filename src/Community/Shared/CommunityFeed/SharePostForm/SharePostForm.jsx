import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { MdPermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import "./SharePostForm.css";
// const imageToken = import.meta.env.VITE_UPLOAD_TOKEN;

const SharePostForm = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
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
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // const imageUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;
    // const formData = new FormData();
    // formData.append("image", data.image);

    // axios
    //   .post(imageUrl, formData)
    //   .then((dataImage) => {
    //     const postData = {
    //       title: data?.title,
    //       desc: data?.desc,
    //       image: dataImage?.data?.data?.display_url,
    //     };
    //     return postData;
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     toast.error(error.message);
    //   });
    //------------------------------
    fetch("https://biomed-server.vercel.app/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Your post uploaded successfully");
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Opps... post uploading faild");
      })
      .finally(() => {
        setLoading(false);
      });
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
          <div className="flex justify-between items-center px-2">
            {/* Post Items  */}
            <div className="flex items-center cursor-pointer">
              <MdPermMedia className="shareIcon text-red-500" />
              <label htmlFor="photo" className="shareOptionText">
                Photo or Video
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                id="photo"
                {...register("photo")}
              />
            </div>
            {/* Share Button  */}
            <button
              type="submit"
              className="border-0 rounded-md bg-green-600 font-normal text-white text-sm md:text-base cursor-pointer px-2 py-1 md:px-4 md:py-2"
              disabled={loading}
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
