import Navbar from './components/Navbar';
import './index.css';


// * React Component = sebuah function / class yang mereturn JSX 
// * 1. Namanya harus dimuai dengan huruf Kapital
// * 2. Hanya Bisa Mereturn sebuah parent element
// * 3. Bisa memiliki State & Props
// * 4. Bisa di panggil di componenet lain dengan cara <Nama Component/>

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Title</h1>
      </div>
    </>
  );
};

export default App;
