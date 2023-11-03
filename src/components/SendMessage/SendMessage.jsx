import {
  OutlinedInput,
  InputAdornment,
  TextField,
  Box,
  IconButton,
} from "@mui/material";

import { useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../../Redux/Slices/MessageSlice";
const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.userSlice);
  const { reciverId } = useParams();
  const dispatch = useDispatch();
  console.log({ message });

  const handleSendMessage = () => {
    dispatch(
      sendMessage({ senderId: user._id, reciverId: reciverId, message })
    );
    setMessage("");
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "10%",
        padding: "10px",
      }}
    >
      <TextField
        variant="standard"
        margin="normal"
        required
        fullWidth
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        autoFocus
        //   onChange={handlePhoneNumberChange}
        placeholder="Type your message"
        InputProps={{
          endAdornment: (
            <IconButton
              color="primary"
              disabled={message === "" ? true : false}
              onClick={() => {
                handleSendMessage();
              }}
            >
              <SendIcon />
            </IconButton>
          ),
          disableUnderline: true,
        }}
      />
    </Box>
  );
};

export default SendMessage;
