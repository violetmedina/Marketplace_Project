import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
    return (
    <Container>
        <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="/addproduct">Add product</Navbar.Brand>
            <Navbar.Brand href="/signin">Sign In</Navbar.Brand>
        </Container>
        </Navbar>
    </Container>
    );
}

export default NavbarComponent

