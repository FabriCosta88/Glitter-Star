import { Center, Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter, Divider} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import '../components/Css/ItemDetail.css'

const ItemDetail = ({ glitters }) => {
  const { id } = useParams();

  const glitterFilter = glitters.filter((glitter) => glitter.id == id);
    return (
      <>
        {glitterFilter.map((glitter) => (
          <div key={glitter.id}>
            <Center p="1rem">
              <Card className="tarjeta-detalle">
                <CardBody>
                  <Image borderRadius="lg" src={glitter.img}></Image>
                  <Stack mat="6" spacing="3">
                    <Heading size="md">{glitter.name}</Heading>
                    <Text>
                      Descripcion: {glitter.descripcion}
                    </Text>
                    <Text>
                      Stock: {glitter.stock}
                    </Text>
                    <Text color="green" fontSize="xl">
                      Precio: ${glitter.precio}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="tarjeta-detalle-footer">
                  <ItemCount/>
                  <Center className="boton-center">
                    <Button variant="solid" color="white" bg="blueviolet">
                      Comprar
                    </Button>
                  </Center>
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    )
  }
  
  export default ItemDetail