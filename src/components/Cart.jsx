import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Container, Center, Text, Heading, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import Tabla from "./Tabla";
import CheckOut from "./CheckOut";
import '../components/Css/Cart.css'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const mensajeCondicional = (
    <Card align='center'>
      <CardHeader>
        <Heading size='md'> Oops!</Heading>
      </CardHeader>
      <CardBody>
        <Text>¡Tu carrito esta vacio!</Text>
        <Text>Ve al store para elegir algun producto</Text>
      </CardBody>
      <CardFooter>
        <Link to="/catalogo">
          <Button colorScheme='blue'>Glitter Store</Button>
        </Link>
      </CardFooter>
    </Card>
  )

  return (
    <>
      <Center bg="#D6EAF8" h="100px" color="black">
        <Heading as="h2" size="2xl">
          Carrito
        </Heading>
      </Center>
      {cart.length === 0 ? (
        mensajeCondicional
      ) : (
        <div>
          <Tabla />
          <CheckOut />
        </div>
      )}
    </>
  );
};

export default Cart