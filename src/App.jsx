import { Box } from "@mui/material";
import NavigationBar from "./Pages/NavigationBar";
import Body from "./Pages/body/Body";
import Footer from "./Pages/Footer";
import FooterOne from "./Pages/FooterOne";

function App() {
  return (
    <div className="flex flex-col w-full items-center h-screen">
      {/* <Box
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#C3C3C3",
          height: "200px",
        }}
      >
        <NavigationBar />
      </Box> */}
      <Box
        sx={{
          width: "1800px",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <Body />
      </Box>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#C3C3C3",
          height: "200px",
        }}
      >
        <Footer />
      </Box>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#A9A9A9",
          // height: "300px",
        }}
      >
        <FooterOne />
      </Box>
    </div>
  );
}

export default App;
