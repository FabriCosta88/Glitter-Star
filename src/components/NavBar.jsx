import CartWidget from "./CartWidget"
import logo from "../assets/logo-glitter.jpg"
import { Link } from "react-router-dom";
import { Container, Flex, Spacer, Box, Heading, Avatar } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import {Menu, Button,  MenuButton, MenuList, MenuItem} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
    <Container maxW="100%" h="10vh" bg="black" color="white">
        <Flex alignContent="center" alignItems="center" justifyContent="center" gap="2">
          <Avatar 
          mt="1%"
          size="lg"
          src={logo}
          />
            <Box h="100%" mt="2%">
                <Heading size="md">
                  <Link to={"/"}>Glitter Star</Link>  
                </Heading>
            </Box>
            <Spacer />
            <Box w="500px" mt="2%">
              <Menu>
                <Link to={"/catalogo"}>
                  <MenuButton
                  as={Button}
                  bgColor="blueviolet"
                  mr="10"
                  _hover={{
                    background: "rgb(111, 36, 182)",
                    color: "white",
                  }}>
                    Glitter Store
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <MenuButton 
                as={Button} 
                rightIcon={<ChevronDownIcon />} 
                bgColor="blueviolet" 
                _hover={{
                  background: "rgb(111, 36, 182)",
                  color: "white",
                }}>
                  Categorias
                </MenuButton>
                <MenuList bg="#757373">
                  <Link to={`/categorias/${"Producto"}`}>
                    <MenuItem bg="#757373">Productos</MenuItem>
                  </Link>
                  <Link to={`/categorias/${"Servicio"}`}>
                    <MenuItem bg="#757373">Servicios</MenuItem>
                  </Link>
                  <Link to={`/categorias/${"Promocion"}`}>
                    <MenuItem bg="#757373">Promociones</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
            <Spacer />
            <Box mt="2%">
              <Link to={"/cart"}>
                <CartWidget />
              </Link>
            </Box>
        </Flex>
    </Container>
    </>
  )
}

export default NavBar