import { Center, Box, Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter, Divider} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import '../components/Css/ItemDetail.css'
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetail = ({ glitters }) => {
  const { id } = useParams();


  const [producto, setProducto] = useState([]);

  
  useEffect(() => {
    const db = getFirestore();
    
    const glitterRef = doc(db, "glitters", `${id}`)

    getDoc(glitterRef).then((snapshot) => {
      if (snapshot.exists()){
        setProducto(snapshot.data())
      } else {
        console.log("No existe documento")
      }
    })

  })

  const glitterFilter = glitters.filter((glitter) => glitter.id == id);
    return (
      <>
        {glitterFilter.map((glitter) => (
          <div key={glitter.id}>
            <Center p="5rem">
              <Card w="50rem">
                <CardBody w="48rem" h="100" m="0.8rem" p="1.3rem" className="tarjeta-detalle">
                  <Box w="100" p="5" className="img-detalle">
                    <Image borderRadius="lg" src={glitter.img}></Image>
                  </Box>
                  <Box className="info-detalle">
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
                  </Box>
                </CardBody>
                <Divider />
                <CardFooter className="tarjeta-detalle-footer">
                  <ItemCount
                    stock={glitter.stock}
                    id={glitter.id}
                    precio={glitter.precio}
                    name={glitter.name}
                  />
                </CardFooter>
              </Card>
            </Center>
          </div>
        ))}
      </>
    )
  }
  
  export default ItemDetail