import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div>
      <Navbar variant="light" expand="lg" fixed="top" className="bg-gradient-to-r from-black/90 via-orange-950 to-orange-400/90 items-center font-roboto">
        <Container>
          <Navbar.Brand href="/">
            {/* <img 
              src={logo}
              alt="Hashmeet Logo"
              className="h-12" // Adjust the height of the logo as needed
            /> */}
            <div className='text-3xl text-orange-400'>HASHMEET S. SAINI</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
          <Navbar.Collapse id="basic-navbar-nav" className="p-2 rounded-3xl">
            <Nav className="ml-auto">
              <Nav.Link href="#toolkit" className="text-white !text-2xl hover:!text-orange-400">Toolkit</Nav.Link>
              <Nav.Link href="#works" className="text-white !text-2xl hover:!text-orange-400">Works</Nav.Link>
              <Nav.Link href="#contact" className="text-white !text-2xl hover:!text-orange-400">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

