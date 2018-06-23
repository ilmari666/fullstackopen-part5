import React from 'react';

const wrapCallback = callback => {
  return e => {
    e.preventDefault();
    callback(e);
  };
};

const UserInfo = props => {
  const { onLogout, name } = props;
  return (
    <div>
      Welcome, {name}
      <button onClick={wrapCallback(onLogout)}>Logout</button>
    </div>
  );
};

export default UserInfo;
