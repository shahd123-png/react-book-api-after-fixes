import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarRateIcon from "@mui/icons-material/StarRate";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ButtonOutlined from "../../components/common/buttonOutlined/ButtonOutlined";
import BookDetails from "../../components/home/BookDetails";
import ButtonFilled from "../../components/common/buttonFilled/ButtonFilled";
import Image from "../../components/home/Image";
import Beneficts from "../../components/home/Beneficts";
import ImagesComponent from "../../assets/images/ImagesComponent/Index";
import SwiperComponent from "../../components/common/swiper/SwiperComponent";
import style from "./HomePage.module.css";

const HomePage = () => {
  const [bookData, setBookData] = useState([]);
  const [bookDataSwiper, setBookDataSwiper] = useState([]);
  
  const { title, description, imageLinks } = bookData?.volumeInfo || {};
  const titleBook = Array.isArray(title) ? title[0] || "not found": title?.toString() || "not found";
  const descriptionApi = Array.isArray(description) ? description[0] || "not found" : description?.toString() || "not found";
  const imgApi = imageLinks?.smallThumbnail || ImagesComponent.GallarySeconedPageImage1;

  useEffect(() => {
    const fetchRandomBook = async () => {
      try {
        const booksApi = process.env.REACT_APP_BOOKS_API;
        const response = await fetch(`${booksApi}?q=fantasy`);
        const data = await response.json();

        //if (data?.items?.length > 0) {
        if (
          data &&
          data?.items &&
          data?.items?.length > 0 &&
          Array.isArray(data.items)
        ) {
          const randomIndex = Math.floor(Math.random() * data.items.length);
          setBookData(data.items[randomIndex]);
          setBookDataSwiper(data.items);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchRandomBook();
  }, []);

  return (
    <Fragment>
      <Grid
        container
        marginTop={"7rem"}
        justifyContent={"space-around"}
        columnSpacing={4}
        direction={"row"}>
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          xs={12}
          sm={6}
          md={6}>
          <Stack
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={"1rem"}
            paddingLeft={{xs :"0.9rem" ,sm :"0.9rem" , md:'5rem'}}
            marginBottom={"2rem"}>
            <ButtonOutlined color="customColor.main" padding={"10.014px"}>
              Author of August
            </ButtonOutlined>

            <BookDetails title={titleBook} description={descriptionApi} />

            <Link to={`/Seconed-Page/${bookData.id}`}>
              <ButtonFilled padding={"12.017px 32.044px"}>
                View his books
              </ButtonFilled>
            </Link>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          display={"flex"}
          justifyContent={"center"}>
          <Typography
            lineHeight={"28.039px"}
            letterSpacing={"1.8px"}
            className={style.text}
            sx={{ display: { sm: "none", md: "flex", xs: "none" } }}>
            Autographed books + 30% discount
          </Typography>
          <Image imgApi={imgApi} />
        </Grid>

        <Grid item display={"flex"}>
          <Typography
            paddingLeft={"62rem"}
            variant="h5"
            color="customColor.black"
            sx={{ display: { sm: "none", md: "flex", xs: "none" } }}>
            *within the stock limit
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            justifyContent: {
              sm: "flex-start",
              xs: "flex-start",
              md: "center",
            },
          }}
        >
          <Beneficts
            icon={<LocalShippingIcon />}
            text="Free shiping over 50$"
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            justifyContent: {
              sm: "flex-start",
              xs: "flex-start",
              md: "center",
            },
          }}
        >
          <Beneficts
            icon={<StarRateIcon />}
            text="Save with loyalty points"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          display={"flex"}
          alignItems={"center"}
          sx={{
            justifyContent: {
              sm: "flex-start",
              xs: "flex-start",
              md: "center",
            },
          }}
        >
          <Beneficts icon={<MenuBookIcon />} text="Read a few pages" />
        </Grid>

        <Grid item xs={12}>
          <SwiperComponent bookDataSwiper={bookDataSwiper} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
