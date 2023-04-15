import React, { useState } from 'react';

const States = () => {
  const [statee, setState] = useState(0);
  const [text, setText] = useState('ini Default Text');
  const [range, setRange] = useState(16);
  const [color, setColor] = useState('oranged');

  return (
    <>
      <div className='container'>
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
            if (statee >= 1) {
              setState(statee - 1);
              return;
            }
          }}>
          Kurangi
        </button>

        <h3
          style={{
            fontSize: range + 'px',
            color: color,
          }}>
          {text}
        </h3>
        <input
          type='text'
          placeHolder='Masukkan Text'
          onChange={e => {
            setText(e.target.value);
          }}
        />

        <div>
          <input
            type='range'
            min={1}
            max={100}
            onChange={e => {
              setRange(e.target.value);
            }}></input>
        </div>
        <div>
          <input
            type='color'
            onChange={e => {
              setColor(e.target.value);
            }}></input>
        </div>
      </div>
    </>
  );
};

export default States;
