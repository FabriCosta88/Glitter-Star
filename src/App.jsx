import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import CheckOut from "./components/CheckOut"
import Home from "./components/Home"
import { CartProvider } from "./contexts/CartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalogo" element={<ItemListContainer />}/>
          <Route exact path="/categorias/:category" element={<ItemListContainer />}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          <Route exact path="/form" element={<Form/>} />
          <Route exact path="/checkout" element={<CheckOut />} />
          <Route exact path="/cart" element={<Cart />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>

  )
};

export default App;
