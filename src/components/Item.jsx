import { Center, Card, CardBody, Image, Heading, Text, Divider, Stack, CardFooter, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import '../components/Css/Item.css'
const Item = ({ id, name, stock, category, img }) => {
    return (
      <>
        <div key={id}>
          <Center p="1rem">
            <Card className="tarjeta-productos">
              <CardBody w="20rem" m="0.8rem" p="1.3rem">
                <Image borderRadius="lg" w="100" h="18rem" src={img}/>
                <Stack mt="6" spacing="3">
                  <Heading size="md">{name}</Heading>
                  <Text color="black" fontSize="l">Categoria: {category}</Text>
                  <Text color="grey" fontSize="xl">Stock: {stock}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="tarjeta-footer">
                <Center>
                  <Button variant="solid" background="rgb(111, 36, 182)" color="white">
                    <Link to={`/item/${id}`}>Detalle</Link>
                  </Button>
                </Center>
              </CardFooter>
            </Card>
          </Center>
        </div>
      </>
    )
  }
  
  export default Item