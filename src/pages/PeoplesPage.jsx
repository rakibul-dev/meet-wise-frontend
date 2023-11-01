import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const PeoplesPage = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6}>
            <Stack alignItems="center" justifyContent="center">
              <img
                src="/images/details.png"
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
              <Typography variant="h5">Select someone for details</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PeoplesPage;
