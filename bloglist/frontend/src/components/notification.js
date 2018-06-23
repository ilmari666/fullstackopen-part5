import React from 'react';
import styled from 'styled-components';

const NotificationBox = styled.div`
  border-style: solid;
  color: ${props => (props.error ? 'red' : 'green')};
  width: 100%;
`;

const Notification = props => {
  const { message } = props;
  if (!message) {
    return <div />;
  }
  const { error } = message;
  if (error) {
    return <NotificationBox error>{error}</NotificationBox>;
  }
  return <NotificationBox>{message}</NotificationBox>;
};

export default Notification;
