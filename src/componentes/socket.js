import io from 'socket.io-client';

let socket = io("http://localhost:3000", {
    withCredentials: false,
    extraHeaders: {
      "Access-Control-Allow-Origin": "*"
    }
  });

export default socket;