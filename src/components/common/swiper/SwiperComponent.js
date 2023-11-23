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
import { fetchDataFromApi } from "../../../utilities/ApiFetch";

const SwiperComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSwiperData = async () => {
      try {
        const result = await fetchDataFromApi();
        
        if (result?.items?.length > 0) {
          setData(result.items);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSwiperData();
  }, []);

  return (
    <Box>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{
          clickable: true,
        }}
        spaceBetween={15}
        slidesPerView={4}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <CardComponent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperComponent;
