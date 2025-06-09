// components/RedirectionBackdrop.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress, Typography, Box } from "@mui/material";

const RedirectionBackdrop = ({ to = "/login", delay = 1000, message = "Redirecting..." }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to, { replace: true });
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, navigate, to]);

  return (
    <Backdrop
      open
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: "column",
      }}
    >
      <CircularProgress color="inherit" />
      <Box mt={2}>
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Backdrop>
  );
};

export default RedirectionBackdrop;
