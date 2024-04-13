import { Button,Text, Box, Flex, SimpleGrid, Card, Image, CardBody, CardFooter, Heading, HStack, Grid, Spacer } from "@chakra-ui/react";
import { redirect } from "react-router-dom";
import greek_salad from '../../assets/images/food/greek_salad.jpg';
import bruchetta from '../../assets/images/food/bruchetta.png';
import lemon_dessert from '../../assets/images/food/lemon_dessert.jpg';
import bike from '../../assets/images/icons/bike.png';

function directTo(){
    return redirect('/')
}

export default function Specials() {
  return (
    <>
      <Flex justify='space-between' mt='5em' align='center' w='100%'>
        <Text fontSize='40px'>Specials</Text>
        <Button colorScheme='yellow' borderRadius={16} size='md' onClick={directTo}>
          <Text>Online Menu</Text>
        </Button>
      </Flex>
      <SimpleGrid templateColumns='repeat(3,1fr)' spacing={8} mb='4em' minChildWidth='250px'>
        <Card w='260px' mt='3em' >
          <CardBody p='0px' bg='secondary_grey' borderTopRadius='lg' overflow='hidden'>
            <Image src={greek_salad} alt='greek salad' w='100%'/>
            <Box p='20px'>
              <HStack mb='10px'>
                <Heading fontSize='24px'>Greek Salad</Heading>
                <Spacer />
                <Text color='#EE9972' fontWeight={600}>$12.99</Text>
              </HStack>
              <Text color='primary_green'>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
              </Text>
            </Box>
          </CardBody>
          <CardFooter bg='secondary_grey'>
            <HStack>
              <Text fontWeight={600}>Order a delivery</Text>
              <Image src={bike} boxSize={5}/>
            </HStack>
          </CardFooter>
        </Card>
        <Card w='260px' mt='3em' >
          <CardBody p='0px' bg='secondary_grey' borderTopRadius='lg' overflow='hidden'>
            <Image src={bruchetta} alt='greek salad' h='40%'/>
            <Box p='20px'>
              <HStack mb='10px'>
                <Heading fontSize='24px'>Bruchetta</Heading>
                <Spacer />
                <Text color='#EE9972' fontWeight={600}>$12.99</Text>
              </HStack>
              <Text color='primary_green'>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
              </Text>
            </Box>
          </CardBody>
          <CardFooter bg='secondary_grey'>
            <HStack>
              <Text fontWeight={600}>Order a delivery</Text>
              <Image />
            </HStack>
          </CardFooter>
        </Card>
        <Card w='260px' mt='3em' >
          <CardBody p='0px' bg='secondary_grey' borderTopRadius='lg' overflow='hidden'>
            <Image src={lemon_dessert} h='40%' w='100%' alt='greek salad'/>
            <Box p='20px'>
              <HStack mb='10px'>
                <Heading fontSize='24px'>Lemon Dessert</Heading>
                <Spacer />
                <Text color='#EE9972' fontWeight={600}>$12.99</Text>
              </HStack>
              <Text color='primary_green'>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. 
              </Text>
            </Box>
          </CardBody>
          <CardFooter bg='secondary_grey'>
            <HStack>
              <Text fontWeight={600}>Order a delivery</Text>
              <Image />
            </HStack>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  )
}
