/* eslint-disable react/prop-types */

import { Box, Typography, Avatar } from "@mui/material";

const Message = (props) => {
  console.log(props);
  return (
    <div>
      {props.sender ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "flex-end",
          }}
          gap={2}
        >
          <Box
            sx={{
              marginLeft: "auto",
              maxWidth: "60%",
              backgroundColor: "#512b81",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="p" color="white">
              {props.message.message}
            </Typography>
          </Box>
          <Avatar />
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "flex-end" }} gap={2}>
          <Avatar />
          <Box
            sx={{
              marginRight: "auto",
              maxWidth: "60%",
              backgroundColor: "#bdbdbd",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="p">{props.message.message} </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Message;
