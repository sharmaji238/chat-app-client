
import React from 'react'
import Title from '../components/shared/Title'
import { Grid } from '@mui/material'
import { Header } from './Header'

const AppLayout = () => WrappedComponent => {
    return (props) => (
        <>
            <Title title="Chattu | Chat App" description="New generation Chat App" />
            <Header />
            <Grid container height={"calc(100vh - 4rem)"}>
                <Grid item
                    size={{ sm: 4, md: 3, lg:3 }}
                    sx={{
                        display: { xs: "none", sm: "block" }
                    }} 
                    height={"100%"} 
                    bgcolor="primary.main">First</Grid>

                <Grid item
                    size={{ xs: 12, sm: 8, md: 5, lg: 6 }} 
                    sx={{
                        display: { xs: "none", sm: "block" }
                    }} 
                    height={"100%"} 
                    bgcolor="primary.main">
                    {WrappedComponent && (<WrappedComponent {...props} />)}
                </Grid>

                <Grid  item
                    size={{ md: 4, lg: 3 }} 
                    height={"100%"} 
                    bgcolor="seondary">Profile</Grid>
            </Grid>
            {/* <footer>
                <p>App Layout Footer</p>
            </footer> */}
        </>
    )
}

export default AppLayout