import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "../../components/Shared/Container/Container";
import Cover from "../../components/Shared/Cover/Cover";
import BlogCard from "./BlogCard/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  console.log("Page Count", pageCount);

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
  }, [blogs]);

  return (
    <div className="pt-20">
      <Cover title={"Blogs"} text={"We Hope This Will Help You!"}></Cover>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-32 mt-10">
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
