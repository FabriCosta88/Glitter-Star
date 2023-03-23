import { useState, } from "react";
import { Text, ButtonGroup, IconButton, Tooltip, Center} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons"



const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);


  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    setCount(count - 1);
  };


  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimo de stock alcanzado" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={restar} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{count}</Text>
        </Center>
        {count < stock ? (
          <Tooltip label="maximo de stock alcanzado" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>          
          ) : (
            <IconButton icon={<AddIcon />} onClick={sumar} />
          )}
      </ButtonGroup>
    </>
  )
}



export default ItemCount