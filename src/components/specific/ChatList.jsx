import { Divider, Stack, Typography } from '@mui/material'
import ChatItem from '../shared/ChatItem';
import { pink, purple } from '../../constants/colors';
import LockIcon from '@mui/icons-material/Lock';
const ChatList = (
  { w = "100%",
    chats = [],
    chatId,
    onlineUsers = [],
    newMessagesAlert = [{
      chatId: "",
      count: 0
    }],
    handleDeleteChat,
  }
) => {
  // const isOnline = members?.some(member => onlineUsers.includes(member._id));
  return (
    <Stack width={w} direction={"column"} overflow={"auto"} height={"100%"}>
      {chats?.map((chat, index) => {
        const { _id, name, avatar = [], groupChat = false, members = [] } = chat;

        const newMessageAlert = newMessagesAlert.find(alert => alert.chatId === _id) || { count: 0 };
        const isOnline = members.some(member => onlineUsers.includes(member._id));
        const sameSender = chatId === _id;
        // const avatarSrc = avatar.length > 0 ? avatar[0] : "https://via.placeholder.com/150"; // Fallback avatar
        // const avatar = {
        //   src: avatarSrc,
        //   alt: name || "Chat Avatar"
        // };
        return (
          <ChatItem
            index={index}
            key={_id}
            avatar={avatar}
            name={name}
            _id={_id}
            groupChat={groupChat}
            sameSender={sameSender}
            isOnline={true}
            newMessageAlert={newMessageAlert}
            handleDeleteChat={handleDeleteChat}
          />
        )
      })}
      <Typography variant='caption' my={1}>
        <LockIcon   sx={{ fontSize:"1rem", color: purple, verticalAlign: 'middle' }} />
        {' '}
        Your your messages are
        {' '}
        <Typography color={purple} component="span" variant="caption" fontWeight="bold">
          end to end encrypted
        </Typography>
      </Typography>
      <Divider />
    </Stack>
  )
}

export default ChatList