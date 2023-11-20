import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import SeconedPageBookDetails from "../../components/bookDetails/SeconedPageBookDetails";
import SeconedPageImageApi from "../../components/bookDetails/SeconedPageImageApi";
import ButtonFilled from "../../components/shared/buttonFilled/ButtonFilled";
import ImagesComponent from "../../assets/images/ImagesComponent/ImagesComponent";
import { StyledBox, StyledImg } from "./styles";
import ButtonOutlined from "../../components/shared/buttonOutlined/ButtonOutlined";
import ApiExtraBookDetails from "../../components/bookDetails/ApiExtraBookDetails";
import SwiperComponent from "../../components/common/swiper/SwiperComponent";
const imageSources = [
  ImagesComponent.GallarySeconedPageImage1,
  ImagesComponent.GallarySeconedPageImage2,
  ImagesComponent.GallarySeconedPageImage3,
  ImagesComponent.GallarySeconedPageImage4,
];

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  
  const fetchBookDetails = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BOOKS_API}/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched book details:", data);
      return data;
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookDetails(bookId);
        if (data) {
          setBook(data.volumeInfo);
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchData();
  }, [bookId]);

  const imgtest =
    book?.imageLinks?.smallThumbnail ??
    ImagesComponent.HomePageNocOgniaBookImage;
  const title = book?.title ?? "Not Found";
  const description = book?.description ?? "Not Found";
  const author = book?.authors?.[0] ?? "Unknown Author";
  const publisher = book?.publisher ?? "Not Found";
  const language = book?.language ?? "Not Found";
  const printlength = book?.printlength ?? "Not Found";
  const publicationdate = book?.publishedDate ?? "Not Found";
  const categories = book?.categories?.[0] ?? "Not Found";
  const contentversion = book?.contentVersion ?? "Not Found";

  return (
    <Fragment>
    <Grid container>
      <Grid
        item
        display={"flex"}
        justifyContent={"center"}
        sx={{
          flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
        }}
        xs={12}
        sm={12}
        md={6}
      >
        <Stack
          gap={"1rem"}
          sx={{ flexDirection: { xs: "row", sm: "column", md: "column" } }}
        >
          {imageSources.map((src, index) => (
            <StyledBox key={index}>
              <StyledImg src={src} alt={`Book ${index + 1}`} />
            </StyledBox>
          ))}
        </Stack>
        <SeconedPageImageApi imgApi={imgtest} />
      </Grid>

      <Grid item xs={12} md={6} sm={12}>
        <SeconedPageBookDetails
          title={title}
          description={description}
          author={author}
        />
        <Stack
          paddingTop={"2rem"}
          direction={"row"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"3rem"}
        >
          <ButtonFilled customWidth={"244px"} padding={"12px 70px"}>
            Add to cart
          </ButtonFilled>
          <ButtonOutlined customWidth={"244px"} padding={"12px 70px"}>
            Favorite
          </ButtonOutlined>
        </Stack>

        <Grid
          item
          display={"flex"}
          direction={"row"}
          gap={"7rem"}
          borderTop={"1px solid purple"}
          paddingTop={"2rem"}
          marginTop={"2rem"}
          marginRight={"6rem"}
        >
          <Stack spacing={3}>
            <ApiExtraBookDetails label="Publisher" content={publisher} />
            <ApiExtraBookDetails label="Language" content={language} />
            <ApiExtraBookDetails label="Print length" content={printlength} />
          </Stack>

          <Stack spacing={3}>
            <ApiExtraBookDetails
              label="Publication date"
              content={publicationdate}
            />
            <ApiExtraBookDetails label="Categories" content={categories} />
            <ApiExtraBookDetails
              label="Content Version"
              content={contentversion}
            />
          </Stack>
        </Grid>
      </Grid>
    </Grid>

    <Grid item>
    <SwiperComponent/></Grid>
   
    </Fragment>
  );
};

export default BookDetailsPage;
