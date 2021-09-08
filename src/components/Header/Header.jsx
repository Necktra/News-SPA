import { Container, Navbar } from 'react-bootstrap';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" className={classes.navbarWrapper}>
            <Container className={classes.logoContainer}>
                <Navbar.Brand href="/"><span className={classes.logo}>HACKER NEWS</span></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;