import * as React from 'react';
import logo from '../images/360zen.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarText } from 'react-bootstrap';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function App() {
  
  return (
    <Navbar expand="lg" className="bg-transparent" id="home">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} style={{"max-width":"200px"}}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='rounded-5'></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
           <Nav className="flex-column float-end">
            <Nav.Link href="#home" className='text-white p-1 link-hover'>Home</Nav.Link>
            <Nav.Link href="#weoffer" className='text-white p-1 link-hover'>Our Recent Works</Nav.Link>
            <Nav.Link href="#contactus" className='text-white p-1 link-hover'>Contact US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default App;
