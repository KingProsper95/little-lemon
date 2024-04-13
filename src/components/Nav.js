import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

function Nav(){
    return (
        <HStack as="nav" spacing={5} fontWeight='Bold' fontSize={{base:'15px', md:'20px'}}>
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Menu</Link>
            <Link to="/reservations">Reservations</Link>
            <Link>Order online</Link>
            <Link>Login</Link> 
        </HStack>   
    )
}

export default Nav;
