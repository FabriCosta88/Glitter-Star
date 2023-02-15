import { Container, Center, Box, Image } from '@chakra-ui/react'
import fondo from "../assets/glitter-stand.jpg"
import '../components/Css/Home.css'



const Home = () => {
  return (
  <div className='pagina-principal'>
    <Center>
      <Box boxSize="xxl">
        <Image src={fondo}></Image>
      </Box>
    </Center>
  </div>
  )
}

export default Home