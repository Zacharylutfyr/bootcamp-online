import React from 'react';

const MyButton = props => {
  return (
    <>
      <button
        style={{
          backgroundColor: props.bgColor,
          border: 'none',
          outline: 'none',
          color: props.color,
          padding :'10px'
        }}>
        {props.content}
      </button>
    </>
  );
}

export default MyButton;
