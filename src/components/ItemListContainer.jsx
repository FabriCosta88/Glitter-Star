
import ItemList from "./ItemList";
import Stock from "../stock.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category)

  const getDatos = () => {
    return new Promise((resolve, rejet) =>{
      if (Stock.length === 0) {
        rejet(new Error("No hay datos"));
      }
      setTimeout(() =>{
        resolve(Stock);
      }, 2000);
    });
  };

  async function fetchingStock() {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err);
    }
  }
  fetchingStock();

  if (category === undefined) {
    return (
      <div>
        <Center bg="#A9A9A9" h="100px" color="white">
          <Heading as="h2" size="2xl">
            Glitter Store
          </Heading>
        </Center>
        <ItemList glitters={Stock}></ItemList>
      </div>
    )
  } else {
    const catFilter = Stock.filter((glitter) => glitter.category === category);
    return (
      <div>
        <Center bg="#A9A9A9" h="100px" color="white">
          <Heading as="h2" size="2xl">
            Categorias
          </Heading>
        </Center>
        {catFilter ? <ItemList glitters={catFilter} /> : <ItemList glitters={Stock} /> }
      </div>
    )
  }
} 

export default ItemListContainer