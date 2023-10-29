import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const Conversation = () => {
  return (
    <div>
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
    </div>
  );
};

export default Conversation;
