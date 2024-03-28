import Nav from './Nav';
import logo from '../assets/images/logo.jpg'
function Header() {
    return(
    <>
        <img src={logo} alt="logo"/>
        <Nav />
    </>
    )
    
}

export default Header;