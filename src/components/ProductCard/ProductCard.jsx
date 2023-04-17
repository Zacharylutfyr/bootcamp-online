import React, { useState } from 'react';
import MyButton from '../MyButton/MyButton';

const ProductCard = props => {
  const [jumlah, setJumlah] = useState(0);

  const plus = () => {
    setJumlah(jumlah + 1);
  };

  const min = () => {
    if (jumlah < 1) {
      return;
    }
    setJumlah(jumlah - 1);
  };
  return (
    <>
      <section className='productCard'>
        <div className='container'>
          <div className='left-product'>
            <img src={props.image} alt='images.pexels.com' />
          </div>
          <div className='right-product'>
            <h1>{props.name}</h1>
            <p>Rp {props.price}</p>
            <div className='inputs'>
              <button onClick={min}> - </button>
              <input type='number' value={jumlah} />
              <button onClick={plus}> + </button>
            </div>
            <MyButton
              className='myButton'
              bgColor={'orange'}
              content={'Checkout'}
              onClick={() => {
                alert('Berhasil Di Pesan');
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
