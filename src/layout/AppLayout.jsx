
import React from 'react'
import Title from '../components/shared/Title'
import { Grid } from '@mui/material'
import { Header } from './Header'
import { offWhite, white } from '../constants/colors'

const AppLayout = () => WrappedComponent => {
    return (props) => (
        <>
            <Title title="Chatty | Chat App" description="New generation Chat App" />
            <Header />
            <Grid container height={"calc(100vh - 4rem)"}>
                <Grid item
                    size={{ sm: 4, md: 3, lg:3 }}
                    sx={{
                        display: { xs: "none", sm: "block" },
                        bgcolor: "rgba(0, 0, 0, 0.45)",
                        padding: "2rem"
                    }} 
                    height={"100%"} 
                    bgcolor="primary.main">First</Grid>

                <Grid item
                    size={{ xs: 12, sm: 8, md: 5, lg: 6 }} 
                    sx={{
                        display: { xs: "none", sm: "block" }
                    }} 
                    height={"100%"} 
                    bgcolor={offWhite}>
                    {WrappedComponent && (<WrappedComponent {...props} />)}
                </Grid>

                <Grid  item
                    size={{ md: 4, lg: 3 }} 
                    height={"100%"} 
                    sx={{
                        display: { xs: "none", md: "block" },
                        bgcolor: "rgba(0, 0, 0, 0.65)",
                        padding: "2rem"
                    }}
                    >
                    Profile</Grid>
            </Grid>
            {/* <footer>
                <p>App Layout Footer</p>
            </footer> */}
        </>
    )
}

export default AppLayout