import { Box, Typography } from "@mui/material";
import React from "react";

const FooterOne = () => {
  // xs: 0px
  // sm: 600px
  // md: 900px
  // lg: 1200px
  // xl: 1536px

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
        // height: { sx: "800px", md: "800px", lg: "300px" },
        backgroundColor: "#A9A9A9",
      }}
    >
      <Box
        sx={{
          width: "full",
          display: { xs: "inline", md: "flex" },
          //   alignItems: "center",
          //   justifyContent: "space-between",
          paddingY: { xs: "40px", sm: "40px", lg: "45px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between" },
            flexGrow: { lg: "1" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: { lg: "1" },
              paddingTop: { xs: "30px", md: "0px" },
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "21px", fontWeight: "bold" }}
            >
              Studium
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Studiengänge
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Beratung
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Bewerbung
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: { lg: "1" },
              paddingTop: { xs: "30px", md: "0px" },
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "21px", fontWeight: "bold" }}
            >
              Hochschule
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Portrait
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Presse
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Jobs und Karriere
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Kontakt und Anfahrt
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between" },
            flexGrow: { lg: "1" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: { lg: "1" },
              paddingTop: { xs: "30px", md: "0px" },
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "21px", fontWeight: "bold" }}
            >
              Forschung und Transfer
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Forschungsschwerpunkte
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Forschungsprojekte
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Transferzentrum
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: { lg: "1" },
              paddingTop: { xs: "30px", md: "0px" },
            }}
          >
            <Typography
              variant="p"
              sx={{ fontSize: "21px", fontWeight: "bold" }}
            >
              Service
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Gründungszentrum
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Hochschulbibliothek
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              IT-Servicezentrum
            </Typography>
            <Typography variant="p" sx={{ fontSize: "21px" }}>
              Speiseplan
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterOne;
