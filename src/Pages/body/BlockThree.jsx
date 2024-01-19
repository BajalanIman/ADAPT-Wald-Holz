import React from "react";
import blg3 from "./../../assets/blg3.jpg";
import { Box, Typography } from "@mui/material";

const BlockThree = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <img src={blg3} alt="blg3" width="380" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontWeight: "bold", fontSize: "19px", display: "block" }}
          >
            Kick-off-Treffen vom InnoForum Wald & Holz
          </Typography>
          <Typography variant="p" sx={{ fontSize: "19px", display: "block" }}>
            Am 13. Juni 2023 fand die Auftaktveranstaltung vom InnoForum Wald &
            Holz statt.
          </Typography>
          <Typography variant="p" sx={{ fontSize: "19px", display: "block" }}>
            Mit Ansätzen aus dem Design Thinking haben Vertreter*innen der
            gesamten Forst-Holz-Kette
          </Typography>
          <Typography variant="p" sx={{ fontSize: "19px", display: "block" }}>
            das zukünftige Format vom InnoForum mitgestaltet!
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          paddingY: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <hr className="border-1 border-gray-700 drop-shadow-xl w-2/5"></hr>
      </Box>
    </Box>
  );
};

export default BlockThree;
