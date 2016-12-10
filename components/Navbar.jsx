import React from 'react';
import { Link } from 'react-router';
import styles from '../css/screen.css';
import Radium from 'radium';

@Radium
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    showNavbar = () => {
        if(!this.props.showNavbar) {
            return {
                '@media only screen and (min-width: 725px)': {
                    display: 'none'
                }
            };
        }
        else return {};
    };

    render() {
        const styles = {
            ul: {
                fontSize: 15,
                letterSpacing: -1,
            }
        };
        return(
                <header className="header-main" style={this.showNavbar()}>
                <div className="navbar-row">
                  <nav className="nav-2">
                  <ul style={styles.ul} id="navigation">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/reach-us">Reach Us</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                    </ul>
                    </nav>
                </div>
                </header>
        );
    }
}

export default Navbar;
