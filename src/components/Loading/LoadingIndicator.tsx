import CachedIcon from "@mui/icons-material/Cached";
import Box from "@mui/material/Box";

const LoadingIndicator = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <CachedIcon color="primary" sx={{ width: 300, height: 300 }} />
    </Box>
  );
};

export default LoadingIndicator;
