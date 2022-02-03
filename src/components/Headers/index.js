import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import {
    Modal,
    MaterialInput,
    MaterialButton,
} from '../MaterialUI';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ContactsIcon from '@mui/icons-material/Contacts';
import { GiBuyCard } from 'react-icons/gi';
import logo from '../../logo.png';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Cart from "../UI/Cart";


const Headers = (props) => {
    const [loginModal, setLoginModal] = useState(false);
    const [signup, setSignup] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    // state cart value
    const cart = useSelector((state) => state.cart);

    const userSignup = () => {
        const user = { firstName, lastName, email, password };
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""
        ) {
            return;
        }

        dispatch(_signup(user));
    };
    const userLogin = () => {
        if (signup) {
            userSignup();
        } else {
            dispatch(login({ email, password }));
        }
    };
    const logout = () => {
        dispatch(signout());
    }

    useEffect(() => {
        if (auth.authenticate) {
            setLoginModal(false)
        }
    }, [auth.authenticate]);

    useEffect(() => {
        dispatch(getCartItems());
    }, []);

    const renderLoggedInMenu = () => {
        return (
            <Nav>
                <Nav.Item>
                    <Button id="fullName">
                        {auth.user.firstName}
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button

                        onClick={logout}
                    >
                        <div className="Navitems">
                            <LogoutIcon />
                            &nbsp;Logout
                        </div>

                    </Button>
                </Nav.Item>

            </Nav>
        );
    }

    const renderNonLoggedInMenu = () => {
        return (
            <Nav>
                <Nav.Item>
                    <Button
                        variant="contained"
                        id="loginButton"
                        onClick={() => {
                            setSignup(false);
                            setLoginModal(true);
                        }}
                    >
                        <LoginIcon />
                        &nbsp;Login
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button
                        className="navitems"
                        variant="text"
                        onClick={() => {
                            setLoginModal(true);
                            setSignup(true);
                        }}
                        style={{ color: "#2874f0" }}
                    >
                        <div className="Navitems">
                            <ContactsIcon />
                            &nbsp;Sign Up
                        </div>

                    </Button>
                </Nav.Item>


            </Nav>

        );
    }

    const logoStyle = {
        width: '100%',
        height: 'auto',
        maxWidth: '60px'
    }


    return (
        <>
            <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
                <div className="authContainer">
                    <div className="row">
                        <div className="leftspace">
                            <h2>Login</h2>
                            <p>Get access to your Orders, Wishlist and Recommendations</p>
                        </div>
                        <div className="rightspace">
                            <div className="loginInputContainer">
                                {signup && (
                                    <MaterialInput
                                        type="text"
                                        label="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                )}
                                {signup && (
                                    <MaterialInput
                                        type="text"
                                        label="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                )}

                                <MaterialInput
                                    type="text"
                                    label="Email/Mobile Number"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <MaterialInput
                                    type="password"
                                    label="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                // rightElement={<a href="#">Forgot?</a>}
                                />
                                <MaterialButton
                                    title={signup ? "Register" : "Login"}
                                    bgColor="#fb641b"
                                    textColor="#ffffff"
                                    style={{
                                        margin: "40px 0 20px 0",
                                    }}
                                    onClick={userLogin}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Navbar collapseOnSelect expand="lg" variant="dark" >
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/">
                            <img src={logo} style={logoStyle} alt="logo" />
                        </Link>
                        {/* <Navbar.Brand >Admin DashBoard</Navbar.Brand> */}
                        <Link to="/" className="navbar-brand"
                        style={{ fontWeight: '600' }}
                        >
                            &nbsp; weBuy</Link>
                    </Navbar.Brand>

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
                        {
                            auth.authenticate ?
                                renderLoggedInMenu() : renderNonLoggedInMenu()
                        }
                        <Nav.Item>
                            <Link to={`/account/orders`} style={{ textDecoration: 'none' }}>
                                <Button

                                    style={{ color: '#fff' }}
                                    onClick={() => {
                                        !auth.authenticate && setLoginModal(true);
                                    }}
                                >
                                    <div className="Navitems">
                                        <GiBuyCard />
                                        &nbsp;Orders
                                    </div>

                                </Button>
                            </Link>

                        </Nav.Item>
                        <Nav>
                            <Nav.Item>
                                <Link to={`/cart`} className="cart">
                                    <Cart count={Object.keys(cart.cartItems).length} />
                                    <span style={{ margin: "0 10px" }}>Cart</span>
                                </Link>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Headers