import { Box, Heading, Text } from  '@chakra-ui/react';
import background from '../../assets/images/food/background.png';

function Landing() {
  return (
    <Box bgImage={background} color='white' textAlign='center' h={300} bgSize={'cover'} p={20}>
      <Heading fontWeight={700} fontSize='64px'>Reservations</Heading>
      <Text fontSize='40px'>Table booking now available</Text>
    </Box>
  )
}

export default Landing;
