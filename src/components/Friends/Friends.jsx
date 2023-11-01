import {
  OutlinedInput,
  InputAdornment,
  TextField,
  Box,
  Avatar,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import { getFriends } from "../../Redux/Slices/PeoplesSlice";
import { useNavigate } from "react-router-dom";
import { createConversation } from "../../Redux/Slices/ConversationsSlice";

const Friends = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { friends } = useSelector((state) => state.PeoplesSlice);
  const { user } = useSelector((state) => state.userSlice);
  useEffect(() => {
    dispatch(getFriends());
  }, []);

  const handleCreateConversation = (reciverId) => {
    dispatch(
      createConversation({ senderId: user._id, reciverId: reciverId })
    ).then((res) => {
      navigate(`/conversations/${res.payload._id}/${reciverId}`);
      console.log(res.payload._id);
    });
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <OutlinedInput
          // InputProps={{ sx: { borderRadius: 100 } }}
          sx={{
            borderRadius: "100px",
            backgroundColor: "#35155d",
            color: "white",
          }}
          size="small"
          fullWidth
          type="outlined"
          onFocus={{}}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon style={{ color: "white" }} />
            </InputAdornment>
          }
        />
      </Box>
      {friends.length ? (
        friends.map((friend) => (
          <Box key={friend._id}>
            <Box
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
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                width="100%"
              >
                <Typography variant="h6" color="white">
                  {friend.friend.username}
                </Typography>

                <IconButton
                  aria-label="delete"
                  size="large"
                  onClick={() => {
                    handleCreateConversation(friend.friend._id);
                  }}
                >
                  <ChatBubbleIcon fontSize="inherit" />
                </IconButton>
                {/* <Button
                  variant="contained"
                  onClick={() => {
                    handleSendFriendRequest({
                      requestSender: user._id,
                      requestReciver: people._id,
                    });
                  }}
                >
                  Add friend
                </Button> */}
              </Stack>
            </Box>
          </Box>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Friends;
