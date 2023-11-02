import { Avatar, Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getConversations,
  selectConversation,
} from "../../Redux/Slices/ConversationsSlice";
import { useNavigate } from "react-router-dom";

const Conversation = () => {
  const dispatch = useDispatch();
  const { conversations } = useSelector((state) => state.conversationSlice);
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getConversations());
  }, []);

  function findMessageReciver(arr, element) {
    console.log(arr);
    for (const item of arr) {
      if (item !== element) {
        console.log({ item });
        return item; // Return the first unmatched element found
      }
    }
    // return null; // Return null if no unmatched element is found
  }
  //   const messageReciver = findMessageReciver(fruits, "apple");
  return (
    <div>
      {conversations.length ? (
        conversations.map((item) =>
          item.lastMessage ? (
            <Box
              onClick={() => {
                dispatch(selectConversation(item._id));
                navigate(
                  `/conversations/${item._id}/${findMessageReciver(
                    item.participants,
                    user._id
                  )}`
                );
              }}
              key={item._id}
              sx={{
                display: "flex",
                alignItems: "center",
                paddingRight: "10px",
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              gap={2}
            >
              <Avatar />
              <Stack direction="column">
                <Typography variant="h6" color="white">
                  John wick
                </Typography>
                <Typography
                  variant="p"
                  color="gray"
                  style={{ padding: "opx", margin: "0px" }}
                >
                  this is last message
                </Typography>
              </Stack>
            </Box>
          ) : null
        )
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Conversation;
