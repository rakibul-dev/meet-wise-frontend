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
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, removeMessages } from "../Redux/Slices/MessageSlice";

const ChatPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state.messageSlice);
  const { selectedConversation } = useSelector(
    (state) => state.conversationSlice
  );
  const { user } = useSelector((state) => state.userSlice);
  const messagesEndRef = useRef();

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    dispatch(getMessages(id));

    return () => {
      console.log("Unmounting FunctionalComponent");
      dispatch(removeMessages());
    };
  }, [dispatch, selectedConversation]);

  useEffect(() => {
    console.log("checking ref====>", messagesEndRef.current);
    if (messagesEndRef.current) {
      const element = messagesEndRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);
  return (
    // <Box sx={{ width: "100%", height: "100vh" }}>
    //   <Grid
    //     container
    //     justifyContent="space-between"
    //     alignItems="flex-start"
    //     spacing={0}
    //   >
    //     <Grid item md={0.7}>
    //       <SideMenubar />
    //     </Grid>
    // <Grid item md={3}>
    //   <Box
    //     sx={{
    //       backgroundColor: "#512B81",
    //       height: "100vh",
    //       // overflowX: "scroll",
    //     }}
    //   >
    //     <ConversationSearchBox />
    //     <Scrollbars
    //       style={{ height: "89%", borderBottom: "none" }}
    //       autoHide
    //       autoHideTimeout={1000}
    //       autoHideDuration={200}
    //       // autoHeight
    //       // autoHeightMin={0}
    //       // autoHeightMax={200}
    //       thumbMinSize={30}
    //       universal={true}
    //       noDefaultStyles
    //       disableTracksWidthCompensation
    //     >
    //       <Conversation />
    //       <Conversation />
    //       <Conversation /> <Conversation />
    //       <Conversation />
    //       <Conversation /> <Conversation />
    //       <Conversation />
    //       <Conversation /> <Conversation />
    //       <Conversation />
    //       <Conversation /> <Conversation />
    //       <Conversation />
    //       <Conversation />
    //     </Scrollbars>
    //   </Box>
    // </Grid>
    <Grid item md={8.3} height="100%" width="100%">
      <Stack
        direction="column"
        justifyContent="space-between"
        height="100vh"
        width="100%"
      >
        <ChatBoxNavbar />

        {/* <ScrollArea
          speed={0.8}
          className="area"
          contentClassName="content"
          horizontal={false}
        > */}
        <Box
          style={{
            // backgroundColor: "gray",
            height: "85%",
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
          {/* <Message sender={false} />
            <Message sender={true} /> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              height: "100vh",
              width: "100%",
              justifyContent: "flex-end",
            }}
            ref={messagesEndRef}
            gap={2}
          >
            {messages?.map((message) => (
              <Message
                sender={user._id === message.sender ? true : false}
                key={message._id}
                message={message}
              />
            ))}
          </Box>
        </Box>
        {/* </ScrollArea> */}

        <SendMessage />
      </Stack>
    </Grid>
    // <Grid item md={2.3}>
    //   <Box>
    //     <ProfileCard />
    //   </Box>
    // </Grid>
    //   </Grid>
    // </Box>
  );
};

export default ChatPage;
