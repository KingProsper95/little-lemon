import { Box, Container, Flex } from "@chakra-ui/react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function Home(){

    const border = '20px solid #d9d9d9';

    return (
        <Flex direction='column'>
            <Box as='section' bg='primary_green' h='300px'>
                <Container minW='max-content'>
                    <Hero />
                </Container>
            </Box>
            <Container as='section' minW='max-content' >
                <Specials />
            </Container>
            <Box as='section' bg='#FDF4EE' borderTop={border} borderBottom={border}>
                <Container minW='max-content' py={28}>
                    <Testimonials />
                </Container>
            </Box>
            <Container as='section' minW='100vw'>
                <About />
            </Container>
        </Flex>
    )
}

export default Home;