import { Card, Avatar, Text, Heading, SimpleGrid, CardBody, Image, HStack, VStack, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import star from '../../assets/images/icons/star.png'


function Testimonials() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/testimonials')
        .then( response => response.json())
        .then(data => setTestimonials(data));
    },[])

    let starArray = [];

    for(let i = 0 ; i < 5 ; i++){
        starArray.push(star)
    }
  return (
    <>
        <Heading fontWeight={500} textAlign='center' mb={10}>Testimonials</Heading>
        <SimpleGrid gap={6} templateColumns='repeat(4,1fr)'>
             { testimonials && testimonials.map( testimonial => {
            return (
                <Card borderRadius='20px' w='200px' key={testimonial.id}>
                    <CardBody fontSize='13px'>
                        <Flex direction='column' gap={2}>
                            <HStack>
                                {starArray.map( star => {
                                    return ( <Image src={star} alt='star image' boxSize='20px' /> )
                                })}
                            </HStack>
                            <HStack>
                                <Avatar src={testimonial.image}/>
                                <VStack fontWeight={600} spacing={0}>
                                <Text>{testimonial.name}</Text>
                                <Text color='#6E6F6E'>{testimonial.account}</Text>
                                </VStack>
                            </HStack>
                            <Text color='#6E6F6E'>{testimonial.comment}</Text>
                        </Flex>
                    </CardBody>
                </Card>
            )
      }) }
        </SimpleGrid>
    </>
  )
}
export default Testimonials
