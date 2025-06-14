import {useRef} from 'react'
import AppLayout from '../layout/AppLayout'
import { Stack } from '@mui/material'
import { green, grey } from '../constants/colors'

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
      position: "relative",
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: "auto",
    }}>

      {/* Chat Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <h2>Chat</h2>
        {/* Add any chat header actions here */}
      </Stack>

      {/* Chat Messages */}
      <Stack spacing={2} sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {/* Render chat messages here */}
        {/* Example message */}
        <div>Message 1</div>
        <div>Message 2</div>
        <div>Message 3</div>
        {/* Add more messages as needed */}
      </Stack>

      {/* Chat Input */}
      <Stack direction="row" spacing={1} alignItems="center">
        <input type="text" placeholder="Type a message..." style={{ flexGrow: 1 }} />
        <button type="submit">Send</button>
      </Stack>
    

    </Stack>
    </>
  )
}

export default AppLayout()(Chat)