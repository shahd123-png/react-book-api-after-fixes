import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";
import CardComponent from "../cardSwiper/CardComponent";

const SwiperComponent = ({ bookDataSwiper }) => {
  return (
    <Box>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
        spaceBetween={15}
        slidesPerView={4}>
        {bookDataSwiper.length > 0 ? (
          bookDataSwiper.map((item) => (
            <SwiperSlide key={item.id}>
              <CardComponent item={item} />
            </SwiperSlide>
          ))
        ) : 
        (
          <p>No books found</p>
        )}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
