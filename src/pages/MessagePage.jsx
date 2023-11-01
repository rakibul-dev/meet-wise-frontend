import { Box, Grid, Stack, Typography } from "@mui/material";
import Appbar from "../components/Appbar/Appbar";
import SideMenubar from "../components/SideMenubar/SideMenubar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ChatBoxNavbar from "../components/ChatBoxNavbar/ChatBoxNavbar";
import { Scrollbars } from "react-custom-scrollbars";

import ScrollArea from "react-scrollbar";
import Message from "../components/Messages/Message";
import Conversation from "../components/Conversation/Conversation";
import ConversationSearchBox from "../components/ConversationSearchBox/ConversationSearchBox";
import SendMessage from "../components/SendMessage/SendMessage";
const MessagePage = () => {
  return (
    <Grid item md={8.3}>
      <Box>
        <Typography variant="h5">Select a conversation for chat</Typography>
      </Box>
    </Grid>
  );
};

export default MessagePage;
