
import Title from '../components/shared/Title'
import { Grid } from '@mui/material'
import { Header } from './Header'
import { offWhite, white } from '../constants/colors'
import ChatsList from '../components/specific/ChatList'
import { sampleChats } from '../constants/sampleData'
import { useParams } from 'react-router-dom'
import Profile from '../components/specific/Profile'

const AppLayout = () => WrappedComponent => {
    return (props) => {
        const params = useParams();
        const chatId = params.chatId;

        const handleDeleteChat =(e, _id,groupChat)=>{
            e.preventDefault();
            console.log("Delete chat clicked", _id, groupChat);
            // Implement the logic to delete the chat
        }

        return(<>
            <Title title="Chatty | Chat App" description="New generation Chat App" />
            <Header />
            <Grid container height={"calc(100vh - 4rem)"}>
                <Grid
                    size={{ sm: 4, md: 3, lg: 3 }}
                    sx={{
                        display: { xs: "none", sm: "block" },
                        bgcolor: "rgba(0, 0, 0, 0.45)",
                        padding: "0em",
                    }}
                    height={"100%"}
                    bgcolor="rgba(0, 0, 0, 0.45)"
                >
                    <ChatsList chats={sampleChats}
                        chatId={"chatId"}
                        onlineUsers={["1", "2"]}
                        newMessagesAlert={[{ chatId: "chat1", count: 2 }]}
                        handleDeleteChat={handleDeleteChat}
                    />

                </Grid>

                <Grid
                    size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
                    sx={{
                        display: { xs: "none", sm: "block" }
                    }}
                    height={"100%"}
                    bgcolor={offWhite}>
                    {WrappedComponent && (<WrappedComponent {...props} />)}
                </Grid>

                <Grid
                    size={{ md: 4, lg: 3 }}
                    height={"100%"}
                    sx={{
                        display: { xs: "none", md: "block" },
                        bgcolor: "rgba(0, 0, 0, 0.65)",
                        padding: "2rem"
                    }}
                >
                <Profile/>
                    </Grid>
            </Grid>
            {/* <footer>
                <p>App Layout Footer</p>
            </footer> */}
        </>)
    }
}

export default AppLayout