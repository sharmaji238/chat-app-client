import React from 'react'
import AppLayout from '../layout/AppLayout'
import { Box, Typography } from '@mui/material'
import { grey, offWhite } from '../constants/colors'
import { Quickreply } from '@mui/icons-material'

const Home = () => {
  return (
    <Box bgcolor={grey} height={"100%"} alignItems={"center"} justifyContent={"center"} 
    display={"flex"} flexDirection={"column"}
    >
      <Quickreply sx={{ color: offWhite, fontSize: '10rem' }} />
      <Typography p={"2rem"} variant="h5" textAlign={"center"} color={offWhite}
      sx={{ fontWeight: 'bold', letterSpacing:'0.125rem', fontFamily: 'Dealoras' }}>
        Select a friend to chat
      </Typography>
    </Box>
  )
}

// export default AppLayout()(Home)
export default AppLayout()(Home)
// This code defines a Home component that is wrapped with an AppLayout.