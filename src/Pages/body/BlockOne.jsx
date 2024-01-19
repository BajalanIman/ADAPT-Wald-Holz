import React from "react";
import adapt from "./../../assets/ADAPT.jpg";
import imgo1 from "./../../assets/IMG01.jpg";
import { Box, Typography } from "@mui/material";

const BlockOne = () => {
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
        display: { xs: "inline", md: "flex" },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", md: "inline" },
          justifyContent: "center",
        }}
      >
        <img src={adapt} alt="Adapt" className="w-72 h-72 pb-8" />
      </Box>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", paddingBottom: "15px", paddingTop: "30px" }}
      >
        ADAPT-Wald-Holz
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "25px",
        }}
      >
        <Box sx={{ width: { xs: "100%", lg: "65%" } }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", paddingBottom: "10px", fontSize: "18px" }}
          >
            ADAPTives WALDressourcen-Management für eine zukunftsfähige
            HOLZwirtschaft in der Region Brandenburg-Berlin
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              marginBottom: "20px",
              fontSize: "18px",
            }}
          >
            Im Projekt ADAPT-Wald-Holz entwickelt eine Nachwuchsgruppe ein
            adaptives Wald-Holz-Managementsystem für die Region
            Brandenburg-Berlin am Beispiel Waldkiefer. Im Fokus steht eine
            ökosystem- und ressourcenschonende regionale Wertschöpfungskette -
            von der Waldbewirtschaftung über die Holzbereitstellung bis zur
            Holzverarbeitung.
          </Typography>
          <Typography sx={{ textAlign: "justify", fontSize: "18px" }}>
            Im Projekt wird ein Wald-Reallabor eingerichtet, zur Entwicklung und
            Simulation neuartiger Waldbewirtschaftungsansätze. In einem zweiten
            Arbeitspaket werden bestehende Holzernte- und Logistikkonzepte
            technologisch und im Hinblick auf neuartige Möglichkeiten der
            Datenweitergabe und –verknüpfung weiterentwickelt. Schließlich
            werden neue Verwendungsansätze für Kiefernholz zur Steigerung der
            regionalen Wertschöpfung dieses Rohstoffs insb. im Bausektor
            entwickelt. Diese Untersuchungen werden flankiert durch den Aufbau
            eines InnoForums mit Praxisakteuren, zum Transfer der im
            Wald-Reallabor und der weiteren Holzbereitstellungs- und
            -verwertungskette erprobten Ansätze in die Praxis.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyItems: { xs: "start", lg: "end" },
          }}
        >
          <img src={imgo1} alt="imgo1" className="w-96 " />
          <Typography
            variant="span"
            sx={{ textAlign: "end", fontStyle: "italic", fontSize: "12px" }}
          >
            © HNEE, F. Berendt
          </Typography>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "30px", fontSize: "18px" }}>
        <Typography
          sx={{ fontSize: "18px", display: "flex", paddingBottom: "11px" }}
        >
          <p className="underline text-[19px]">
            Wissenschaftl. Projektkoordination:
          </p>
          <p className="text-[19px]">
            ` Dr. Ferréol Berendt (Ferreol.Berendt[at]hnee.de)
          </p>
        </Typography>
        <Typography
          sx={{ fontSize: "18px", display: "flex", paddingBottom: "11px" }}
        >
          <p className="underline text-[19px]">Gesamtprojektleitung:</p>
          <p className="text-[19px]">` Prof. Dr. Tobias Cremer</p>
        </Typography>
        <Typography
          sx={{ fontSize: "18px", display: "flex", paddingBottom: "11px" }}
        >
          <p className="underline text-[19px]">Nachwuchsgruppe: </p>
          <p className="text-[19px]">
            ` Tobias Bender, Ramazan Bülbül, Maximilian Jakob, Dr. Julia
            Kaplick, Tina Krüger, Alexa Michel, Stephan Playfair, Dr. Friedrich
            Reppe
          </p>
        </Typography>

        <Typography sx={{ fontSize: "18px", display: "flex" }}>
          <p className="underline text-[19px]">Teilprojektleitung:</p>
          <p className="text-[19px]">
            ` Prof. Dr. Jan-Peter Mund (HNEE), Prof. Dr. Alexander Pfriem
            (HNEE), Prof. Dr. Ulrich Schwarz (HNEE), Prof. Dr. Peter Spathelf
            (HNEE), Prof. Dr.-Ing. Karola Dierichs
          </p>
        </Typography>
        <Typography
          sx={{ fontSize: "19px", display: "flex", paddingBottom: "11px" }}
        >
          (MPIKG), Dr. Tanja Sanders (Thünen-Institut), Dr. Ulrike Hagemann
          (LFE), Prof. Dr. Jens Schröder (LFE), Prof. Dr. Gunnar Lischeid (ZALF)
        </Typography>
        <Typography
          sx={{ fontSize: "18px", display: "flex", paddingBottom: "50px" }}
        >
          <p className="underline text-[19px]">
            Laufzeit, Förderkennzeichen und Projektvolumen:{" "}
          </p>
          <p className="text-[19px]">
            02/2023 bis 01/2028;FKZ: 033L301A; 2.56 Mio. € (HNEE- Anteil: 1.13
            Mio. €)
          </p>
        </Typography>
      </Box>
      <Box>
        <hr className="border-1 border-gray-700 drop-shadow-xl"></hr>
      </Box>
    </Box>
  );
};

export default BlockOne;
