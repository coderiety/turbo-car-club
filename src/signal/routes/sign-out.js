import signOut from '../utils/sign-out';

export default {
  'signOut!': ({context: {socket}}) => signOut(socket)
};
