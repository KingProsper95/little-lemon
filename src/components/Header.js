import Nav from './Nav';
import logo from '../assets/images/icons/logo.png'
import { Flex, Image } from '@chakra-ui/react';

function Header() {
    return(
            <Flex gap='30px' py='20px' justify={{base:'space-between', lg:'center'}} px={{base:'20px',lg:'100px', xl:'200px'}}>
                <Image w={{base:'150px', lg:'196px'}} h={{md:'40px', lg:'54px'}} src={logo} alt="logo"/>
                <Nav />
            </Flex>
    )
}

export default Header;