import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../../components/Shared/Container/Container";
import BlogCard from "./BlogCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import BlogLatest from "./BlogLatest/BlogLatest";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  console.log("Page Count", pageCount);

  const { data: bloglatest = [] } = useQuery({
    queryKey: ["blogLatest"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/blogslatest");
      return res.data;
    },
  });

  const getBlogs = async () => {
    const respnse = await axios.get("https://biomed-server.vercel.app/blogs");
    setBlogs(respnse.data);
  };

  useEffect(() => {
    getBlogs();
  }, [page]);

  // Next button handler
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };
  // Previous button handler
  const handlePrevious = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };

  useEffect(() => {
    const pageDataCount = Math.ceil(blogs.length / 6);
    setPageCount(pageDataCount);
    if (page) {
      const limit = 6;
      const skip = limit * page;
      const dataSkip = blogs.slice(page === 1 ? 0 : skip - limit, skip); // If page value is 1 it's starting value will 0 and end value will limit * page, but if page value is 2 then it will skip previous value.
      setPageData(dataSkip);
    }
  }, [blogs, page]);

  return (
    <div className="pt-20">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 mt-10">
              {pageData.length > 0 ? (
                pageData.map((blogItems) => (
                  <BlogCard key={blogItems._id} blogItems={blogItems} />
                ))
              ) : (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-10 w-10 lg:h-20 lg:w-20 border-t-4 border-primary border-solid lg:mt-40 lg:ms-[250px]"></div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-1 mt-10">
            <div>
              <h2 className="font-semibold mb-5 text-xl">Latest Blog</h2>
              <div className="flex flex-col gap-8">
                {bloglatest.map((blog) => (
                  <BlogLatest key={blog._id} data={blog} />
                ))}
              </div>

              <div className="relative text-gray-600 border mt-20 rounded-md">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-end my-8">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm space-x-2"
            aria-label="Pagination"
          >
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className={`mr-5 ${page === 1 ? "cursor-not-allowed" : ""}`}
            >
              <span className="sr-only">Previous</span>
              <FaChevronLeft className="h-5 w-5" />
            </button>

            {Array(pageCount)
              .fill(null)
              .map((ele, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setPage(index + 1)}
                    className={`h-12 w-12 rounded-lg ${
                      page === index + 1
                        ? "bg-green-400 text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-green-400 hover:text-white"
                    } `}
                  >
                    {index + 1}
                  </button>
                );
              })}
            <button
              onClick={handleNext}
              disabled={page === pageCount}
              className={`${page === pageCount ? "cursor-not-allowed" : ""}`}
            >
              <span className="sr-only">Next</span>
              <FaChevronRight className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
