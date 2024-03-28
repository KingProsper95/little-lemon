function Nav(){
    const ulStyle = {
        backgroundColor : 'blue',
        listStyleType : 'none',
    }
    return (
        <>
            <ul style = {ulStyle}>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Login</li>
            </ul>
        </>
    )
}

export default Nav;