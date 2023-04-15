import React, { useState } from 'react';

const States = () => {
  const [statee, setState] = useState(98);
  return (
    <>
      <h1>JUMLAH : {statee} </h1>
      <button onClick={() => {
        setState (2);
      }}>Ubah</button>
    </>
  );
};

export default States;
