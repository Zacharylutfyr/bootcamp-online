import React from 'react';
import MyButton from '../MyButton/MyButton';

const HelloReact = () => {
  return (
    <>
      <div className='container'>
        <h1>Hello React !</h1>
        <MyButton content={"Login"}/>
        <MyButton content={"Register"}/>
        <MyButton content={"Logout"}/>
      </div>
    </>
  );
};

export default HelloReact;
