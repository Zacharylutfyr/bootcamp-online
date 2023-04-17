import React from 'react';

const Title = props => {
  return (
    <>
      <h1 style={{ 
        color: props.color }}>{props.title}</h1>
    </>
  );
};

export default Title;
