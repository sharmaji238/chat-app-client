import React, { memo } from 'react'
import { StyledLink } from '../styles/StyledComponents'
import { AvatarCard } from './AvatarCard'
import { Box, Divider, Stack, Typography } from '@mui/material'

 const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChat,
}) => {
  return (
    <StyledLink 
    to={`/chat/${_id}`} 
    sx={{padding: "0"}}
    onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)} >
      <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        padding: "0.5rem 1.5rem",
        margin: "0rem 0.5rem",
        backgroundColor: sameSender ? "#f0f0f0" : "transparent",
        position: "relative"
      }}
      >
        <AvatarCard avatar={avatar} />
        <Stack>
          <Typography
          variant='body1'
          sx={{
            fontWeight: "600",
            color: sameSender ? "primary.main" : "text.primary",
          }}
          >{name}</Typography>
          {newMessageAlert && (
            <Typography variant="caption">{newMessageAlert.count} new messages</Typography>
          )}
        </Stack>
        {isOnline && (
          <Box 
            sx={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "50%",
              right: "0.5rem",
              transform: "translateY(-50%)"
            }}
          />)}
      </div>
      <Divider variant='inset'/>
    </StyledLink>
  )
}

export default ChatItem;