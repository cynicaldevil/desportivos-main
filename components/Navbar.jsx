import React from 'react';
import { Link } from 'react-router';
import styles from '../css/screen.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <header className="header-main">
                <div className="row">
                  <nav className="nav-2">
                  <ul id="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/sponsors">Sponsors</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                    </nav>
                </div>
                </header>
                <div style={{marginTop: 100}} />
            </div>
        );
    }
}

export default Navbar;
