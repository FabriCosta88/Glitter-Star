import { useState, useContext } from "react";
import { Button, Text, ButtonGroup, IconButton, Tooltip, Center} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { CartContext } from "../contexts/ShoppingCartContext";


const ItemCount = ({ stock, precio, name, id }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useContext(CartContext)

  const addQty = () => {
    setCount(count + 1);
  };

  const subtractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((Items) => {
      const encontrarItem = Items.find((item) => item.id === id);
      if (encontrarItem) {
        return Items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      } else {
        return [ ...Items, { id, quantity: count, precio, name }];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimo de stock alcanzado" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={subtractQty} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{count}</Text>
        </Center>
        {count == stock ? (
          <Tooltip label="maximo de stock alcanzado" placement="bottom">
          <IconButton icon={<AddIcon />} isDisabled />
        </Tooltip>
          ) : (
            <IconButton icon={<AddIcon />} onClick={addQty} />
          )}
      </ButtonGroup>
      <Center className="boton-center">
        <Button onClick={() => addToCart()} variant="solid" color="white" bg="blueviolet">
          Añadir al carrito
        </Button>
      </Center>
    </>
  )
}

//No se porque la logica de agregar item hasta alzanzar el stock y que se desabilite el boton cuando llegue al maximo de stock no me funciona.... La de restar si
//Hasta copie del repo del profe textual todo y tampoco.... no se que tendre mal, perdon por entregarlo asi. Si pudieras en la correccion decirme cual es mi error me serviria un monton! Gracias

export default ItemCount