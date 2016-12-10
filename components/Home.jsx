import React from 'react';
import { Link } from 'react-router';

import Radium from 'radium';
import { Button } from 'react-bootstrap';
import Particles from 'react-particles-js';

require('../css/fonts.css');

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            hexagon_wrapper: {
                textAlign: 'center',
                marginLeft: this.props.length * 0.1,
                marginRight: this.props.length * 0.1,
                height: this.props.length,
                width: this.props.length,
                position: 'relative',
                display: 'inline-block',
                transform: 'rotateZ(90deg)'
            },
            hexagon: {
                height: '100%',
                width: (100 * 0.57735) + '%',
                display: 'inline-block',
                backgroundColor: '#556474',
                transform: 'rotateZ(90deg)',
                backgroundColor: '#FFC425',
            },
            inner_hexagon: {
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            },
            hexagon_before: {
                position: 'absolute',
                top: 0,
                right: (100 / 2) - ((100 * 0.57735) / 2) + '%',
                backgroundColor: '#556474',
                height: 'inherit',
                width: (100 * 0.57735) + '%',
                content: '',
                transform: 'rotateZ(30deg)',
                backgroundColor: '#FFC425',
            },
            hexagon_after: {
                position: 'absolute',
                top: 0,
                right: (100 / 2) - ((100 * 0.57735) / 2) + '%',
                backgroundColor: '#556474',
                height: 'inherit',
                width: (100 * 0.57735) + '%',
                content: '',
                zIndex: -1,
                transform: 'rotateZ(-30deg)'
            },
            innermost: {
                transform: 'rotateZ(-180deg)',
                position: 'absolute',
            }
        };
        const customStyles = this.props.customStyles;
        let constructedStyles = {};
        for(var key in styles) {
            if(customStyles[key] !== null) {
                constructedStyles[key] = {
                    ...styles[key],
                    ...customStyles[key]
                };
            }
            else {
                constructedStyles[key] = styles[key];
            }
        }
        return (
            <Link to={this.props.link.target}>
            <div style={constructedStyles.hexagon_wrapper} >
                <div style={constructedStyles.hexagon_before} />
                <div style={constructedStyles.hexagon} >
                    <div style={styles.inner_hexagon}>
                        <div style={styles.innermost}>{this.props.link.text}</div>
                    </div>
                </div>
                <div style={constructedStyles.hexagon_after} />
            </div>
            </Link>
        );
    }
}

Hexagon.defaultProps = {
    customStyles: {
        hexagon_wrapper: null,
        hexagon: null,
        hexagon_after: null,
        hexagon_before: null
    }
};

const LogoDiv = Radium(() => {
    const styles = {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        top: {
            logo: {
                '@media only screen and (min-width: 930px)': {
                    width: 200
                },
                '@media only screen and (min-width: 725px) and (max-width: 930px)': {
                    width: 150
                },
                '@media only screen and (max-width: 724px)': {
                    width: 170
                }
            },
            title: {
                fontFamily: 'daggerSquare-oblique',
                color: '#7F2429',
                marginBottom: 20,
                '@media only screen and (min-width: 930px)': {
                    fontSize: 45,
                },
                '@media only screen and (min-width: 725px) and (max-width: 930px)': {
                    fontSize: 30,
                },
                '@media only screen and (max-width: 724px)': {
                    fontSize: 40
                }
            },
            text: {
                fontFamily: 'daggerSquare',
                color: '#020737',
                marginTop: 0,
                '@media only screen and (min-width: 930px)': {
                    fontSize: 20,
                },
                '@media only screen and (min-width: 725px) and (max-width: 930px)': {
                    fontSize: 15,
                },
                '@media only screen and (max-width: 724px)': {
                    fontSize: 20
                }
            }
        }
    };
    return(
        <div style={styles.main}>
            <img style={styles.top.logo} src={'../img/home/desp-logo.png'} />
            <p style={styles.top.title}>Desportivos '17</p>
            <p style={styles.top.text}>Reinvent the champion in you!</p>
        </div>
    );
});

@Radium
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            main: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            },
            row: {
                height: 130,
                display: 'flex',
                alignItems: 'center',
            },
            honeycomb: {
                marginTop: 94,
                '@media only screen and (max-width: 725px)': {
                    display: 'none'
                }
            },
            particles: {
                width: '100%',
                maxHeight: 1000,
                position: 'absolute',
                top: 0, left: 0,
                border: '1px solid white',
                backgroundColor: '#fff',
                zIndex: -1,
            },
        };

        const particles_config = {
            particles: {
                number: {
                    value: 154,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#e8a429'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: 'img/github.svg',
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 4,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#f0b752',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed:6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
              },
              interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: false,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: false,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                        opacity: 1
                    }
                },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                },
                    repulse: {
                        distance: 154.29467033725558,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                  }
                }
              },
              retina_detect: true
        };

        const length = 120;
        return (
            <div style={styles.main}>
                <Particles
                           style={styles.particles}
                           params={particles_config}
                />
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <LogoDiv />
                    <div style={styles.honeycomb}>
                        <div style={styles.row}>
                            <Hexagon length={length}
                                     link={{
                                        text: 'Contact us',
                                        target: '/contact-us'
                                     }} />
                            <Hexagon length={length}
                                     link={{
                                        text: 'Events',
                                        target: '/events'
                                     }}
                                     customStyles={{
                                        hexagon_wrapper: {
                                            marginLeft: 0.70 * length
                                        }
                                     }} />
                        </div>
                        <div style={{...styles.row,
                                        marginTop: -length * .56
                                    }}>
                            <Hexagon length={length}
                                     link={{
                                        text: 'About us',
                                        target: '/about'
                                     }}
                                     customStyles={{
                                        hexagon_wrapper: {
                                            marginLeft: 1.0 * length
                                        }
                                     }} />
                            <Hexagon length={length}
                                     link={{
                                        text: 'Reach Us',
                                        target: '/reach-us'
                                     }}
                                     customStyles={{
                                        hexagon_wrapper: {
                                            marginLeft: 0.7 * length
                                        }
                                     }} />
                        </div>
                        <div style={{...styles.row,
                                        marginTop: -length * .56
                                    }}>
                            <Hexagon length={length}
                                     link={{
                                        text: 'Register',
                                        target: '/register'
                                     }}
                                     customStyles={{
                                        hexagon_wrapper: {
                                            marginLeft: 1.9 * length
                                        }
                                     }} />
                        </div>
                        <div style={{...styles.row,
                                        marginTop: -length * .56
                                    }}>
                            <Hexagon length={length}
                                     link={{
                                        text: 'Gallery',
                                        target: '/gallery'
                                     }}
                                    customStyles={{
                                        hexagon_wrapper: {
                                            marginLeft: 1.0 * length
                                        }
                                    }} />
                        </div>
                    </div>
                </div>
                <p style={{
                               fontFamily: 'daggerSquare',
                               textAlign: 'center',
                               fontSize: 50,
                               color: '#020737',
                               margin: 0,
                           }}>20<sup>th</sup> - 22<sup>nd</sup> Jan 2017</p>
            </div>
        );
  }
}

class HomeContainer extends React.Component {
    render() {
        return(<Home />);
    }
}

export default HomeContainer;
