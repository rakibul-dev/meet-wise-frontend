import { Box, Grid, Stack } from "@mui/material";
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
    <div>
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
                style={{ height: "89%", borderBottom: "none" }}
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
                <Conversation />
                <Conversation /> <Conversation />
                <Conversation />
                <Conversation /> <Conversation />
                <Conversation />
                <Conversation /> <Conversation />
                <Conversation />
                <Conversation /> <Conversation />
                <Conversation />
                <Conversation />
              </Scrollbars>
            </Box>
          </Grid>
          <Grid item md={6} height="100%" width="100%">
            <Stack
              direction="column"
              justifyContent="space-between"
              height="100vh"
              width="100%"
            >
              <ChatBoxNavbar />

              <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
              >
                <Box
                  style={{
                    // backgroundColor: "gray",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    paddingTop: "100px",
                    paddingBottom: "10px",
                    paddingRight: "15px",
                    paddingLeft: "15px",
                  }}
                  gap={2}
                >
                  <Message sender={false} />
                  <Message sender={true} />
                </Box>
              </ScrollArea>
              <SendMessage />
            </Stack>
          </Grid>
          <Grid item md={2.3}>
            <Box>
              <ProfileCard />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MessagePage;
