import _ from 'underscore';
import async from 'async';
import config from 'signal/config';
import findUser from 'signal/utils/find-user';
import sign from 'shared/utils/sign';
import signIn from 'signal/templates/sign-in';
import mail from 'signal/utils/mail';

const {key} = config;

export default (socket, emailAddress, cb) =>
  async.waterfall([
    _.partial(findUser, {emailAddress}),
    ({signedInAt} = {}, cb) =>
      mail({
        to: emailAddress,
        subject: 'Sign in to Turbo Car Club',
        markdown: signIn({
          key: sign(key, 'verify', {
            emailAddress,
            signedInAt,
            socketId: socket.id
          })
        })
      }, cb)
  ], cb);