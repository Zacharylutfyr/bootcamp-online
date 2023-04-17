import React, { useState, useEffect } from 'react';

const States = () => {
  const [statee, setState] = useState(0);
  const [text, setText] = useState('ini Default Text');
  const [range, setRange] = useState(20);
  const [color, setColor] = useState('oranged');
  const [pacarSaya, setpacarSaya] = useState(1);
  const [genap, setGenap] = useState(0);
  const decrement = () => {
    setpacarSaya(prev => prev - 1);
  };
  const increment = () => {
    setpacarSaya(pacarSaya + 1);
  };
  const [name, setName] = useState('Zachary');

  useEffect(() => {
    alert('Halooo');
  }, []);

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

        <div>
          <h1>{pacarSaya}</h1>
          <button onClick={decrement}> - </button>
          <button onClick={increment}> + </button>
        </div>

        <div className='name'>
          <h1>{name}</h1>
          <button
            onClick={() => {
              setName('Luthfy');
            }}>
            Ganti Nama
          </button>
          <button
            onClick={() => {
              setName('Zachary');
            }}>
            Jangan Ganti Nama
          </button>
        </div>
        <div>
          <h1>{genap}</h1>
          <button
            onClick={() => {
              setGenap(genap + 2);
            }}>
            Bilangan Genap
          </button>
          <button
            onClick={() => {
              setGenap(genap - genap);
            }}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default States;
