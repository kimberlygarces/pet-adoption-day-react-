import React from 'react';

import confLogo from '../images/badge-header.png'
import '../styles/Navbar.css'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={confLogo} alt="Logo"></img>
                    <span className="font-weight-light">adopt your pet</span>
                </Link>
            </div>
            </div>
        )
    }}

export default Navbar;