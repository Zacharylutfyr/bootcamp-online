import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';

// * React Component = sebuah function / class yang mereturn JSX
// * 1. Namanya harus dimuai dengan huruf Kapital
// * 2. Hanya Bisa Mereturn sebuah parent element
// * 3. Bisa memiliki State & Props
// * 4. Bisa di panggil di componenet lain dengan cara <Nama Component/>

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />

      <h1>Jumlah : {count}</h1>
      <button
        onClick={() => {
          setCount();
        }}>
        Tambah
      </button>
    </>
  );
};

export default App
