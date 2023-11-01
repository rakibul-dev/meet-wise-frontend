import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./Redux/Slices/UserSlice";
import CreateSocketServerConnection from "./WebSocket/WebsocketConnection";
import { GetSocketClientInstance } from "./WebSocket/SocketContainer/SocketContainer";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { handleIncommingMsg } from "./Redux/Slices/MessageSlice";
function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
    CreateSocketServerConnection();
  }, []);

  const socket = GetSocketClientInstance();

  if (socket) {
    // Online Users
    socket.on("friend-request", (data) => {
      console.log("Online users =====>", data);
      //   dispatch(OnlineUsers({ data: data }));
    });
    socket.on("message", (message) => {
      // Handle the received message
      console.log("Received message:", message);
      dispatch(handleIncommingMsg(message.message));
    });
    // socket.on("online-users", (data) => {
    //   // console.log('Online users =====>', data)
    //   dispatch(OnlineUsers({ data: data }));
    // });

    // socket.on("incomming-messege", (data) => {
    //   dispatch(InCommingMessege({ data: data }));
    //   console.log(data);
    // });
  }
  return (
    <>
      <RouterProvider router={Router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
