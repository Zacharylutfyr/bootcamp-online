import React, { useState } from 'react';

const States = () => {
  const [statee, setState] = useState(0);
  return (
    <>
      <h1>JUMLAH : {statee} </h1>

      {/* Memakai Callback Function agar tidak langsung jalan saat pertama kali */}
      <button
        onClick={() => {
          setState(statee + 1);
        }}>
        Tambah
      </button>
      <button
        onClick={() => {
          setState(statee - 1);
        }}>
        Kurangi
      </button>
    </>
  );
};

export default States;
