import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { userLogOut } from '../../pages/admin-user/userAction';

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="primary" expand="sm">
        <Container>
          <Navbar.Brand href="/dashboard">Eshop Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/admin-profile">
                <i className="fa-solid fa-user-tie"></i>
              </Nav.Link>
              <Nav.Link
                href="#"
                onClick={() => {
                  dispatch(userLogOut());
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
