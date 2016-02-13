import createContainer from '../utils/create-container';
import React from 'react';
import SignIn from './sign-in';

export default createContainer(
  ({error, isLoading, user}) =>
    <div>
      <div>User</div>
      {isLoading ? 'Loading...' : null}
      {error ? <SignIn /> : JSON.stringify(user)}
    </div>,
  {
    query: () => ['user', ['id', 'name', 'emailAddress']],

    props: () => ({user: ['user']})
  }
);