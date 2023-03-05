import React from "react";
import { useEffect, useContext } from "react";
import { Button, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, } from '@chakra-ui/react'
import { CartContext } from "../contexts/ShoppingCartContext";

const Tabla = () => {
    const { cart, setCart, setQnt} = useContext(CartContext);

    const deleteProduct = (index) => {
        setCart(cart.filter((product, i) => i!== index));
    };

    useEffect(() => {
      setQnt(
        cart
            .map((product) => product.quantity)
            .reduce((total, valor) => total + valor)
        );
    }, [cart, setQnt]);


  return (
    <div>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th isNumeric>Cantidad</Th>
              <Th>Articulo</Th>
              <Th isNumeric>Precio</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.map((item) => (
              <Tr key={item.id}>
                <Td isNumeric>{item.quantity}</Td>
                <Td>{item.name}</Td>
                <Td isNumeric>{item.precio}</Td>
                <Td isNumeric>${item.quantity * item.precio}</Td>
                <Td>
                  <Button onClick={() => deleteProduct(index)} X/>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

//Aqui tengo problemas.... en la consola me tira el error de que no lee el "cart.map" donde irian los productos que pusheo al carrito.... la verdad que me supero y no se como arreglarlo :(
//Si pudieras explicarme como hacerlo correctamente me ayudarias un monton!! Perdon por entregarlo asi 

export default Tabla