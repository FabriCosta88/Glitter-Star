import { Link } from "react-router-dom";
import { useContext } from "react";
import { Text, Flex, Heading, Button, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { CartContext } from "../contexts/CartContext";
import '../components/Css/Cart.css'

const Cart = () => {

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
          <Button color="white" bg="blueviolet">Glitter Store</Button>
        </Link>
      </CardFooter>
    </Card>
  )

  let total = 0;
  const { cart, setCart, carrito, setCarrito } = useContext(CartContext);
  carrito.map((product) => {
    total += product[1] * product[2];
  })

  const eliminarProducto = (e) => {
    setCarrito(carrito.filter((i) => {
      return i !== e
    }));
  };

  const Verificacion = ({ totalProductos }) => {
    if (totalProductos > 0) {
      return (
        <Link to={`/checkout`}>
          <Button variant="solid" color="white" bg="blueviolet">
            Terminar Pedido
          </Button>
        </Link>
      );
    } else {
      return (
        {mensajeCondicional}
      )
    }
  }


  return (
    <>
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th>Total</Th>
          </Tr>
        </Thead>
        <Tbody>
          {carrito.map((product) => (
            <Tr key={product[0]}>
              <Td>{prodct[0]}</Td>
              <Td>{product[2]}</Td>
              <Td>${product[1] * product[2]}</Td>
              <Td>
                <Button onClick={() => {
                  eliminarProducto(product);
                  setCart(cart - product[2]);
                }}>
                  <span class="material-symbols-outlined">delete</span>
                </Button>
              </Td>
            </Tr>
          ))}
          <Tr>
            <Td></Td>
            <Td></Td>
            <Td>${total}</Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>

    <Button>
      <Verificacion totalProductos={cart}/>
    </Button>
    </>
  )
  }
export default Cart;