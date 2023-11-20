import React, { Fragment, useState, useEffect } from "react";
import { Stack, Grid, Typography } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StarRateIcon from "@mui/icons-material/StarRate";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ButtonOutlined from "../../components/shared/buttonOutlined/ButtonOutlined";
import BookDetailsApi from "../../components/home/BookDetailsApi";
import ButtonFilled from "../../components/shared/buttonFilled/ButtonFilled";
import BookImageApi from "../../components/home/BookImageApi";
import style from "./HomePage.module.css";
import SeconedSection from "../../components/home/SeconedSection";
import { Link } from "react-router-dom";
import ImagesComponent from "../../assets/images/ImagesComponent/ImagesComponent";
import SwiperComponent from "../../components/common/swiper/SwiperComponent";
const HomePage = () => {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const fetchRandomBook = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=fantasy"
        );
        const data = await response.json();

        if (data.items.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.items.length);
          setBookData(data.items[7]);
        } else {
          setBookData([]);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchRandomBook();
  }, []);

  const { title, description, imageLinks } = bookData?.volumeInfo || {};
  const titleBook = title || "not found";
  const descriptionApi = description || "not found";
  const imgApi =
    imageLinks?.smallThumbnail || ImagesComponent.GallarySeconedPageImage1;
  return (
    <Fragment>
      <Grid
        container
        marginTop={"7rem"}
        justifyContent={"space-around"}
        columnSpacing={4}
        direction={"row"}
      >
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          xs={12}
          sm={6}
          md={6}
        >
          <Stack
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            gap={"1rem"}
            paddingLeft={"5rem"}
          >
            <ButtonOutlined color="customColor.main" padding={"10.014px"}>
              Author of August
            </ButtonOutlined>
            <BookDetailsApi title={titleBook} description={descriptionApi} />
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
          justifyContent={"center"}
        >
          <Typography
            lineHeight={"28.039px"}
            letterSpacing={"1.8px"}
            className={style.text}
            sx={{ display: { sm: "none", md: "flex", xs: "none" } }}
          >
            Autographed books + 30% discount
          </Typography>
          <BookImageApi imgApi={imgApi} />
        </Grid>

        <Grid item display={"flex"}>
          <Typography
            paddingLeft={"62rem"}
            variant="h5"
            color="customColor.black"
            sx={{ display: { sm: "none", md: "flex", xs: "none" } }}
          >
            *within the stock limit
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        marginTop={"4rem"}
        columnSpacing={4}
        direction={"row"}
        alignItems={"center"}
        marginBottom={"4rem"}
      >
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
          <SeconedSection
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
          <SeconedSection
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
          <SeconedSection icon={<MenuBookIcon />} text="Read a few pages" />
        </Grid>
      </Grid>
      <SwiperComponent />
    </Fragment>
  );
};

export default HomePage;
