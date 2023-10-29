import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const ProfileCard = () => {
  return (
    <div>
      <Box
        sx={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_8385663.png"
            alt=""
            style={{ width: "150px", height: "150px", borderRadius: "100%" }}
          />
          <Typography variant="h5">John wick</Typography>
        </Box>
        <Typography variant="h6">John wick</Typography>
        <Stack direction="Row">
          <IconButton>
            <FacebookIcon style={{ color: "#0165E1" }} />
          </IconButton>
          <IconButton>
            <TwitterIcon style={{ color: "#1D9BF0" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon style={{ color: "#0A66C2" }} />
          </IconButton>
        </Stack>
        <Button variant="contained">edit profile</Button>
      </Box>
    </div>
  );
};

export default ProfileCard;
