import { Box, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react"
import restaurant from '../../assets/images/restaurant.jpg'
import restaurant_chef  from '../../assets/images/restaurant_chef B.jpg'

function About() {
  return (
    <Flex width='100%' justify='space-evenly' >
      <Box flexBasis='30%' mt={28}>
        <Heading fontSize='64px' fontWeight={400} >Little Lemon</Heading>
        <Heading fontSize='40px' fontWeight={400} m='-20px 0px 20px' color='secondary_black'>Chicago</Heading>
        <Text fontSize='20px' fontWeight={600}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
        </Text>
      </Box>
      <HStack flexBasis='40%' spacing={0} position='relative' mt={52} mb={20}>
        <Image src={restaurant_chef} alt='chef picture' boxSize='350px'/>
        <Image src={restaurant} alt='restaurant picture' boxSize='350px' position='absolute' left='200px' bottom='100px'/>
      </HStack>
    </Flex>
  )
}

export default About
