import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [ cart, setCart ] = useState(0);
  const [ cantidad, setCantidad ] = useState(0);
  const [ carrito, setCarrito] = useState([])


  return (
    <CartContext.Provider value={[cart, setCart, cantidad, setCantidad, carrito, setCarrito]}>
      {children}
    </CartContext.Provider>
  );
};