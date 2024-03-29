import './App.css'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './components/Context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'
import Error from './components/Error/Error.jsx'



function App() {

  return (
    <>
      <CartProvider>
        <div className='appMain'>
              <BrowserRouter>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/products' element={<ItemListContainer/>}/>
                  <Route path='/products/:category' element={<ItemListContainer/>}/>
                  <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                  <Route path='/carrito' element={<Carrito/>}/>
                  <Route path='/Checkout' element={<Checkout/>}/>
                  <Route path={'*'} element={<Error/>}/>
                </Routes>
              </BrowserRouter>
            <Footer/>
        </div>
      </CartProvider>
    </>
  )
}

export default App
