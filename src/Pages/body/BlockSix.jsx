import { Box, Typography } from "@mui/material";
import React from "react";
import blg6gefoerdert from "./../../assets/BMBF_gefoerdert_2017_de.jpg";
import blg6FONA from "./../../assets/BMBF_FONA_Logo_rgb.jpg";
import blg6regulus from "./../../assets/logo-regulus.jpg";

const BlockSix = () => {
  return (
    <Box sx={{ paddingBottom: "40px" }}>
      <Typography variant="p" sx={{ fontSize: "21px" }}>
        Das Projekt ist in der BMBF-Fördermaßnahme „Regionale Innovationsgruppen
        für eine klimaschützende Wald- und Holzwirtschaft (
        <a
          target="blank"
          className="text-orange-700 text-[20px] hover:underline hover:text-cyan-800 "
          href="https://www.fona.de/de/massnahmen/foerdermassnahmen/waldforschung.php"
        >
          REGULUS
        </a>
        ) “ eingebettet.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "30px",
          paddingRight: "120px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img src={blg6gefoerdert} alt="blg6gefoerdert" className="w-64" />
          <img src={blg6FONA} alt="blg6FONA" className="w-64" />
        </Box>
        <img src={blg6regulus} alt="blg6regulus" className="w-64 h-32" />
      </Box>
    </Box>
  );
};

export default BlockSix;
