import { Container, Navbar } from 'react-bootstrap';
import classes from './Header.module.css';

import { ReactComponent as HeaderLogo } from './../../assets/images/headerLogo.svg';

const Header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" className={classes.navbarWrapper}>
            <Container className={classes.logoContainer}>
                <Navbar.Brand href="/"><HeaderLogo className={classes.logo}/></Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;