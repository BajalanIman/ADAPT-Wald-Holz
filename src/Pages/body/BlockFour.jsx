import { Box, Typography } from "@mui/material";
import React from "react";
import blg4 from "./../../assets/20230313-Kickoff-ADAPT-WaldUlrich_Wessollek-3384.jpg";

const BlockFour = () => {
  return (
    <Box>
      <Typography variant="p" sx={{ fontSize: "19px" }}>
        Am 13. Februar 2023 fand das Projektauftakttreffen am Waldcampus der
        HNEE statt. Alle Projektpartner*innen, der Projektträger Jülich und das
        REGULUS-Querschnittsprojekt waren vertreten. Der Projektstart war ein
        voller Erfolg und die (Vor) Freude auf das Projekt riesig!
      </Typography>
      <Box sx={{ paddingTop: "20px", display: "flex", gap: "30px" }}>
        <img src={blg4} alt="blg4" width="820" />
        <iframe
          width="870"
          src="https://www.youtube.com/watch?v=Sv4CueQ_gLI&embeds_referring_euri=https%3A%2F%2Fhnee.de%2F&source_ve_path=OTY3MTQ&feature=emb_imp_woyt"
        ></iframe>
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

export default BlockFour;
