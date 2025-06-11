import { AppBar, Box, Icon, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { lazy, Suspense } from 'react'
import { offWhite, orange, pink } from '../constants/colors'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from 'react-router-dom';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import { LoadingBackDrop } from '../components/shared/LoadingBackDrop';

const NewGroup = lazy(() => import('../components/specific/NewGroup'));
const Notifications = lazy(() => import('../components/specific/Notifications'));
const SearchDialog = lazy(() => import('../components/specific/SearchDialog'));

export const Header = () => {

    const navigate = useNavigate();
    const [isMobile, setIsMobile] = React.useState(false);
    const [isNotification, setIsNotification] = React.useState(false);
    const [isSearch, setIsSearch] = React.useState(false);
    const [isNewGroup, setIsNewGroup] = React.useState(false);

    const handleMobile = () => {
        // Handle mobile menu toggle logic here
        setIsMobile(prev=> !prev);
        console.log("Mobile menu toggled");
    }
    const openSearch = () => {
        // Handle mobile menu toggle logic here
        setIsSearch(prev => !prev);
        console.log("Search clicked");
    }
    const openNewGroup = () => {
        // Handle mobile menu toggle logic here
        setIsNewGroup(prev => !prev);
        console.log("Add Group clicked");
    }
    const navigateToGroup = () => {
        // Handle mobile menu toggle logic here
        navigate("/groups")
        console.log("Navigate to Groups clicked");
    }
    const openNotifications = () => {
        // Handle mobile menu toggle logic here
        setIsNotification(prev => !prev);
        console.log("Open Notifications clicked");
    }
    const handleLogout = () => {
        // Handle mobile menu toggle logic here
        set(prev => !prev);
        console.log("Add Group clicked");
    }
    const navigateToHome = () => {
        // Handle mobile menu toggle logic here
         navigate("/")
        console.log("Navigate to Home clicked");
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }} height="4rem">
                <AppBar position="static" sx={{ bgcolor: pink }}>
                    <Toolbar>
                        <Box >
                            <IconButton color="inherit" onClick={navigateToHome}><QuickreplyIcon /></IconButton>
                        </Box>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                            display={{ xs: 'none', sm: 'block' }}
                            // fontFamily="Monicat, sans-serif"
                            style={{ fontFamily: 'Dealoras, MonicaG', fontSize: '1.5rem', fontWeight: 1000, color: offWhite }}
                        >
                           Chatty
                        </Typography>
                        <Box display={{ xs: 'block', sm: 'none' }}>
                            <IconButton color="inherit" onClick={handleMobile}><MenuIcon /></IconButton>
                        </Box>
                        <Box 
                        sx={{
                            flexGrow: 1,
                        }}>
                        </Box>
                        <Box>
                            <IconBtn tittle="Search" icon={<SearchIcon/>} onClick={openSearch}/>
                            <IconBtn tittle="New Group" icon={<AddIcon/>} onClick={openNewGroup}/>
                            <IconBtn tittle="Manage Group" icon={<GroupIcon/>} onClick={navigateToGroup}/>
                            <IconBtn tittle="Notification" icon={<NotificationsIcon/>} onClick={openNotifications}/>
                            <IconBtn tittle="Log Out " icon={<LogoutIcon/>} onClick={handleLogout}/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {isNewGroup && (
                <Suspense fallback={<LoadingBackDrop message="Loading New Group..." />}>
                <NewGroup/>
                </Suspense>
            )}
            {isNotification && (
                <Suspense fallback={<LoadingBackDrop message="Loading Notifications..." />}>
                <Notifications/>
                </Suspense>
            )}
            {isSearch && (
                <Suspense fallback={<LoadingBackDrop message="Loading Search Dialog..." />}>    
                <SearchDialog/>
                </Suspense>
            )}
        </>
    )
}


const  IconBtn = ({ tittle, icon, size="large", onClick }) => {
    return (
        <Tooltip title={tittle} >
            <IconButton color="inherit" size={size} onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>
    )
}