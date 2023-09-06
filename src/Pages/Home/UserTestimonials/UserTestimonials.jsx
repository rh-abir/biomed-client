import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

const UserTestimonials = () => {
  const { isLoading, data: feadback = [] } = useQuery({
    queryKey: ["feadback"],
    queryFn: async () => {
      const res = await axios("http://localhost:5000/testimonials");
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-gray-800 bg-[#f4fdf4] py-10">
      <Container>
        <SectionTitle
          heading={"User Testimonials"}
          text={
            "Discover how our platform has transformed tasks and projects for our users."
          }
        />
        <Swiper
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {feadback.map((pre, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem task={pre} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default UserTestimonials;
