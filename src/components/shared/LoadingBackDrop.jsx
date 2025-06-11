import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'

export const LoadingBackDrop = ({ message = "Loading..."}) => {
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
  )
}
