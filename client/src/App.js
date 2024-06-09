import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import './styles.css'
import Home from './pages/home/Home';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import { Register } from './pages/register/Register';
import { Login } from './pages/login/Login';
import Cart from './pages/cart/Cart';
import Pay from './pages/pay/Pay';
import PaymentSuccess from './pages/paymentSuccess/PaymentSuccess';
import axios from 'axios'
import { useSelector } from 'react-redux';


function App() {
  axios.defaults.baseURL = 'http://localhost:8080/api'
  axios.defaults.withCredentials = true

  const user = useSelector(state => state.user?.currentUser)
 // console.log(user)
 
  return (
    <div className="eCommerceSite">
      <BrowserRouter>
        <Routes>
          <Route path = '/register' element = {<Register/>}/>
          <Route path = '/login' element = {!user ? <Login/> : <Navigate to = {'/'}/>}/>
          <Route path = '/' element = { user ? <Home/> : <Navigate to = {'/login'}/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/products/:category' element = {<ProductList/>}/>
          <Route path = '/product/:id' element = {<Product/>}/>  

          <Route path = '/pay' element = {<Pay/>}/>
          <Route path = '/success' element = {<PaymentSuccess/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
