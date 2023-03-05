import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";


const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <div>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{quantity}</span>
    </div>
  )
}

export default CartWidget