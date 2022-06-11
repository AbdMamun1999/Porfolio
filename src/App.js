import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetails from './Pages/Home/ProductDetails';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div className='bg-primary'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
