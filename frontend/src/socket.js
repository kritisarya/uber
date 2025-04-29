import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL);

console.log("Socket backend URL:", import.meta.env.VITE_BACKEND_URL);
export default socket;