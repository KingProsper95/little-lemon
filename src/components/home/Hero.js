import { Box, Heading, Text, Button, HStack, Flex, Image } from "@chakra-ui/react";
import restauranfood from '../../assets/images/food/restauranfood.jpg'

export default function Hero() {
  return (
    <Flex justify='space-between' my='25px'>
      <Box as="section" maxW={{base:'350px', lg:'500px'}} h='90%'>
        <Heading color='primary_yellow' fontSize='64px'>Little lemon</Heading>
        <Heading as='h4' color='secondary_grey' mt='-30px'>Chicago</Heading>
        <Text as='p' color='#000000' mt='20px'>
          We are a family owned Mediterranean restaurant,focused on traditional recipes served with a  modern twist
        </Text>
        <Button colorScheme='yellow' borderRadius={16} size='md' mt='20px'>
          <Text>Reserve a Table</Text>
        </Button>
      </Box>
      <Image src={restauranfood} boxSize='300px' borderRadius='16px' mt='20px'/>
    </Flex> 
  )
}
