
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
// import Banner from './Components/Banner';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Shop from './Pages/Shop'
import Wish from './Pages/Wish'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/wish' element={<Wish/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
        <Footer/>
        </Router>
    </div>

  );
}

export default App;
