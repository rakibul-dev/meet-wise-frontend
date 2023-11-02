let socket;

export const CreateSocketClientInstance = (IoInstance) => {
  socket = IoInstance;
  console.log({ socket });
};

export const GetSocketClientInstance = () => {
  return socket;
};

// export default {
//   CreateSocketClientInstance,
//   GetSocketClientInstance,
// };
