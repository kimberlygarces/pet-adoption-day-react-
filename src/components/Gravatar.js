import React from 'react';

function Gravatar(props) {
  const email = props.email;

  return (
    <img
      className={props.className}
      src={`https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar;