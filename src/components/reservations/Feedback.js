import { Avatar, Container, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import sara from '../../assets/images/sara.jpeg';

function Feedback() {
  return (
    <Container minW='max-content'>
        <Text fontSize={36} textAlign={'center'} my={5}>Customer Feedback</Text>
        <SimpleGrid templateColumns='repeat(3,1fr)' spacing={8} minChildWidth='250px'>
            <VStack w='300px' bg='white' borderRadius='16px' py={4} px={8} my={10}>
                <Avatar src={sara} />
                <Text fontWeight={700} fontSize={20}>Sarah W</Text>
                <Text textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, ipsum nec laoreet tempor, mi qutincidunt</Text>
            </VStack>
            <VStack w='300px' bg='white' borderRadius='16px' py={4} px={8} my={10}>
                <Avatar src={sara} />
                <Text fontWeight={700} fontSize={20}>Sarah W</Text>
                <Text textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, ipsum nec laoreet tempor, mi qutincidunt</Text>
            </VStack> <VStack w='300px' bg='white' borderRadius='16px' py={4} px={8} my={10}>
                <Avatar src={sara} />
                <Text fontWeight={700} fontSize={20}>Sarah W</Text>
                <Text textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis, ipsum nec laoreet tempor, mi qutincidunt</Text>
            </VStack>
        </SimpleGrid>
    </Container>
  )
}

export default Feedback
