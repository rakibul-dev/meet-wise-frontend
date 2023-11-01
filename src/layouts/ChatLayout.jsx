import { Box, Grid, Stack } from "@mui/material";

import SideMenubar from "../components/SideMenubar/SideMenubar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ChatBoxNavbar from "../components/ChatBoxNavbar/ChatBoxNavbar";
import { Scrollbars } from "react-custom-scrollbars";
import ScrollArea from "react-scrollbar";
import Message from "../components/Messages/Message";
import Conversation from "../components/Conversation/Conversation";
import ConversationSearchBox from "../components/ConversationSearchBox/ConversationSearchBox";
import SendMessage from "../components/SendMessage/SendMessage";
import { Outlet } from "react-router-dom";
const ChatLayout = () => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={0}
      >
        <Grid item md={0.7}>
          <SideMenubar />
        </Grid>
        <Grid item md={3}>
          <Box
            sx={{
              backgroundColor: "#512B81",
              height: "100vh",
              // overflowX: "scroll",
            }}
          >
            <ConversationSearchBox />
            <Scrollbars
              style={{ height: "89%",  borderBottom: "none" }}
              autoHide
              autoHideTimeout={1000}
              autoHideDuration={200}
              // autoHeight
              // autoHeightMin={0}
              // autoHeightMax={200}
              thumbMinSize={30}
              universal={true}
              noDefaultStyles
              disableTracksWidthCompensation
            >
              <Conversation />
            </Scrollbars>
          </Box>
        </Grid>
        <Outlet />
      </Grid>
    </Box>
  );
};

export default ChatLayout;
