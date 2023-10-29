import React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Box, Grid, Stack, Typography, Badge } from "@mui/material";
const ChatBoxNavbar = () => {
  return (
    <div>
      <Box sx={{ width: "100%", position: "relative" }}>
        <AppBar position="absolute" sx={{ backgroundColor: "white" }}>
          <Box sx={{ width: "100%" }}>
            <Grid container justifyContent="flex-start" alignItems="center">
              <Grid item md={1}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Avatar />
                </Box>
              </Grid>
              <Grid item md={2}>
                <Stack>
                  <Typography variant="h6"> John wick</Typography>
                  <Stack
                    direction="row"
                    alignContent="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <Typography variant="p" color="black">
                      Online
                    </Typography>

                    <Badge variant="dot" color="success" />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </AppBar>
      </Box>
    </div>
  );
};

export default ChatBoxNavbar;
