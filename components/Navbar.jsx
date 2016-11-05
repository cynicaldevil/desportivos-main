import React from 'react';

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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Sponsors</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    </nav>
                </div>
                </header>
                <div style={{marginTop: 100}} />
            </div>
        );
    }
}

module.exports = Navbar;
