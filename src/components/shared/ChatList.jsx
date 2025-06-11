import { Stack } from '@mui/material'

const ChatList = (
    {w="100%", chats=[], chatId, onlineUsers=[], 
    newMessageAlert=[{
        chatId: "",
        count: 0
    }],
    handleDeleteChat,

}
) => {
  return (
    <Stack width={w} direction="column" spacing={1}>
      {chats.map((chat) => {})}
      </Stack>
  )
}

export default ChatList