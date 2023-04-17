import React from 'react';
import MyButton from '../MyButton/MyButton';

const HelloReact = () => {
  return (
    <>
      <div className='container'>
        <h1>Hello React !</h1>
        <MyButton content={"Login"} bgColor={"black"} color={"pink"} />
        <MyButton content={"Register"} bgColor={"pink"} color={"black"}/>
        <MyButton content={"Logout"} bgColor={"black"} color={"pink"} />
      </div>
    </>
  );
};

export default HelloReact;
