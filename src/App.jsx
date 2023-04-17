
import Navbar from './components/Navbar/Navbar';
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
      <States />
    </>
  );
};

export default App;
