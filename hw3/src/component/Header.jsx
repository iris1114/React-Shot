import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/header.css";

import Btn from "./Btn";


const Header = () => {
    return(
        <>
            <header>
                <div className="container">
                    <Navbar>
                        <Navbar.Brand href="#">
                            <img className="logo" src="../../image/logo.svg" alt="logo"/>
                        </Navbar.Brand>
                        <Nav className="ml-auto d-none d-md-flex">
                            <Nav.Link href="#">Products</Nav.Link>
                            <Nav.Link href="#">Services</Nav.Link>
                            <Nav.Link href="#">Resources</Nav.Link>
                            <Nav.Link href="#">About Us</Nav.Link>
                        </Nav>
                        <Btn text="Start your project"></Btn>
                    </Navbar>
                </div>
            </header>
        </>
    );
}

export default Header;