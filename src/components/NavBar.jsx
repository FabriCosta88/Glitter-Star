import CartWidget from "./CartWidget"
import './NavBar.css'
import { Container, Flex, Spacer, Box, Heading } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
    <Container maxW="100%" h="10vh" bg="black" color="white">
        <Flex alignContent="center" alignItems="center" gap="2">
            <Box h="100%">
                <Heading size="md">Glitter Star</Heading>
            </Box>
            <Spacer />
            <Box w="500px">
              <ul>
                <li>
                  <a className="categorias" href="">Productos</a>
                </li>
                <li>
                  <a className="categorias" href="">Servicios</a>
                </li>
                <li>
                  <a className="categorias" href="">Quienes Somos</a>
                </li>
              </ul>
            </Box>
            <Spacer />
            <Box>
                <CartWidget />
            </Box>
        </Flex>
    </Container>
    </>
  )
}

export default NavBar