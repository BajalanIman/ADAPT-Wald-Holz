import { Box, Typography } from "@mui/material";
import React from "react";

import facebook from "./../assets/Social_Facebook_Black.png";
import instagram from "./../assets/Social_Instagram.png";
import twitter from "./../assets/Social_Twitter.png";
import youtube from "./../assets/Social_YouTube_Black.png";

const Footer = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "450px",
          sm: "600px",
          md: "900px",
          lg: "1800px",
          xl: "1800px",
        },
        backgroundColor: "#C3C3C3",
      }}
    >
      <Box
        sx={{
          height: "100px",
          width: "full",
          backgroundColor: "#C3C3C3",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <Typography variant="p" sx={{ fontSize: "21px" }}>
          Folgen Sie uns auf:
        </Typography>
        <a href="https://de-de.facebook.com/hneeberswalde/" target="_blank">
          <img
            src={facebook}
            alt="facebook"
            className="w-12 h-12 rounded-full"
          />
        </a>
        <a href="https://www.instagram.com/hneeberswalde/" target="_blank">
          <img
            src={instagram}
            alt="instagram"
            className="w-12 h-12 rounded-full"
          />
        </a>
        <a href="https://twitter.com/hneeberswalde" target="_blank">
          <img src={twitter} alt="twitter" className="w-12 h-12 rounded-full" />
        </a>
        <a
          href="https://www.youtube.com/user/HochschuleEberswalde"
          target="_blank"
        >
          <img src={youtube} alt="YouTube" className="w-12 h-12 rounded-full" />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
