import React, { Fragment, useState } from "react";
import {
  Link,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Hidden,
  Stack,
  Divider,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonOutlined from "../../shared/buttonOutlined/ButtonOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import ImagesComponent from "../../../assets/images/ImagesComponent/ImagesComponent";
import style from "./Header.module.css";

const links = [
  { label: "Privacy policy", href: "/" },
  { label: "Warranty", href: "/" },
  { label: "Shipping", href: "/" },
  { label: "Return", href: "/" },
];

const linksSeconedHeder = [
  { label: "The must read", href: "/" },
  { label: "News", href: "/" },
  { label: "Promotion of the mount", href: "/" },
  { label: "Plublishs", href: "/" },
  { label: "Subscribe to the newsletter", href: "/" },
];

const HeaderComponent = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    if (searchTerm.trim() === "") {
      navigate("/");
    } else {
      navigate(`/search-results?term=${searchTerm}`);
    }
  };

  return (
    <Fragment>
      <AppBar
        className={style.header}
        color={"white"}
        sx={{ boxShadow: "none" }}
        position="fixed"
      >
        <Toolbar>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            columnSpacing={{ lg: 4, md: 1 }}
          >
            <Grid item md={2} sm={3} xs={7}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                divider={
                  <Divider
                    orientation="vertical"
                    className={style.verticalLine}
                    flexItem
                  />
                }
              >
                <Typography variant="p" color={"customColor.black"}>
                  B-W
                  <img
                    className={style.bookImgHeader}
                    src={ImagesComponent.bookIconHeader}
                    alt="read book"
                  />
                  rld
                </Typography>

                <Typography variant="caption" color="primary" ml={1}>
                  We love
                  <br />
                  books
                </Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} md={3} sm={1} xs={3}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Hidden lgUp>
                  <SearchIcon color="grey" />
                </Hidden>

                <Hidden lgDown>
                  <TextField
                    placeholder="Type any book here"
                    variant="outlined"
                    size="small"
                    className={style.searchBar}
                    onChange={handleInputChange}
                    value={term}
                    InputProps={{
                      endAdornment: <SearchIcon color="grey" />,
                    }}
                  />
                </Hidden>
              </Stack>
            </Grid>

            <Grid item lg={4} md={1}>
              <Hidden lgDown>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={3}
                >
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={style.linksA}
                      underline="hover"
                      variant="plain"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Hidden>
            </Grid>

            <Hidden lgUp>
              <Grid item md={3} sm={4} display={{ xs: "none", sm: "flex" }}>
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <LocalPhoneIcon color="primary" />
                  <Typography color="black">+445 87 999 000</Typography>
                </Stack>
              </Grid>
            </Hidden>

            <Hidden smDown>
              <Grid
                item
                md={2}
                sm={3}
                sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
              >
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"flex-end"}
                  p={1}
                  spacing={2}
                  divider={
                    <Divider
                      orientation="vertical"
                      className={style.verticalLineForIconsHeader}
                      flexItem
                    />
                  }
                >
                  <ShoppingCartIcon color="primary" />
                  <FavoriteIcon color="primary" />
                  <PersonIcon color="primary" />
                </Stack>
              </Grid>
            </Hidden>

            <Grid
              item
              xs={1}
              sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
            >
              <Stack>
                <ShoppingCartIcon color="primary" />
              </Stack>
            </Grid>

            <Hidden lgUp>
              <Grid item md={1} sm={1} xs={1}>
                <Stack alignItems={"center"}>
                  <MenuIcon color="primary" />
                </Stack>
              </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>

      <Hidden lgDown>
        <AppBar
          className={style.secondHeader}
          color={"white"}
          position="relative"
          sx={{ boxShadow: "none", top: "80px", marginBottom: "8rem" }}
        >
          <Toolbar>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"space-between"}
              columnSpacing={5}
            >
              <Grid item lg={8}>
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={3}
                >
                  {linksSeconedHeder.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className={style.linksSecondLine}
                      underline="hover"
                      variant="h5"
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item lg={2}>
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <LocalPhoneIcon color="primary" />
                  <Typography color="black">+445 87 999 000</Typography>
                </Stack>
              </Grid>
              <Grid item lg={2}>
                <Stack justifyContent={"center"} alignItems={"flex-end"}>
                  <ButtonOutlined>Request a call</ButtonOutlined>
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Hidden>
    </Fragment>
  );
};

export default HeaderComponent;
