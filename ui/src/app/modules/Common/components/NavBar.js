import React from 'react';
import {IndexLink, Link} from 'react-router';

const NavBar = () => (
    <nav className="navbar navbar-light bg-white justify-content-between">
        <IndexLink to="/" className="navbar-brand ml-4">
            <img className="d-inline-block align-top" src="/assets/img/logo.dark.png" alt=""/>
        </IndexLink>

        <Link to="/logout" className="btn btn-link pull-right btn-logout mr-4">
            Logout
        </Link>
    </nav>
);

export default NavBar;