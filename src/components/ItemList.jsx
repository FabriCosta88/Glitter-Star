import Item from "./Item";
import { Container } from "@chakra-ui/react";
import '../components/Css/ItemList.css'

const ItemList = ({glitters}) => {
  return (
    <>
      <Container maxW="5xl" className="catalogo-principal">
        {glitters?.map((glitter) =>(
          <Item
          key={glitter.id}
          id={glitter.id}
          name={glitter.name}
          descripcion={glitter.descripcion}
          precio={glitter.precio}
          stock={glitter.stock}
          category={glitter.category}
          img={glitter.img}
          />
          ))}
      </Container>
    </>
  )
}

export default ItemList