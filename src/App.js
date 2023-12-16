import './App.css';
import NavBar from './Components/NavBar/NavBarNew';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSingup';
function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory category="kid"/>}></Route>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/kids' element={<LoginSignUp />}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
