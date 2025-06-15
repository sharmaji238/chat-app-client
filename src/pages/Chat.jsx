import { useRef } from 'react'
import AppLayout from '../layout/AppLayout'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { green, grey, offWhite, pink, pinkHover, purple } from '../constants/colors'
import { StyledInputBox } from '../components/styles/StyledComponent'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'
import { FileMenu } from '../components/dialogs/FileMenu'
import { sampleMessage } from '../constants/sampleData'
import MessageComponent from '../components/shared/MessageComponent'

  const user= {
    _id: "1",
    name: "Ravi",
  }

const Chat = () => {
  const containerRef = useRef(null)
  const fileMenuRef = useRef(null)

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        p={{ xs: "1rem", sm: "2rem" }}
        spacing={{ xs: "1rem", sm: "2rem" }}
        bgcolor={grey}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
          // position: "relative",
          // flexGrow: 1,
          // flexShrink: 0,
          // flexBasis: "auto",
        }}>

           {/* Messages */}
        {
          sampleMessage?.map((message, index) => (   
            <MessageComponent message={message} user={user} key={message._id}/>
             ))
        }
        
      </Stack>       
      {/* Chat Input */}
      <Box
        component={"form"}
        sx={{
          height: "10%",
        }}>
        <Stack
          direction={"row"}
          height={"100%"}
          alignItems={"center"}
          padding={"0.5rem"}
          position={"relative"}
          >
          <IconButton
            sx={{
              position: "absolute",
              left: "0.5rem",
              rotate: "45deg",
              color: pink,
              '&:hover': {
                color: purple,
              },
            }}
            ref={fileMenuRef}
          ><AttachFileIcon /></IconButton>
          <StyledInputBox placeholder='Type Message here...' autoFocus />
          <IconButton type='submit'
            sx={{
              bgcolor: pink,
              color: offWhite,
              '&:hover': {
                bgcolor: purple,
              },
            }}
          ><SendIcon /></IconButton>
        </Stack>
      </Box>
      <FileMenu ref={fileMenuRef} anchorEl={fileMenuRef.current} />
    </>
  )
}

export default AppLayout()(Chat)