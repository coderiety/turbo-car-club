import _ from 'underscore';
import sockets from '../utils/sockets';
import log from '../utils/log';

export default (socket, userId) => {
  if (socket.userId === userId) return;

  log.info(`${socket.id} authorized as User ${userId}`);
  const {users} = sockets;
  const prevId = socket.userId;
  if (prevId && users[prevId]) {
    users[prevId] = _.without(users[prevId], socket);
    if (!users[prevId].length) delete users[prevId];
  }
  socket.userId = userId;
  if (!users[userId]) users[userId] = [];
  users[userId].push(socket);
};
