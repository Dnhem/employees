import { Box } from "@mui/material";
import snorlax from "../assets/snorlax.png";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h1 style={{ textAlign: "center", fontWeight: 100 }}>
        404 Page Not Found
      </h1>
      <img style={{ width: "500px" }} src={snorlax} alt="" />
    </Box>
  );
};

export default NotFound;
