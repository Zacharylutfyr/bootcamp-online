import HelloReact from './components/Hello/HelloReact';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import States from './components/States/States';

// * React Component = sebuah function / class yang mereturn JSX
// * 1. Namanya harus dimuai dengan huruf Kapital
// * 2. Hanya Bisa Mereturn sebuah parent element
// * 3. Bisa memiliki State & Props
// * 4. Bisa di panggil di componenet lain dengan cara <Nama Component/>

const App = () => {
  return (
    <>
      <Navbar />
      <HelloReact />
      <States />
      <ProductCard
        image={
          'https://images.pexels.com/photos/843194/pexels-photo-843194.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
        name={'Tas Wanita'}
        price={'500.000'}
      />
      <ProductCard
        image={
          'https://images.pexels.com/photos/843194/pexels-photo-843194.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
        name={'Wanita'}
        price={'1.500.000'}
      />
    </>
  );
};

export default App;
