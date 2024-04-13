import { Flex, Image, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";
import logo from  '../assets/images/icons/logo.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
       <Flex justify='center' gap={{base:5, md:10, lg:20}} py={20}>
           <Image src={logo} alt='restauurant logo' w={{base:'150px', lg:'196px'}} h={{md:'40px', lg:'54px'}} alignSelf='center'/>
           <Box fontSize='20px'>
                <Text color='primary_green' fontWeight={700} mb='15px'>Dormat Navigation</Text>
                <UnorderedList as='ul' color='secondary_black' styleType='none'>
                    <ListItem as='li'><Link to='/'>Home</Link></ListItem>
                    <ListItem as='li'><Link>About</Link></ListItem>
                    <ListItem as='li'><Link>Menu</Link></ListItem>
                    <ListItem as='li'><Link to='/reservations'>Reservations</Link></ListItem>
                    <ListItem as='li'><Link>Order Online</Link></ListItem>
                    <ListItem as='li'><Link>Login</Link></ListItem>
                </UnorderedList>
            </Box>
            <Box fontSize='20px'>
                <Text color='primary_green' fontWeight={700} mb='15px'>Contacts</Text>
                <UnorderedList as='ul' color='secondary_black' styleType='none'>
                    <ListItem as='li'><Link>Address</Link></ListItem>
                    <ListItem as='li'><Link>Phone number</Link></ListItem>
                    <ListItem as='li'><Link>Email</Link></ListItem>
                </UnorderedList>
            </Box>
            <Box fontSize='20px'>
                <Text color='primary_green' fontWeight={700} mb='15px'>Social Media Links</Text>
                <UnorderedList as='ul' color='secondary_black' styleType='none'>
                    <ListItem as='li'><Link>Facebook</Link></ListItem>
                    <ListItem as='li'><Link>Instagram</Link></ListItem>
                    <ListItem as='li'><Link>Twitter</Link></ListItem>
                    <ListItem as='li'><Link>LinkedIn</Link></ListItem>
                </UnorderedList>
            </Box>
       </Flex>
    )
}

export default Footer;