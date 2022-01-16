import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ContactsIcon from '@mui/icons-material/Contacts';
import logo from '../../logo.png';
import Button from '@mui/material/Button';


const Headers = (props) => {
    const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

    const logoStyle={
        width:'100%',
        height:'auto',
        maxWidth:'60px'
    }
    const renderLoggedInMenu = () => {
        return (
            <>
            <Button>
                logined
            </Button>
            </>
        //   <DropdownMenu
        //     menu={
        //       <a className="fullName">
        //         {auth.user.firstName}
        //       </a>
        //     }
        //     menus={[
        //       { label: 'My Profile', href: '', icon: null },
        //       { label: 'SuperCoin Zone', href: '', icon: null },
        //       { label: 'Flipkart Plus Zone', href: '', icon: null },
        //       { 
        //         label: 'Orders',
        //         href: '/account/orders', 
        //         icon: null 
        //       },
        //       { label: 'Wishlist', href: '', icon: null },
        //       { label: 'My Chats', href: '', icon: null },
        //       { label: 'Coupons', href: '', icon: null },
        //       { label: 'Rewards', href: '', icon: null },
        //       { label: 'Notifications', href: '', icon: null },
        //       { label: 'Gift Cards', href: '', icon: null },
        //       { label: 'Logout', href: '', icon: null, onClick: logout }
        //     ]}
        //   />
        );
      }

    const renderNonLoggedInMenu = () => {
        return (
            <>
                <Button variant="contained"><LoginIcon />Login</Button>
            </>
        //   <DropdownMenu
        //     menu={
        //       <Button
        //       variant="contained"
        //         id="loginButton"
        //         onClick={() => {
        //           setSignup(false);
        //           setLoginModal(true);
        //         }}
        //       >
        //         Login
        //       </Button>
        //     }
        //     menus={[
        //       { label: 'My Profile', href: '', icon: null },
        //       { label: 'Flipkart Plus Zone', href: '', icon: null },
        //       {
        //         label: "Orders",
        //         href: `/account/orders`,
        //         icon: null,
        //         onClick: () => {
        //           !auth.authenticate && setLoginModal(true);
        //         },
        //       },
        //       { label: 'Wishlist', href: '', icon: null },
        //       { label: 'Rewards', href: '', icon: null },
        //       { label: 'Gift Cards', href: '', icon: null },
        //     ]}
        //     firstMenu={
        //       <div className="firstmenu">
        //         <span>New Customer?</span>
        //         <a
        //           onClick={() => {
        //             setLoginModal(true);
        //             setSignup(true);
        //           }}
        //           style={{ color: "#2874f0" }}
        //         >
        //           Sign Up
        //         </a>
        //       </div>
        //     }
        //   />
        );
      }

    return(
        <>
            <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark" >
                <Container fluid>
                    <img src={logo} style={logoStyle} alt="logo" />
                    {/* <Navbar.Brand >Admin DashBoard</Navbar.Brand> */}
                    <Link to="/" className="navbar-brand" style={{fontWeight:'600'}}>weBuy</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                        {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Headers