import React from 'react'

export const ChatItem = ({
    avatar=[],
    name,
    _d,
    groupChat = false,
    sameSender,
    isOnline,
    newMessage
}) => {
  return (
    <Stack width={w} direction="column" spacing={1}>
      {chats.map((chat) => {
        const isOnline = onlineUsers.includes(chat._id);
        const newMessage = newMessageAlert.find(alert => alert.chatId === chat._id)?.count || 0;

        return (
          <div key={chat._id} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: chatId === chat._id ? '#e0f7fa' : '#fff' }}>
            <h4>{chat.name}</h4>
            <p>{isOnline ? 'Online' : 'Offline'}</p>
            {newMessage > 0 && <span style={{ color: 'red' }}>New Messages: {newMessage}</span>}
            <button onClick={() => handleDeleteChat(chat._id)}>Delete Chat</button>
          </div>
        );
      })}

    </Stack>
  )
}
