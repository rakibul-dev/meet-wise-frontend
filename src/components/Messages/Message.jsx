/* eslint-disable react/prop-types */

import { Box, Typography, Avatar } from "@mui/material";

const Message = (props) => {
  return (
    <div>
      {props.sender ? (
        <Box sx={{ display: "flex", alignItems: "flex-end" }} gap={2}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              neque vel temporibus totam sequi fugiat eum sit, hic impedit
              beatae laboriosam quo, similique harum odit explicabo dolorum
              aliquid provident porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam neque vel temporibus totam sequi fugiat
              eum sit, hic impedit beatae laboriosam quo, similique harum odit
              explicabo dolorum aliquid provident porro? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam neque vel temporibus
              totam sequi fugiat eum sit, hic impedit beatae laboriosam quo,
              similique harum odit explicabo dolorum aliquid provident porro?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              neque vel temporibus totam sequi fugiat eum sit, hic impedit
              beatae laboriosam quo, similique harum odit explicabo dolorum
              aliquid provident porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam neque vel temporibus totam sequi fugiat
              eum sit, hic impedit beatae laboriosam quo, similique harum odit
              explicabo dolorum aliquid provident porro? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam neque vel temporibus
              totam sequi fugiat eum sit, hic impedit beatae laboriosam quo,
              similique harum odit explicabo dolorum aliquid provident porro?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              neque vel temporibus totam sequi fugiat eum sit, hic impedit
              beatae laboriosam quo, similique harum odit explicabo dolorum
              aliquid provident porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam neque vel temporibus totam sequi fugiat
              eum sit, hic impedit beatae laboriosam quo, similique harum odit
              explicabo dolorum aliquid provident porro? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam neque vel temporibus
              totam sequi fugiat eum sit, hic impedit beatae laboriosam quo,
              similique harum odit explicabo dolorum aliquid provident porro?
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
            <Typography variant="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              neque vel temporibus totam sequi fugiat eum sit, hic impedit
              beatae laboriosam quo, similique harum odit explicabo dolorum
              aliquid provident porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam neque vel temporibus totam sequi fugiat
              eum sit, hic impedit beatae laboriosam quo, similique harum odit
              explicabo dolorum aliquid provident porro? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam neque vel temporibus
              totam sequi fugiat eum sit, hic impedit beatae laboriosam quo,
              similique harum odit explicabo dolorum aliquid provident porro?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              neque vel temporibus totam sequi fugiat eum sit, hic impedit
              beatae laboriosam quo, similique harum odit explicabo dolorum
              aliquid provident porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam neque vel temporibus totam sequi fugiat
              eum sit, hic impedit beatae laboriosam quo, similique harum odit
              explicabo dolorum aliquid provident porro? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam neque vel temporibus
              totam sequi fugiat eum sit, hic impedit beatae laboriosam quo,
              similique harum odit explicabo dolorum aliquid provident porro?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              neque vel temporibus totam sequi fugiat eum sit, hic impedit
              beatae laboriosam quo, similique harum odit explicabo dolorum
              aliquid provident porro? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam neque vel temporibus totam sequi fugiat
              eum sit, hic impedit beatae laboriosam quo, similique harum odit
              explicabo dolorum aliquid provident porro? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Veniam neque vel temporibus
              totam sequi fugiat eum sit, hic impedit beatae laboriosam quo,
              similique harum odit explicabo dolorum aliquid provident porro?
            </Typography>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Message;
