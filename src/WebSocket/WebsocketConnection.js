import io from "socket.io-client";
import { toast } from "react-toastify";

import { CreateSocketClientInstance } from "./SocketContainer/SocketContainer";
// import { OnlineUsers } from '../Redux/Slices/UserSlice.jsx'
// import { store } from '../Redux/Store.jsx'

let socket = null;

const CreateSocketServerConnection = (authtoken) => {
  console.log("socket server ==> ", authtoken);
  socket = io("http://localhost:5000", { withCredentials: true });

  CreateSocketClientInstance(socket);
  socket.on("connect", () => {
    console.log("successfully connected with socket server.");
    console.log(socket.id);
  });

  // Friend request
  socket.on("friend-request", (data) => {
    console.log(data);
    toast(`🦄 Wow so easy ${data.hello}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  });

  // Client-side code
  socket.on("message", (message) => {
    // Handle the received message
    console.log("Received message:", message);
  });

  // Online users
  // socket.on('online-users', (data) => {
  //   console.log('Online users =====>', data)
  // })
};

export default CreateSocketServerConnection;
