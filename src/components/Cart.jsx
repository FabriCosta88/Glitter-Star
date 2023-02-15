import { FormControl, FormLabel, Input, Button, Center, Heading, Container, Box, Textarea} from "@chakra-ui/react";
import React from "react";
import '../components/Css/Cart.css'

const Cart = () => {
  return (
    <div className="carrito">
    <Center bg="#A9A9A9" h="100px" color="white">
      <Heading as="h2" size="2xl">
        Carrito
      </Heading>
    </Center>
    <Container className="contenedor-carrito">
      <FormControl>
        <Box>
          <FormLabel>Nombre</FormLabel>
          <Input type="text" />
          <FormLabel>Direccion de E-Mail</FormLabel>
          <Input type="email" />
        </Box>
        <FormLabel>Dejanos tu consulta</FormLabel>
        <Textarea></Textarea>
        <Box className="boton-enviar">
          <Button colorScheme="teal" variant="outline">
            Enviar Consulta
          </Button>
        </Box>
      </FormControl>
    </Container>
  </div>
  );
};

export default Cart