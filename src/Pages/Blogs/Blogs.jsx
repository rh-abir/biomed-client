import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Container from "../../components/Shared/Container/Container";
import BlogLatest from "./BlogLatest/BlogLatest";

const Blogs = () => {
  const {  setSearchBlogs, searchBlogs, getBlogsData } = useContext(AuthContext);

  const { data: bloglatest = [] } = useQuery({
    queryKey: ["blogLatest"],
    queryFn: async () => {
      const res = await axios.get(
        "https://biomed-server.vercel.app/blogslatest"
      );
      return res.data;
    },
  });

  // Search functionality
  const [searchBlogText, setSerchBlogText] = useState("");
  const handleSearch = () => {
    setSearchBlogs(searchBlogText)
  };

  return (
    <div className="pt-20">
      <Container>
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="col-span-3">
            <Outlet />
          </div>
          <div className="col-span-1 my-10">
            <div>
              <h2 className="font-semibold mb-5 text-xl">Latest Blog</h2>
              <div className="flex flex-col gap-8">
                {searchBlogs
                  ? getBlogsData.map((blog) => (
                      <BlogLatest key={blog._id} data={blog} />
                    ))
                  : bloglatest.map((blog) => (
                      <BlogLatest key={blog._id} data={blog} />
                    ))}
              </div>

              <div className=" text-gray-600 border-none mt-20 rounded-md w-full flex items-center">
                <input
                  type="search"
                  name="search"
                  onChange={(e) => setSerchBlogText(e.target.value)}
                  placeholder="Search"
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-full"
                />
                <button onClick={handleSearch} type="submit">
                  <BiSearch className="-ms-6 text-gray-600 text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
