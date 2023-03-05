
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore";

const ItemListContainer = () => {
  const [glitters, setGlitters] = useState([]);
  const { category } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const coleccionGlitters = collection(db, "glitters");
    getDocs(coleccionGlitters).then((QuerySnapshot) => {
      const glitters = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setGlitters(glitters);
    });
  }, []);

const catFilter = glitters.filter((glitter) => glitter.category === category);

return (
  <>
  <Center bg="#D6EAF8" h="100px" color="black">
    <Heading as="h2" size="2xl">
      Catalogo
    </Heading>
  </Center>
    {category ? <ItemList glitters={catFilter} /> : <ItemList glitters={glitters} />}
  </>
);
};

export default ItemListContainer