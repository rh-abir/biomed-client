import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../../components/Shared/Container/Container";
import SectionTitle from "../../../components/Shared/SectionTitle/SectionTitle";
import TestimonialItem from "./TestimonialItem/TestimonialItem";

import './UserTestimonials.css';

const UserTestimonials = () => {
  const { isLoading, data: testimonials = [] } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_BASE_URL}/testimonials`);
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dark:bg-gray-800 py-28">
      <Container className="dark:bg-gray-800">
        <SectionTitle
          heading={"User Testimonials"}
          text={
            "Discover how our platform has transformed tasks and projects for our users."
          }
        />
        <div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow]}
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
            {testimonials.map((userFeedback, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem userFeedback={userFeedback} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default UserTestimonials;
