import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack } from "@mui/material";
import SeconedPageBookDetails from "../../components/bookDetails/SeconedPageBookDetails";
import SeconedPageImageApi from "../../components/bookDetails/SeconedPageImageApi";
import ButtonFilled from "../../components/shared/buttonFilled/ButtonFilled";
import ImagesComponent from "../../assets/images/ImagesComponent/ImagesComponent";
import ButtonOutlined from "../../components/shared/buttonOutlined/ButtonOutlined";
import ApiExtraBookDetails from "../../components/bookDetails/ApiExtraBookDetails";
import SwiperComponent from "../../components/common/swiper/SwiperComponent";
import { StyledBox, StyledImg } from "./styles";

const imageSources = [
  ImagesComponent.GallarySeconedPageImage1,
  ImagesComponent.GallarySeconedPageImage2,
  ImagesComponent.GallarySeconedPageImage3,
  ImagesComponent.GallarySeconedPageImage4,
];

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const {
    imageLinks,
    title,
    description,
    authors,
    publisher,
    language,
    printlength,
    publishedDate,
    categories,
    contentVersion,
  } = book || {};

  const imgDisplay = imageLinks?.smallThumbnail ?? ImagesComponent.HomePageNocOgniaBookImage;
  const displayTitle = title?.toString() || "Not Found";
  const displayDescription = description?.trim() || "Not Found";
  const displayAuthor = (authors?.length || 0) > 0 ? authors[0] : "Unknown Author";
  const displayPublisher = publisher?.toString() || "Not Found";
  const displayLanguage = language?.toString() || "Not Found";
  const displayPrintlength = printlength?.toString() || "Not Found";
  const displayPublicationDate = publishedDate?.toString() || "Not Found";
  const displayCategories = (categories?.length || 0) > 0 ? categories[0] : "Not Found";
  const displayContentVersion = contentVersion?.toString() || "Not Found";

  const fetchBookDetails = async (id) => {
    try {
      const booksApi = process.env.REACT_APP_BOOKS_API;
      const response = await fetch(`${booksApi}/${id}`);

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookDetails(bookId);
        if (data?.volumeInfo) {
          setBook(data.volumeInfo);
        } else {
          console.error("Error: Received incomplete or unexpected data");
        }
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchData();
  }, [bookId]);

  return (
    <Fragment>
      <Grid container>
        <Grid
          item
          display={"flex"}
          justifyContent={"center"}
          sx={{
            flexDirection: { xs: "column-reverse", sm: "row", md: "row" },
            alignItems: { xs: "center", sm: "flex-start" },
            
          }}
          xs={12}
          sm={12}
          md={6}>
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

          <SeconedPageImageApi imgApi={imgDisplay} />
        </Grid>

        <Grid item xs={12} md={6} sm={12}>
          <SeconedPageBookDetails
            title={displayTitle}
            description={displayDescription}
            author={displayAuthor}
          />
          <Stack
            paddingTop={"2rem"}
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            gap={"3rem"}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
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
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Stack spacing={3}>
              <ApiExtraBookDetails
                label="Publisher"
                content={displayPublisher}
              />
              <ApiExtraBookDetails label="Language" content={displayLanguage} />
              <ApiExtraBookDetails
                label="Print length"
                content={displayPrintlength}
              />
            </Stack>

            <Stack spacing={3}>
              <ApiExtraBookDetails
                label="Publication date"
                content={displayPublicationDate}
              />
              <ApiExtraBookDetails
                label="Categories"
                content={displayCategories}
              />
              <ApiExtraBookDetails
                label="Content Version"
                content={displayContentVersion}
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <SwiperComponent />
      </Grid>
    </Fragment>
  );
};

export default BookDetailsPage;
