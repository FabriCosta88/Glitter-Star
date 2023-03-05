import { Container, Heading, Stack, Input, Button, Text, Center, FormControl, FormLabel, } from "@chakra-ui/react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";

const Form = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState ("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            alert("Completa los campos vacios");
        } else {
            addDoc(orderCollection, orderId).then(({ id }) => setOrderId(id));
        }
        setEmail(" ");
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orden");

    const enviarOrden = () =>{
        const order = {
            name,
            email,
        };
    }
    enviarOrden()
    return (
        <div>
            <Center>
                <Heading>Enviar Orden</Heading>
            </Center>
            <Container>
                <FormControl>
                    <form onSubmit={handleSubmit}>
                        <FormLabel>Nombre</FormLabel>
                        <Input size="lg" onChange={(e) => setName(e.target.value)}></Input>
                        <FormLabel>E-Mail</FormLabel>
                        <Input size="lg" onChange={(e) => setEmail(e.target.value)}></Input>
                        <Button colorScheme="blue" type="submit" m={5}>
                            Finalizar Compra
                        </Button>
                    </form>
                </FormControl>
            </Container>
            <Center>
                <Text as="b" m={3} fontSize="xl">
                    Su ID de compra es:{" "}
                </Text>
                <Text as="mark" fontSize="2xl">
                    {orderId}
                </Text>
            </Center> 
        </div>
    );
};

export default Form;