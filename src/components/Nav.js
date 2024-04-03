import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import styled from "styled-components";

function Nav(){
    return (
        <HStack as="nav">
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