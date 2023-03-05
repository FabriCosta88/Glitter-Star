import { useState, useEffect, useContext } from "react";
import { Heading, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

const Checkout = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const { cart } = useContext(CartContext);
  
    useEffect(() => {
      if (cart.length > 0) {
        setTotalPrice(
          cart.map((product) => product.price * product.quantity),
          cart.reduce((total, valor) => total + valor)
        );
      }
    }, [cart]);
  
    return (
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Total: ${totalPrice} </Heading>
        </CardHeader>
        <CardBody>
          <Text>Para continuar haz click en el boton</Text>
        </CardBody>
        <CardFooter>
            <Link to={"/form"}>
                <Button colorScheme='blue'>Realizar compra</Button>
            </Link>
        </CardFooter>
      </Card>
    );
  };
  
  export default Checkout;