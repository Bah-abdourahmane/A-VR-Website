import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { slider } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
     breakpoints={{
      320:{
        slidesPerView :1,
        spaceBetween : 18,
      },
      768:{
        slidesPerView :2,
        spaceBetween : 20,
      },
      1024:{
        slidesPerView :3,
        spaceBetween : 30,
      },
     }}
    >
      {slider.map(({ message, image, name, email }, index) => (
        <SwiperSlide className="rounded-lg p-4 bg-gradient-to-t from-[#130613] via-[#2a1428] top-[#331a35] min-h-[240px] lg:p-6 " key={index} >
          <p className="mb-8 min-h-[100px] text-base">{message}</p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="w-12">
              <img src={image} alt="" className="mb-3 md:mb-0" />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-base">{name}</span>
              <span className="font-medium text-rose-600">{email}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
