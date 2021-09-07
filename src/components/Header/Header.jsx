import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {

    return (  
    // <div className={classes.wrap}>
    <Navbar bg="dark" variant="dark" className={classes.navbarWrapper}>
    <Container className={classes.logoContainer}>

    {/* <Navbar.Brand href="#home">Hacker news</Navbar.Brand> */}
    <Navbar.Brand href="/"><span className={classes.logo}>HACKER NEWS</span></Navbar.Brand>
    {/* <Nav className="me-auto"> */}
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    {/* </Nav> */}
    
    </Container>
  </Navbar>
 //</div>
    )
}

export default Header;