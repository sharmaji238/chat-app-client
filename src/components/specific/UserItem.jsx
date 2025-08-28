import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey, pink, purple, red } from '../../constants/colors';

const UserItem = ({
    user,
    handler,
    handlerIsLoading,
    isAdded = false,
    styling = {}, 
}) => {
        
    const {_id,name,avatar}=user

    return (
        <>
            <ListItem 
            // onClick={() => console.log(`Selected user: ${name}`)}
                >
                <ListItemAvatar>
                    <Avatar alt={name} src={avatar} />
                </ListItemAvatar>
                <ListItemText primary={name} 
                    sx={{
                        flexGlow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        maxWidth: "20rem"
                    }}
                />
                <IconButton
                    size="small"
                    sx={{
                        bgcolor: isAdded ? red : pink,
                        color: "white",
                        "&:hover": {
                            bgcolor: isAdded ? "error.dark" : purple,
                        },
                    }}
                    onClick={() => handler(_id)}
                    disabled={handlerIsLoading}
                >
                    {isAdded ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
            </ListItem>
            <Divider variant="inset" />
        </>
    )
}

export default UserItem