import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/colors'
import MenuIcon from '@mui/icons-material/Menu'

export const Header = () => {
    const handleMobile = () => {
        // Handle mobile menu toggle logic here
        console.log("Mobile menu toggled");
    }
  return (
    <>
        <Box sx={{flexGrow:1}} height="4rem">
            <AppBar position="static" sx={{bgcolor:orange}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                display={{ xs: 'none', sm: 'block' }}
                // fontFamily="Monicat, sans-serif"
                style={{fontFamily: 'Dealoras, MonicaG'} }
                >
                    Chattu
                </Typography>
                <Box display={{ xs: 'block', sm: 'none' }}>
                    <IconButton color="inherit" onClick={handleMobile}><MenuIcon/></IconButton>
                </Box>
                </Toolbar>
            </AppBar>
        </Box>
    </>
  )
}
