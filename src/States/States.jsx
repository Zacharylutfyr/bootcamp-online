import React, { useState } from 'react';

const States = () => {
  const [statee, setState] = useState(0);
  const [text, setText] =useState ('');
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
          if (statee >= 1) {
            setState(statee - 1);
            return;
          }
        }}>
        Kurangi
      </button>


<h3>Defaul Text : {text}</h3>
<input type="text" />
<button onClick={()=>{
         setState();
}}>Ubah Text</button>

    </>
  );
};

export default States;
