import { Center, Box, Card, CardBody, Image, Heading, Text, Button, CardFooter, Divider} from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import '../components/Css/ItemDetail.css';
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


const ItemDetail = ({ glitters }) => {
  const { cantidad, setCantidad, cart, setCart, carrito } =
    useContext(CartContext);

  const comprar = (glitters) => {
    setCart(cart + cantidad) 
    if (cantidad != 0) {
      carrito.push([glitters.nombre, glitters.precio, cantidad])
    } else {
      console.log("Indicar cantidad")
    }
  }    

    return (
      <>
          <div key={glitters.id}>
            <Center p="5rem">
              <Card w="50rem">
                <CardBody w="48rem" h="100" m="0.8rem" p="1.3rem" className="tarjeta-detalle">
                  <Box w="100" p="5" className="img-detalle">
                    <Image borderRadius="lg" src={glitters.img}></Image>
                  </Box>
                  <Box className="info-detalle">
                      <Heading size="md">{glitters.name}</Heading>
                      <Text>
                        Descripcion: {glitters.descripcion}
                      </Text>
                      <Text>
                        Stock: {glitters.stock}
                      </Text>
                      <Text color="green" fontSize="xl">
                        Precio: ${glitters.precio}
                      </Text>
                  </Box>
                </CardBody>
                <Divider />
                <CardFooter className="tarjeta-detalle-footer">
                  <ItemCount/>
                  <Center className="boton-center">
                    <Button onClick={() => {
                      comprar(glitters)
                    }} variant="solid" color="white" bg="blueviolet">
                      Añadir al carrito
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
      </>
    )
  }
  
  export default ItemDetail