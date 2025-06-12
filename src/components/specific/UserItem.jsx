import { Avatar, Divider, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey, pink, purple } from '../../constants/colors';

const UserItem = ({
    user,
    handler,
    handlerIsLoading,
    isAdded = false,
    styling = {}, }) => {
    return (
        <>
            <ListItem key={user?.id} onClick={() => console.log(`Selected user: ${user?.name}`)}>
                <ListItemAvatar>
                    <Avatar alt={user?.name} src={user?.avatar} />
                </ListItemAvatar>
                <ListItemText primary={user?.name} secondary={user?.email}
                    sx={{
                        flexGlow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                    }}
                />
                <IconButton
                    size="small"
                    sx={{
                        bgcolor: isAdded ? grey : pink,
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
            <Divider variant="inset" component="li" />
        </>
    )
}

export default UserItem