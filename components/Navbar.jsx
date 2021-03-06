import React from 'react';
import { Link } from 'react-router';
import styles from '../css/screen.css';
import Radium from 'radium';

import res from '../utils/resolve';

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
            nav: {
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row'
            },
            ul: {
                fontSize: 14,
                letterSpacing: -1,
            },
            image: {
                marginRight: 10,
                marginLeft: 10,
                '@media only screen and (min-width: 476px)': {
                    width: 27,
                    height: 27,
                },
                '@media only screen and (max-width: 475px)': {
                    width: 20,
                    height: 20,
                }
            },
            social_media: {
                height: 94,
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                '@media only screen and (max-width: 475px)': {
                    marginTop: 13,
                    flexDirection: 'column'
                }
            }
        };
        return(
                <header className="header-main" style={this.showNavbar()}>
                <div style={styles.nav} className="navbar-row">
                    <nav className="nav-2">
                        <ul style={styles.ul} id="navigation">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about" activeStyle={{ color: 'white' }}>About us</Link></li>
                            <li><Link to="/events" activeStyle={{ color: 'white' }}>Events</Link></li>
                            <li><Link to="/reach-us" activeStyle={{ color: 'white' }}>Reach Us</Link></li>
                            <li><Link to="/register" activeStyle={{ color: 'white' }}>Register</Link></li>
                            <li><Link to="/gallery" activeStyle={{ color: 'white' }}>Gallery</Link></li>
                            <li><Link to="/contact-us" activeStyle={{ color: 'white' }}>Contact Us</Link></li>
                        </ul>
                    </nav>
                    <div style={styles.social_media}>
                        <a target='blank'
                           href='https://www.facebook.com/Desportivos.LNMIIT'>
                            <img style={styles.image} src={res('img/navbar/Facebook.png')} alt='fb'/>
                            </a>
                        <a target='blank'
                           href='https://www.youtube.com/channel/UCQpn6OkgdHV5sy2qWIcADqA'>
                            <img style={styles.image} src={res('img/navbar/YouTube.png')} alt='yt'/>
                        </a>
                        <a target='blank'
                           href='https://www.google.co.in/maps/place/LNMIIT/@26.9342333,75.9205137,17z/data=!4m2!3m1!1s0x396dba21e8a1d1c9:0x5ab565cce4d44c2b?hl=en'>
                            <img style={styles.image} src={res('img/navbar/location.ico')} alt='loc'/>
                        </a>
                    </div>
                </div>
                </header>
        );
    }
}

export default Navbar;
