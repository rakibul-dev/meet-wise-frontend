import React from "react";
import { OutlinedInput, InputAdornment, TextField, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const ConversationSearchBox = () => {
  return (
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
  );
};

export default ConversationSearchBox;
