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
    console.log({ senderId: user._id, reciverId: reciverId, message });
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", padding: "10px" }}>
        <TextField
          variant="standard" // <== changed this
          margin="normal"
          required
          fullWidth
          //   id="phoneNumber"
          //   name="phoneNumber"
          //   autoComplete="phoneNumber"
          onChange={(e) => setMessage(e.target.value)}
          autoFocus
          //   onChange={handlePhoneNumberChange}
          placeholder="Type your message"
          InputProps={{
            endAdornment: (
              <IconButton
                color="primary"
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
    </div>
  );
};

export default SendMessage;
