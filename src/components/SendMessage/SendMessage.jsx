import {
  OutlinedInput,
  InputAdornment,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
const SendMessage = () => {
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
          autoFocus
          //   onChange={handlePhoneNumberChange}
          placeholder="Type your message"
          InputProps={{
            endAdornment: (
              <IconButton color="primary">
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
