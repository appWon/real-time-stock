const socket = new WebSocket('wss://api.upbit.com/websocket/v1');
//default : 'blob'
// socket.binaryType = 'blob';
// socket.binaryType = 'arraybuffer';

export { socket };
