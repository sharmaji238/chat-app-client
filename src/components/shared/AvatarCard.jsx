import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transformImage } from '../../lib/features'

export const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <Stack spacing={0.5}>
            <AvatarGroup max={max} sx={{ width: 32, height: 32 }}>
                <Box width={"5rem"} height={"5rem"} >

                    {avatar?.map((item, index) => (
                        <Avatar 
                        key={Math.random()*100} 
                        alt={`Avatar ${index}`} 
                        src={transformImage(item, 50)} 
                        sx={{
                            width:"2rem",
                            height:"2rem",
                            border: "2px solid white",
                            position: "absolute",
                            left:{
                                xs: `${index * 0.25}rem`,
                                sm: `${index*0.5}rem`,
                            }
                         }}
                         />
                    ))}
                </Box>
            </AvatarGroup>
        </Stack>
    )
}
