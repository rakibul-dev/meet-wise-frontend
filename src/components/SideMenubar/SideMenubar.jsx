import { Box, Avatar, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import LogoutIcon from "@mui/icons-material/Logout";
import ForumIcon from "@mui/icons-material/Forum";
import PeopleIcon from "@mui/icons-material/People";

const SideMenubar = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#35155D",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{}}>
          <Box>
            <Avatar src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" />
          </Box>
          <Box sx={{ marginTop: "25px" }}>
            <Stack direction="column">
              <IconButton>
                <PeopleIcon style={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <ForumIcon style={{ color: "white" }} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <IconButton color="primary" aria-label="add to shopping cart">
          <LogoutIcon style={{ color: "white" }} />
        </IconButton>
      </Box>
    </>
  );
};

export default SideMenubar;
