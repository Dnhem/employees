import belgrade from "../assets/belgrade.jpeg";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ width: "500px", opacity: "0.7" }}
        src={belgrade}
        alt="belgrade-city-skyline"
      />
    </Box>
  );
};

export default Home;
