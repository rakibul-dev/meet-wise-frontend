import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Appbar from "../components/Appbar/Appbar";
import SideMenubar from "../components/SideMenubar/SideMenubar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ChatBoxNavbar from "../components/ChatBoxNavbar/ChatBoxNavbar";

import ScrollArea from "react-scrollbar";
const MessagePage = () => {
  return (
    <div>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={0}
        >
          <Grid item md={0.7}>
            <SideMenubar />
          </Grid>
          <Grid item md={3}>
            <Box
              sx={{
                backgroundColor: "#512B81",
                height: "100vh",
              }}
            >
              {/* <Appbar /> */}
            </Box>
          </Grid>
          <Grid item md={6} height="100%" width="100%">
            <Stack
              direction="column"
              justifyContent="space-between"
              height="100vh"
              width="100%"
            >
              <ChatBoxNavbar />

              <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}
              >
                <div
                  style={{
                    backgroundColor: "gray",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "auto",
                      maxWidth: "60%",
                      backgroundColor: "white",
                    }}
                  >
                    <Typography variant="p">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam neque vel temporibus totam sequi fugiat eum sit,
                      hic impedit beatae laboriosam quo, similique harum odit
                      explicabo dolorum aliquid provident porro?
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <Box
                      sx={{
                        marginLeft: "auto",
                        maxWidth: "60%",
                        backgroundColor: "white",
                      }}
                    >
                      <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veniam neque vel temporibus totam sequi fugiat eum sit,
                        hic impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro? Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Veniam
                        neque vel temporibus totam sequi fugiat eum sit, hic
                        impedit beatae laboriosam quo, similique harum odit
                        explicabo dolorum aliquid provident porro?
                      </Typography>
                    </Box>
                    <Avatar />
                  </Box>
                </div>
              </ScrollArea>

              <Appbar />
            </Stack>
          </Grid>
          <Grid item md={2.3}>
            <Box>
              <ProfileCard />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default MessagePage;
