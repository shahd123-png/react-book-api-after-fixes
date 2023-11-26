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
  Box,
  Container,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonOutlined from "../../common/buttonOutlined/ButtonOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import ImagesComponent from "../../../assets/images/ImagesComponent/Index";
import style from "./Header.module.css";
import FetchData from "../../../utilities/SearchPage/FetchData";

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
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const getTitle = (result) => {
    const title = result?.volumeInfo?.title;
    return Array.isArray(title)
      ? title[0] || "not found"
      : title?.toString() || "not found";
  };

  const handleInputChange = (e, value) => {
    setTerm(value);
  };
  return (
    <Fragment>
      <AppBar
        className={style.header}
        color={"white"}
        sx={{ boxShadow: "none" }}
        position="fixed">


        <Toolbar sx={{justifyContent : "space-between"}}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={{xs : 1 , sm : 1 , md:1}}
            divider={
              <Divider
                orientation="vertical"
                className={style.verticalLine}
                flexItem
              />}>
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

            <Stack alignItems={"flex-end"} flexGrow={{xs : 'none' , sm : 1}} display={{xs : 'flex' , sm : "flex" , md : 'none'}}>
             <SearchIcon color="grey" /> 
            </Stack>

          <Stack direction="row" alignItems="center">
            <Box display={{xs : 'none' , sm : "none" , md : "flex"}}>

              <FetchData term={term} setSearchResults={setSearchResults} />
              <Autocomplete
                freeSolo
                id="search-input"
                options={searchResults.map((result) => getTitle(result))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type any book here"
                    variant="outlined"
                    size="small"
                    onChange={(e) => handleInputChange(e, e.target.value)}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: <SearchIcon color="grey" />,
                      className: style.searchBar,
                      style: { width: "376.522px" },
                    }}
                  />
                )}
              />
            </Box>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            display={{xs : 'none', sm: 'none' , md: "flex"}}
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

          <Stack direction="row" flexGrow={1} justifyContent="flex-end" spacing={2} display={{xs : 'none', sm: 'flex',md : 'none'}}>
            <LocalPhoneIcon color="primary" />
            <Typography color="black">+445 87 999 000</Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"flex-end"}
            p={1}
            spacing={2}
            flexGrow={0.1}
            display={{xs : 'none', sm: 'flex' , md: "flex"}}
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

          

          <Stack spacing={2} direction={"row"} display={{xs : 'flex', sm: 'flex' , md: "none"}} alignItems={"center"}>
          <Hidden smUp>  <ShoppingCartIcon color="primary" /></Hidden>
           
            <MenuIcon color="primary" />
          </Stack>
        </Toolbar>
      </AppBar>


      <Hidden mdDown>
      <AppBar
      className={style.secondHeader}
      color={"white"}
      position="relative"
      sx={{ boxShadow: "none", top: "80px", marginBottom: "8rem" }}>
      <Toolbar sx={{justifyContent : "space-between"}} >
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

            <Stack direction="row" justifyContent="flex-end" spacing={4} alignItems={"center"}>
            <Box display={"flex"} gap={1} direction ={"row"}> 
             <LocalPhoneIcon color="primary" />
             <Typography color="black">+445 87 999 000</Typography>
            </Box>
             
              <ButtonOutlined padding={"12.017px 32.044px"}>Request a call</ButtonOutlined>

            </Stack>

         
      </Toolbar>
    </AppBar>
    </Hidden>

    </Fragment>
  );
};

export default HeaderComponent;
