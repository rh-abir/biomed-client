import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TrendingTasks.css";

// Required modules
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import Container from "../../../components/Shared/Container/Container";
import TrendingSlide from "./TrendingSlide/TrendingSlide";

const TrendingTasks = () => {
  const { isLoading, data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios("/TrendingTasksData/trendingTasks.json");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <SectionTitle
        heading={"Trending Tasks"}
        text={"Most viewed and all-time top Tasks"}
      />
      <div className="w-full px-4 mx-auto">
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
      </div>
    </Container>
  );
};

export default TrendingTasks;
