import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import TimeLine from "../TimeLine";

export default function Carroussel() {
  return (
    <>
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "100%", textAlign: "center", padding:'10px', boxSizing:'border-box' }}>
          <p>
            I'm a junior developer. I like to accept challenges, and solve
            complex problems, I really enjoy studying programming languages
            ​​and learning about new technologies, it's fun. All the time I have
            I dedicate to learning new features and ideas to add to my projects,
            so that they perform better. I understand that the world is full of
            challenges, and I'm ready to meet every last one of them, that's
            what makes me most excited about my career!
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <TimeLine />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
