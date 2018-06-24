import React from 'react';
import UserContext from '../contexts/user';

const wrapCallback = callback => {
  return e => {
    e.preventDefault();
    callback(e);
  };
};

const UserInfo = props => {
  const { onLogout } = props;
  return (
    <div>
      <UserContext.Consumer>
        {user => `Welcome, ${user.name}`}
      </UserContext.Consumer>
      <button onClick={wrapCallback(onLogout)}>Logout</button>
    </div>
  );
};

export default UserInfo;
