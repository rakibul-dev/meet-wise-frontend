import {
  OutlinedInput,
  InputAdornment,
  TextField,
  Box,
  Avatar,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import {
  SendFriendRequest,
  getFriends,
  getPeoples,
} from "../../Redux/Slices/PeoplesSlice";

const Peoples = () => {
  const dispatch = useDispatch();
  const { peoples } = useSelector((state) => state.PeoplesSlice);
  const { user } = useSelector((state) => state.userSlice);
  useEffect(() => {
    dispatch(getPeoples());
    dispatch(getFriends());
  }, []);
  const handleSendFriendRequest = (users) => {
    dispatch(SendFriendRequest(users));
  };
  return (
    <div>
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
      {peoples.length ? (
        peoples.map((people) => (
          <Box key={people._id}>
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
              <Stack direction="row" spacing={10}>
                <Typography variant="h6" color="white">
                  {people.username}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    handleSendFriendRequest({
                      requestSender: user._id,
                      requestReciver: people._id,
                    });
                  }}
                >
                  Add friend
                </Button>
              </Stack>
            </Box>
          </Box>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Peoples;
