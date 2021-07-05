import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Homie</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ color: 'white' }}>
                        {/* <span className="navbar-toggler-icon" style={{ color: 'white' }}></span> */}
                        <IconButton>


                            <MenuIcon className="navbar-toggler-icon" />
                        </IconButton>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#offers">Offers</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#property">Properties</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="../ErrorPage/ErrorPage.js">Login</a>
                            </li>

                            <li className="nav-item register_link">
                                <Link className="register" to="/error">Register</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
