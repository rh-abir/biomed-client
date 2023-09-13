import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css"; // Import Skeleton CSS
import "./TrendingTasks.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import Container from "../../../components/Shared/Container/Container";
import TrendingSlide from "./TrendingSlide/TrendingSlide";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; // Import Skeleton and SkeletonTheme

const TrendingTasks = () => {
  const { isLoading, data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios("/TrendingTasksData/trendingTasks.json");
      return res.data;
    },
  });

  return (
    <Container>
      <SectionTitle
        heading={"Trending Tasks"}
        text={"Most viewed and all-time top Tasks"}
      />
      <div className="w-full px-4 mx-auto">
        <SkeletonTheme color="#f3f3f3" highlightColor="#ecebeb"> {/* Customize colors */}
          {isLoading ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-white p-4 rounded shadow">
                  <Skeleton height={200} />
                  <Skeleton height={20} width={200} className="mt-2" />
                  <Skeleton height={20} width={250} className="mt-1" />
                  <div className="flex justify-between">
                    <Skeleton circle height={50} width={50} className="mt-1" />
                    <Skeleton  height={20} width={60} className=" mt-5" />
                    <div>
                      <Skeleton  height={20} width={100} className="ml-4 mt-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={30}
              freeMode={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, FreeMode, Navigation, Pagination]}
              className="mySwiper"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1920: {
                  slidesPerView: 4,
                },
              }}
            >
              {tasks.map((task) => (
                <SwiperSlide key={task._id}>
                  <TrendingSlide task={task} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </SkeletonTheme>
      </div>
    </Container>
  );
};

export default TrendingTasks;
