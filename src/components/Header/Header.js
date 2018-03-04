import React from 'react'
import {Link, Route, RouteHandler} from 'react-router';
import {MenuItem, Nav, NavDropdown, NavItem, Navbar} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";
import { PortalWithState } from 'react-portal';
import SignIn from '../SignIn'
import SignUp from '../SignUp'



const Header = () => (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Member Portal</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/some">
            <NavItem eventKey={2}>Some</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <PortalWithState closeOnOutsideClick closeOnEsc>
            {({openPortal, closePortal, isOpen, portal}) => [
              <NavItem eventKey={4} href="#" onClick={openPortal} key="somerandomtext">
                Sign in
              </NavItem>,
              portal(
                  <SignIn onCancel={closePortal}/>
              )
            ]}

          </PortalWithState>
          <PortalWithState closeOnOutsideClick closeOnEsc>
            {({openPortal, closePortal, isOpen, portal}) => [
              <NavItem eventKey={5} href="#" onClick={openPortal} key="somerandomtext">
                Sign Up
              </NavItem>,
              portal(
                  <SignUp onCancel={closePortal}/>
              )
            ]}

          </PortalWithState>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);

export default Header



