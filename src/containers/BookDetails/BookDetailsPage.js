import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Stack,Box } from "@mui/material";
import MainDetails from "../../components/bookDetails/MainDetails";
import Image from "../../components/bookDetails/Image";
import ButtonFilled from "../../components/common/buttonFilled/ButtonFilled";
import ImagesComponent from "../../assets/images/ImagesComponent/Index";
import ButtonOutlined from "../../components/common/buttonOutlined/ButtonOutlined";
import ExtraDetails from "../../components/bookDetails/ExtraDetails";
import SwiperComponent from "../../components/common/swiper/SwiperComponent";
import { StyledBox, StyledImg } from "./styles";
import { fetchDataFromApi } from "../../utilities/ApiFetch";

const imageSources = [
  ImagesComponent.GallarySeconedPageImage1,
  ImagesComponent.GallarySeconedPageImage2,
  ImagesComponent.GallarySeconedPageImage3,
  ImagesComponent.GallarySeconedPageImage4,
];

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [bookDataSwiper, setBookDataSwiper] = useState([]);
  const {
    imageLinks,
    title,
    description,
    authors,
    publisher,
    language,
    printlength,
    publishedDate,
    printType,
    contentVersion,
  } = book || {};

  const imgDisplay = imageLinks?.smallThumbnail ?? ImagesComponent.HomePageNocOgniaBookImage;
  const displayTitle = Array.isArray(title) ? title[0] || "Not Found": title?.toString() || "Not Found";
  const displayDescription = Array.isArray(description) ? description[0] || "Not Found" : description?.toString() || "Not Found";
  const displayAuthor = Array.isArray(authors) && authors.length > 0 ? authors[0] : "Unknown Author";
  const displayPublisher = Array.isArray(publisher)? publisher[0] || "Not Found" : publisher?.toString() || "Not Found";
  const displayLanguage = Array.isArray(language)? language[0]|| "Not Found" : language?.toString() || "Not Found";
  const displayPrintlength = Array.isArray(printlength)? printlength[0]|| "Not Found" : printlength?.toString() || "Not Found";
  const displayPublicationDate = Array.isArray(publishedDate) ? publishedDate[0] || "Not Found" : publishedDate?.toString() || "Not Found";
  const displayprintType = Array.isArray(printType) && printType.length > 0? printType[0]: "Not Found";
  const displayContentVersion = Array.isArray(contentVersion) ? contentVersion[0]?.toString() || "Not Found" : contentVersion?.toString() || "Not Found";

  const fetchBookDetails = async (id) => {
    try 
    {
      const booksApi = process.env.REACT_APP_BOOKS_API;
      const response = await fetch(`${booksApi}/${id}`);

      const data = await response.json();
      return data;
    } 
    catch (error) 
    {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookDetails(bookId);
        //  if (data?.volumeInfo) {
        if (data && data?.volumeInfo) {
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

  useEffect(() => {
    const fetchSwiperData = async () => {
      try {
        const result = await fetchDataFromApi();

        if (result?.items?.length > 0) {
          setBookDataSwiper(result.items);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSwiperData();
  }, []);

  return (
      <Grid container justifyContent={"space-around"}>
          <Grid item xs={12} sm={12} md={6} marginTop={{xs:'7rem', sm: '7rem' , md: '0' , lg :'0'}}>
            <Stack flexDirection={{xs : "column-reverse" , sm : "row"}} justifyContent={{sm:"space-evenly" ,md :"space-evenly" }} >
              <Box display={"flex"} gap={"1rem"} flexDirection={{xs : "row" , sm: "column"}} justifyContent={{xs : "center"}} alignItems={{xs : "center"}}>
                {imageSources.map((src, index) => (
                <StyledBox key={index}>
                  <StyledImg src={src} alt={`Book ${index + 1}`} />
               </StyledBox>
                 ))}
              </Box>

               <Box alignSelf={{ xs :"center"}}>
                <Image imgApi={imgDisplay} />
               </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={6} paddingLeft={{ sm: '2rem'}}>
            <MainDetails title={displayTitle} description={displayDescription} author={displayAuthor}/>

              <Box display={"flex"} gap={{xs : "1rem" , sm: "4rem"}} paddingTop={"2rem"} flexDirection={{xs: "column" , sm : "row"}} alignItems={{xs : "center"}}>
                <ButtonFilled customWidth={"244px"} padding={"12px 70px"}> Add to cart </ButtonFilled>
                <ButtonOutlined customWidth={"244px"} padding={"12px 70px"}> Favorite </ButtonOutlined>
              </Box>
           
           <Stack gap={{xs : "2rem" , sm :"6rem"}} flexDirection={{xs:"column",sm :"row"} } borderTop={"1px solid purple"} paddingTop={"2rem"} marginTop={"2rem"} marginRight={{  xs: 0,sm:"4rem"}}>
               <Box display={"flex"} flexDirection={"column"} gap={{ xs : '2rem',sm :'3rem'}}>
                <ExtraDetails label="Publisher" content={displayPublisher}/>
                <ExtraDetails label="Language" content={displayLanguage} />
                <ExtraDetails label="Print length" content={displayPrintlength}/>
               </Box>

              <Box display={"flex"} flexDirection={"column"} gap={{ xs : '2rem',sm :'3rem'}}>
                <ExtraDetails label="Publication date" content={displayPublicationDate}/>
                <ExtraDetails label="Print Type" content={displayprintType}/>
                <ExtraDetails label="Content Version" content={displayContentVersion}/>
              </Box>
           </Stack>
          </Grid>

          <Grid item xs={12}>
            <SwiperComponent bookDataSwiper={bookDataSwiper} />
          </Grid>
      </Grid>
    );
};

export default BookDetailsPage;
