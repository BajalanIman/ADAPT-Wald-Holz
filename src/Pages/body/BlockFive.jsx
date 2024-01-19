import React from "react";
import blg5HNE from "./../../assets/HNEE_Logo_Dt_gruen.jpg";
import blg5THUENEN from "./../../assets/THUENEN_PRINT_CMYK.jpg";
import blg5MPI from "./../../assets/MPI_Logo_Kolloid-und-Grenzflchenforschung_DE_CMYK_black.png";
import blg5forst from "./../../assets/forst_logo_rgb_landes_norm.jpg";
import blg5zalf from "./../../assets/zalf_Logo_cmyk.jpg";

import { Box, Typography } from "@mui/material";

const BlockFive = () => {
  return (
    <Box>
      <Typography
        variant="p"
        sx={{
          textDecoration: "underline",
          fontSize: "19px",
        }}
      >
        Projektpartner:
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          gap: "80px",
        }}
      >
        <a
          href="https://www.hnee.de/de/Startseite/HNEEberswalde-Startseite-E9875.htm"
          target="blank"
        >
          <img src={blg5HNE} alt="blg5HNE" className="w-64 " />
        </a>
        <a
          href="https://www.thuenen.de/de/fachinstitute/waldoekosysteme"
          target="blank"
        >
          <img src={blg5THUENEN} alt="blg5THUENEN" className="w-86" />
        </a>
        <a href="https://www.mpikg.mpg.de/" target="blank">
          <img src={blg5MPI} alt="blg5MPI" className="w-96" />
        </a>
        <a
          href="https://forst.brandenburg.de/lfb/de/ueber-uns/landeskompetenzzentrum-lfe/"
          target="blank"
        >
          <img src={blg5forst} alt="blg5forst" className="w-32" />
        </a>
        <a href="https://www.zalf.de/en/Pages/ZALF.aspx" target="blank">
          <img src={blg5zalf} alt="blg5zalf" className="w-32" />
        </a>
      </Box>
      <Box
        sx={{
          paddingY: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <hr className="border-1 border-gray-700 drop-shadow-xl w-full"></hr>
      </Box>
    </Box>
  );
};

export default BlockFive;
