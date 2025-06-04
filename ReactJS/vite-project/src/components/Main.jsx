import React from 'react';

const Main = props => {
  return (
    <div>{props.content ? <h1>Hello Content</h1> : <p>No Content</p>}</div>
  );
};

export default Main;
