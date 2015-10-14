import _ from 'underscore';
import * as app from 'server';
import log from 'server/utils/log';
import uuid from 'node-uuid';

export default socket => {
  app.live.sockets[socket.id = uuid.v4()] = socket;
  log.info(`${socket.id} connected`);
  const host = _.find(app.live.sockets, {isHost: true});
  if (host) socket.send('host', host.id);
};
