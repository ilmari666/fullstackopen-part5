import React from 'react';

const wrapCallback = callback => {
  return e => {
    e.preventDefault();
    callback(e);
  };
};

const UserInfo = props => {
  const { onLogout, username } = props;
  return (
    <div>
      Welcome, {username}
      <button onClick={wrapCallback(onLogout)}>Logout</button>
    </div>
  );
};

export default UserInfo;
