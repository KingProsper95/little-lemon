import Nav from './Nav';
import logo from '../assets/images/logo.jpg'
import { Flex,Box } from '@chakra-ui/react';

function Header() {
    return(
            <Flex gap='20px' pt='10px'>
                <img h='54px' w='196px' src={logo} alt="logo"/>
                <Nav />
            </Flex>
    )
}

export default Header;