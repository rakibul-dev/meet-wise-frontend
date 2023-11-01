import { Box, Grid } from "@mui/material";
import SideMenubar from "../components/SideMenubar/SideMenubar";
import { Scrollbars } from "react-custom-scrollbars";
import { Outlet } from "react-router-dom";
import Peoples from "../components/Peoples/Peoples";
import Friends from "../components/Friends/Friends";

const FriendsPageLayout = () => {
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
                // overflowX: "scroll",
              }}
            >
              <Scrollbars
                style={{ height: "89%", borderBottom: "none" }}
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                // autoHeight
                // autoHeightMin={0}
                // autoHeightMax={200}
                thumbMinSize={30}
                universal={true}
                noDefaultStyles
                disableTracksWidthCompensation
              >
                <Friends />
              </Scrollbars>
            </Box>
          </Grid>
          <Grid item md={8.3}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default FriendsPageLayout;
