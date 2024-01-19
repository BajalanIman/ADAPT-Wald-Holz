import { Box, Typography } from "@mui/material";
import BildHE from "./../../assets/BildHE.png";
import React from "react";

const BlockTwo = () => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Typography
        sx={{
          textDecoration: "underline",
          fontWeight: "bold",
          fontSize: "19px",
        }}
      >
        AKTUELLES:
      </Typography>
      <Box sx={{ paddingY: "40px", display: "flex", gap: "120px" }}>
        <img src={BildHE} alt="block two" className="w-96" />
        <Box>
          <Typography
            variant="p"
            sx={{ fontSize: "19px", display: "flex", paddingBottom: "11px" }}
          >
            Im ADAPT-Wald-Holz Reallabor läuft die Holzerntemaßnahme!
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "19px",
              display: "flex",
              flexDirection: "column",
              paddingY: "11px",
            }}
          >
            <p>
              Verschiedene Holzernteverfahren, vor allem bei erweiterten und
              FSC-konformen Rückegassenabständen, kamen zum Einsatz.
            </p>

            <p>Wir sind auf die Daten und deren Auswertung gespannt.</p>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: "19px",
              display: "flex",
              flexDirection: "column",
              paddingY: "11px",
            }}
          >
            <p>
              Im Waldreallabor untersuchen Nachwuchswissenschaftlerinnen und
              -wissenschaftler verschiedene Bewirtschaftungsansätze
            </p>

            <p>
              aus verschiedensten Gesichtspunkten: z.B. Wasserhaushalt,
              Biodiversität, Holzproduktion, mechanische Holzeigenschaften.
            </p>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingY: "20px", display: "flex", gap: "40px" }}>
        <iframe
          width="720"
          height="515"
          src="https://www.youtube.com/watch?v=x2L_tD9kE8I&embeds_referring_euri=https%3A%2F%2Fhnee.de%2F&source_ve_path=OTY3MTQ&feature=emb_imp_woyt"
        ></iframe>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="p"
            sx={{
              fontSize: "19px",
              display: "flex",
              flexDirection: "column",
              paddingY: "11px",
            }}
          >
            <p className="font-bold pb-4">
              On mechanic behavior of Scots Pine under the influence of climatic
              change
            </p>

            <p>
              Our doctoral student Tobias Bender presents his work in this
              fantastic short viedeo!
            </p>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingY: "50px", display: "flex", justifyContent: "center" }}>
        <hr className="border-1 border-gray-700 drop-shadow-xl w-2/5"></hr>
      </Box>
    </Box>
  );
};

export default BlockTwo;
