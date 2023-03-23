import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";


const CartWidget = () => {
  const { cart } = useContext(CartContext)

  return (
    <div>
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>{cart}</span>
    </div>
  )
}

export default CartWidget