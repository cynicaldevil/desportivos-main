import React from 'react';
import Radium from 'radium';

import { Modal, Button } from 'react-bootstrap/lib';

@Radium
class Sport extends React.Component {
    constructor(props) {
        super(props) ;
    }

    render() {

        const styles = {
            main: {
                ':hover': {
                    border: '4px solid #D8D8D8',
                    cursor: 'pointer'
                }
            }
        };
        return (
            <li className="grid__item" style={styles.main}>
                <div className="grid__link" onClick={() => this.props.onClickCB(this.props.name) }>
                    <img className="grid__img layer" src="../img/events/back_1.png" alt="Canvas Dummy" />
                    <img className="grid__img layer" src="../img/events/back_2.png" alt="Dummy" />
                    <img className="grid__img layer" src={this.props.image} alt="01" />
                    <span className="grid__title">{this.props.name}</span>
                </div>
            </li>
        );
    }
}

class SportsDataPanel extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
            showModal: true
        };
  }

  close = () => {
    this.setState({ showModal: false });
    this.props.onModalCloseCB(false);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panel_is_visible: false,
            panel_data: null
        };

        this.sports_data = new Map([
            ["basketball",
            {
                rules: "two or four player games",
                image: '../img/events/1.png',
            }
            ],
            ["badminton",
            {
                rules: "eleven players",
                image: '../img/events/2.png',
            }
            ],
            ["boxing",
            {
                rules: "two or four player games",
                image: '../img/events/3.png',
            }
            ],
            ["kabaddi",
            {
                rules: "eleven player games",
                image: '../img/events/4.png',
            }
            ],
            ["cricket",
            {
                rules: "seven player games",
                image: '../img/events/5.png',
            }
            ],
            ["football",
            {
                rules: "seven player games",
                image: '../img/events/6.png',
            }
            ],
            ["table_tennis",
            {
                rules: "seven player games",
                image: '../img/events/7.png',
            }
            ],
            ["volleyball",
            {
                rules: "seven player games",
                image: '../img/events/8.png',
            }
            ],
            ["lawn_tennis",
            {
                rules: "seven player games",
                image: '../img/events/9.png',
            }
            ],
            ["taekwondo",
            {
                rules: "seven player games",
                image: '../img/events/10.png',
            }
            ],
            ["squash",
            {
                rules: "seven player games",
                image: '../img/events/11.png',
            }
            ],
            ["karate",
            {
                rules: "seven player games",
                image: '../img/events/12.png',
            }
            ],
            ["kho_kho",
            {
                rules: "seven player games",
                image: '../img/events/13.png',
            }
            ],
            ["kick_boxing",
            {
                rules: "seven player games",
                image: '../img/events/14.png',
            }
            ],
            ["five_a_side_football",
            {
                rules: "seven player games",
                image: '../img/events/15.png',
            }
            ],
            ["chess",
            {
                rules: "seven player games",
                image: '../img/events/16.png',
            }
            ],
            ["lan_gaming",
            {
                rules: "seven player games",
                image: '../img/events/17.png',
            }
            ],
            ["carrom",
            {
                rules: "seven player games",
                image: '../img/events/18.png',
            }
            ],
        ]);
    }

    componentDidMount() {

        const script_paths = [
            '../js/events/modernizr.custom.js',
            '../js/events/imagesloaded.pkgd.min.js',
            '../js/events/masonry.pkgd.min.js',
            '../js/events/dynamics.min.js',
            '../js/events/classie.js',
            '../js/events/animOnScroll.js',
            '../js/events/main.js'
        ];

        script_paths.forEach((script_path) => {
            const script = document.createElement("script");
            script.type  = 'text/javascript';
            script.src = script_path;
            this.scriptDiv.appendChild(script);
        });

        // for inline js
        const inline_js = `(function() {
                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
                    new IsoGrid(el, {
                        type : 'scrollable',
                        transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
                        stackItemsAnimation : {
                            properties : function(pos) {
                                return {
                                    translateZ: (pos+1) * 50,
                                    rotateZ: getRandomInt(-3, 3)
                                };
                            },
                            options : function(pos, itemstotal) {
                                return {
                                    type: dynamics.bezier,
                                    duration: 500,
                                    points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
                                    //delay: (itemstotal-pos-1)*40
                                };
                            }
                        },
                        onGridLoaded : function() {
                        }
                    });
                });
            })();
        `;
        const inline_js_script = document.createElement("script");
        inline_js_script.type = 'text/javascript';
        inline_js_script.text = inline_js;

        let flag = false;
        let counter = 0;
        let isDefined = window.setInterval(() => {
            if(!(typeof IsoGrid === "undefined") && !flag) {
                this.scriptDiv.appendChild(inline_js_script);
                flag = true;
            }
            counter += 100;
        }, 100);

        // automatically stop interval after 3 seconds
        window.setTimeout(() => {
            clearInterval(isDefined);
        }, 3000);
    }

    onSportClick = (sport) => {
        const data = this.sports_data.get(sport);
        this.setState({
            panel_is_visible: true,
            panel_data: data.rules
        });
    }

    onModalCloseCB = (isOpen) => {
        this.setState({
            panel_is_visible: isOpen
        });
    }

    render() {

        const display_sports = [...this.sports_data].map((sport_, index) => {
            return <Sport
                       name={sport_[0]}
                       image={sport_[1].image}
                       key={index}
                       onClickCB={this.onSportClick}
                    />;
        });

        return(
            <div style={{backgroundColor: '#CAFF25'}}>
                <div ref={(input) => this.scriptDiv = input} />
                <div className="include-deps">
                    <link rel="stylesheet" type="text/css" href="../css/events/normalize.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/demo.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/component.css" />
                    <link rel="stylesheet" type="text/css" href="../css/bootstrap/bootstrap.min.css" />
                    {this.state.panel_is_visible && <SportsDataPanel
                                                        data={this.state.panel_data}
                                                        onModalCloseCB={this.onModalCloseCB}
                                                    />}
                    <div className="isolayer isolayer--scroll1 isolayer--shadow">
                        <ul className="grid grid--effect-flip">
                            {display_sports}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Events;
