import { Button, Dialog, DialogTitle, Divider, ListItem, Stack, Typography } from '@mui/material'
import moment from 'moment'
import { memo } from 'react'
import { black, grey, pink } from '../../constants/colors'
import { sampleNotifications } from '../../constants/sampleData'
import { AvatarCard } from '../shared/AvatarCard'

const Notifications = ({ }) => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("Friend request handler called for user:", _id, "Accept:", accept);
    // Implement friend request logic here
  }
  return (
    <Dialog
      open={true}
      onClose={() => console.log('Dialog closed')}
      maxWidth="sm"
    // fullWidth
    >
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((notification) => {
            const { sender, _id, createdAt } = notification;
            return (
              <NotificationItem
                sender={sender}
                createdAt={createdAt}
                key={_id}
                _id={_id}
                handler={friendRequestHandler}
              />
            )
          }
          )
        ) : (
          <Typography variant="body1" color="textSecondary" textAlign="center" mt={2}>
            0 Notifications
          </Typography>
        )
        }
      </Stack>
    </Dialog>
  )
}

export default Notifications;

const NotificationItem = memo((data) => {
  const { _notId, sender, createdAt } = data;
  const { name, avatar, _id } = sender;
  return (
    <>
    <ListItem>
    <Stack  
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    width={"100%"}>
      <AvatarCard avatar={avatar} />
      <Stack>
        <Typography variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >{`${name} sent you a friend request.`}</Typography>
        <Typography variant="caption" color={black}>{moment(createdAt).fromNow()}</Typography>
      </Stack>
      <Stack direction={{ xs: "column", 
        // sm: "row"
         }}>
            <Button sx={{ color: pink }}
              onClick={() => handler({ _id, accept: true })}
            >Accept</Button>
            <Button sx={{ color: grey }} color={grey}
              onClick={() => handler({ _id, accept: false })}
            >Reject</Button>
      </Stack>
    </Stack>
    </ListItem>
    <Divider variant='inset' sx={{ color: pink }}/>
    </>
  )
})