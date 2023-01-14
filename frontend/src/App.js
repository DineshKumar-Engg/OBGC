
import './App.css';
import Navbar from './Components/Navbar';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Shop from './Pages/Shop'
import Wish from './Pages/Wish'
import Footer from './Components/Footer';
import SingleProduct from './Components/SingleProduct';
import Register from './Components/Register';
import Shipping from './Components/Shipping';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import PlaceOrder from './Components/PlaceOrder';
import OrderList from './Components/OrderList';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product/:slug' element={<SingleProduct/>}/>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/wish' element={<Wish/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/shipping' element={<Shipping/>}></Route>
          <Route path='/placeorder' element={<PlaceOrder/>}></Route>
          <Route path='/order/:id' element={<OrderList/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <Footer/>
        </Router>
        <ToastContainer/>
    </div>
  );
}

export default App;
