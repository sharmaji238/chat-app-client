import { Avatar, Stack, Typography } from '@mui/material'
import { black, grey, offWhite } from '../../constants/colors';
import FaceIcon from '@mui/icons-material/Face';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';

const Profile = () => {
    return (
        <Stack spacing={"2rem"} alignItems={"center"}>
            <Avatar
                sx={{ width: "12rem", 
                    height: "12rem", 
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border:"0.125rem solid white",
                    boxShadow: "0 0 10px rgba(23, 18, 18, 0.5)"
                 }}
                alt="User Avatar"
                src= "https://picsum.photos/206"
                
                />
            <ProfileCard
                text="Lorem ipsum dolor sit amet, consectetur adipiscing et dolore magna aliqua."
                Icon={<CalendarMonthIcon/>}
                heading="Bio" />
            <ProfileCard
                text="ravi_sh"
                Icon={<AlternateEmailIcon />}
                heading="User Name" />
            <ProfileCard
                text="Ravi Sharma"
                Icon={<FaceIcon />}
                heading="Name" />
            <ProfileCard
                text={moment("2023-10-01").fromNow()}
                Icon={<CalendarMonthIcon/>}
                heading="Joined" />    
        </Stack>
    )
}
export default Profile;

export const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack
        direction={"row"}
            spacing={"0.5rem"}
            alignItems={"center"}
            color={offWhite}
            textAlign={"center"}
        >
         {Icon && Icon}   
            <Stack>
                <Typography variant="body1">{text || "User Name"}</Typography>
                <Typography variant="caption" color={black}>{heading||"User Bio or Status"}</Typography>
            </Stack>  
        </Stack>
    )
}