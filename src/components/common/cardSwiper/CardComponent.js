import React from "react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import style from "./Card.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ImagesComponent from "../../../assets/images/ImagesComponent/ImagesComponent";

const CardComponent = ({ item }) => {
  const { title, authors, imageLinks } = item?.volumeInfo || {};
  const BookTitle = title?.toString() || "Not known";
  const Author = (authors?.length || 0) > 0 ? authors[0] : "Unknown Author";
  const Thumbnail = imageLinks?.smallThumbnail || ImagesComponent.book1;
  

  return (
    <Card className={style.card} sx={{ border: 0, boxShadow: 0 }}>
      <CardContent>
        <Stack gap={"0.7rem"}>
          <img
            className={style.imageFixedSizeCard}
            src={Thumbnail}
            alt={BookTitle}
          />
          <Typography variant="h3" className={style.titleStyle}>
            {BookTitle}
          </Typography>
          <Typography variant="subtitle1">{Author}</Typography>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography variant="h4">$12.06</Typography>
            <FavoriteBorderIcon color="primary" />
          </Stack>

          <Button
            className={style.buttonStyle}
            variant="contained"
            startIcon={<ShoppingCartIcon />}>
            Add to cart
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
