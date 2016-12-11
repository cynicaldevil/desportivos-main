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
        const show_styles = () => {
            if(typeof this.props.show !== 'undefined' && !this.props.show) {
                return {
                    visibility: 'hidden'
                }
            }
            else return styles.main;
        };
        return (
            <li className="grid__item" style={show_styles()}>
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
            <Modal.Title style={{textTransform: 'uppercase'}}>{this.props.name}</Modal.Title>
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

const ScrollHelper = (props) => {
    const styles = {
        main: {
            marginRight: 70,
            marginTop: 70,
            padding: 10,
            float: 'right',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderTop: '7px solid white',
        },
        text: {
            fontSize: 55,
            color: '#FFF',
            textTransform: 'uppercase',
            fontFamily: `"Oswald", sans-serif`,
            margin: 20,
            lineHeight: 1,
        },
        arrow: {
            marginTop: -20,
            marginRight: 20,
            marginLeft: -20,
        },
        line: {
            width: '95%',
            height: 3,
            backgroundColor: 'white',
            marginRight: 100
        }
    };
    return(
        <div style={styles.main}>
            <link href="https://fonts.googleapis.com/css?family=Oswald:700" rel="stylesheet" />
            <img style={styles.arrow} src='../img/events/down_arrow.svg' alt='arrow' />
            <div style={{marginBottom: 20}}>
                <div style={styles.text}>Scroll <br />to <br />view <br /> more</div>
                <div style={styles.line} />
            </div>
        </div>
    );
};

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panel_is_visible: false,
            panel_data: null,
            name: null,
        };

        this.sports_data = new Map([
            ['basketball',
            {
                info: {
                    rules: [
                    {
                        style: 'bold',
                        text: `Mens and Womens Team`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `Maximum number of players per team are 10.`,
                            `The match will consist of 4 quarters, each quarter lasting 10
                             minutes (unless mentioned otherwise).`,
                            `Fixtures and schedule for matches will be put up at the time 
                            of on-desk registration. Timings for the matches will be strictly adhered to.`,
                            `Officials will keep score and their decisions will be final.`
                        ]
                    },
                    ],
                    contact: [
                    {
                        name: 'Harshit Bishnoi',
                        number: '9414791205'
                    },
                    {
                        name: 'Rishabh Sharma',
                        number: '8385952233',
                    },
                    {
                        name: 'Tayba Wasim',
                        number: '7568688665',
                    },
                    {
                        name: 'Yashasvi Jain',
                        number: '7742496667',
                    },
                    ]
                },
                image: '../img/events/1.png',
            }
            ],
            ['badminton',
            {
                info: {
                    rules: [
                    {
                        style: 'bold',
                        text: `Mens and Womens Team`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `Format of Play: Best of 3 in the order - Singles, Doubles, Singles.`,
                            `Each match (singles/doubles) will be a best of 3 of 21 points each.`,
                            `Teams for every game are to be submitted before the match.`,
                            `Latest IBF rules will be followed.`,
                            `Teams of maximum 4 players and minimum 3 players are allowed.`,
                            `Only one player can play in two matches (one singles and one doubles).`,
                            `Decision of referees and Organising Committee will be final and binding.`,
                        ]
                    },
                    ],
                    contact: [
                    {
                        name: 'Kartik Agrawal',
                        number: '9680595453'
                    },
                    {
                        name: 'Apoorv Pusalkar',
                        number: '8769057662'
                    },
                    {
                        name: 'Anjali Gupta',
                        number: '9460797535'
                    },
                    ]
                },
                image: '../img/events/2.png',
            }
            ],
            ['boxing',
            {
                info: {
                    rules: [],
                    contact: []
                },
                image: '../img/events/3.png',
            }
            ],
            ['kabaddi',
            {
                info: {
                    rules: [],
                    contact: []
                },
                image: '../img/events/4.png',
            }
            ],
            ['cricket',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `Maximum 15 players are allowed in a team and the tournament 
                            will be played on the T-20 knock-out format.`,
                            `Tie in the game will be resolved by a super over.`,
                            `Tie in case of points or wins in finals will be resolved by 
                            comparison of net run rates of all the matches played by the team.`,
                            `Teams should report 15 minutes before the scheduled time 
                            otherwise the match will be forfeited to the other team.`,
                            `All the teams should come in whites.`,
                        ],
                    }],
                    contact: [
                    {
                        name: 'Nishant Saraf',
                        number: '9602490090'
                    },
                    {
                        name: 'Loveneet Singh',
                        number: '8426888446'
                    },
                    {
                        name: 'Navnish Gupta',
                        number: '9478584050'
                    },
                    ]
                },
                image: '../img/events/5.png',
            }
            ],
            ['football',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `Normal FIFA rules applicable.`,
                            `Maximum 15 players are allowed in a team.`,
                            `Offside etc. as per current format followed.`,
                            `Maximum 3 substitutions allowed.`,
                            `Extra time for the matches shall be notified only before the match.`,
                            `The decision of the refree will be final and binding.`,
                        ],
                    }],
                    contact: [
                    {
                        name: 'Pankaj Kriplani',
                        number: '7222868410'
                    },
                    {
                        name: 'Utkarsh Pandit',
                        number: '9414331086'
                    },
                    ]
                },
                image: '../img/events/6.png',
            }
            ],
            ['Table Tennis',
            {
                info: {
                    rules: [
                    {
                        style: 'bold',
                        text: `Mens Team`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `Format Of Play(in order): Singles(A vs X), Singles (B vs Y), 
                            Doubles, Reverse Singles(A vs Y), Reverse Singles(B vs X).`,
                            `All games will be Best of 5.`,
                            `Players playing singles cannot play the doubles.`,
                            `Maximum 5 and minimum 4 separate players are allowed in a team.`,
                            `All standard rules as followed by the ITTF are applicable.`,
                            `Any show of unnecessary aggression or unsportsmanlike conduct 
                            towards the umpire or the playing equipment will lead 
                            to the immediate disqualification of the player. 
                            Any discussions regarding the same will not be entertained.`,
                        ]
                    },
                    {
                        style: 'bold',
                        text: `Womens Team`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `Format Of Play(in order): Singles(A vs X), Singles (B vs Y), 
                            Singles(C vs Z), Reverse Singles(A vs Y), Reverse Singles(B vs X).`,
                            `All games will be Best of 5.`,
                            `3 separate players are required in the team.`,
                            `Maximum 4 and minimum 3 players are allowed in a team.`,
                        ]
                    },
                    {
                        style: 'bold',
                        text: `Open Tournament(For mens only)`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `All games will be best of 5 each set will be of 11 points.`,
                            `Open singles `,
                            `Open doubles ( Partners can be from 2 different colleges )`,
                        ]
                    },
                    ],
                    contact: [
                    {
                        name: 'Suyash Misra',
                        number: '9530027432'
                    },
                    {
                        name: 'Rajat Chandiwala',
                        number: '7023336648'
                    },
                    {
                        name: 'Divyanshi Soni',
                        number: '7073708767'
                    },
                    {
                        name: 'Shiwani Manhas',
                        number: '8769209655'
                    },
                    ]
                },
                image: '../img/events/7.png',
            }
            ],
            ['Volleyball',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `Separate matches for girls and boys.`,
                            `Maximum number of players per team is 12 (6 main + 6 sub).`,
                            `3 sets of 25 points each(Final match will be of 5 sets of 
                            25 points each).`,
                            `Maximum 3 touches are allowed.`,
                            `Rotation Policy will be followed if both teams agree on it.`,
                            `Night matches will also be held.`,
                        ],
                    }],
                    contact: [
                    {
                        name: 'Himanshu Purohit',
                        number: '7073103357'
                    },
                    {
                        name: 'Vishnu yadav',
                        number: '8769000836'
                    },
                    {
                        name: 'Ayushi gupta',
                        number: '7297803041'
                    },
                    ],
                },
                image: '../img/events/8.png',
            }
            ],
            ['Lawn Tennis',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `Each team should have minimum 3 and maximum 4 players.`,
                            `Teams should bring their own kit. Only match balls will 
                            be provided for the matches.`,
                            `The chair umpire has final words on all issues 
                            related to on court facts.`,
                            `All the team members are required to show their ID 
                            cards before the beginning of the match failing 
                            which the defaulting individual will not be allowed to play.`,
                            `The Rules of Tennis 2013 as released by the ITF will be followed.`,
                            `In case of a deuce, the first side which scores two points 
                            wins the game. These points need not be consecutive.`,
                        ],
                    }],
                    contact: [
                    {
                        name: 'Harshit Jindal',
                        number: '7222058883'
                    },
                    {
                        name: 'Parth Parashar',
                        number: '9636640086'
                    },
                    {
                        name: 'Shreya Rajput',
                        number: '8107033191'
                    },
                    ]
                },
                image: '../img/events/9.png',
            }
            ],
            ['Taekwondo',
            {
                info: {
                    rules: [],
                    contact: []
                },
                image: '../img/events/10.png',
            }
            ],
            ['Squash',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `A team consist of 3 players.`,
                            `The order of match between two teams A and X  will be 
                            (A1 vs X1),(A2 vs X2),(A3 vs X3),(A2 vs X1),(A1 vs X2).`,
                            `Each match is best of 3 game. A match consists of 16 points.`,
                            `The server, on winning a rally, scores a point and retains the 
                            service; the receiver, on winning a rally, scores a point and 
                            becomes the server.`,
                        ],
                    }
                    ],
                    contact: [
                    {
                        name: 'Vatsal Goyal',
                        number: '9783647822'
                    },
                    {
                        name: 'Anjali mudgal',
                        number: '8946951205'
                    },
                    ]
                },
                image: '../img/events/11.png',
            }
            ],
            ['Karate',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `All Events will be conducted as per Latest TFI Rules.`,
                            `Decisions by the Referee Panel will be the Final.`,
                        ]
                    },
                    {
                        style: 'bold',
                        text: `Events and Weight Categories:`
                    },
                    {
                        style: 'normal',
                        text: [
                            `Senior Men and Women`,
                            `Under 46kg: Not exceeding 46kg`,
                            `Under 54kg: Not exceeding 54kg`,
                            `Under 49kg: Over 46kg and Not exceeding 49kg`,
                            `Under 53kg: Over 49kg and Not exceeding 53kg`,
                            `Under 57kg: Over 53kg and Not exceeding 57kg`,
                            `Under 58kg: Over 54kg and Not exceeding 58kg`,
                            `Under 62kg: Over 57kg and Not exceeding 62kg`,
                            `Under 63kg: Over 58kg and Not exceeding 63kg`,
                            `Under 67kg: Over 62kg and Not exceeding 67kg`,
                            `Under 68kg: Over 63kg and Not exceeding 68kg`,
                            `Under 73kg: Over 67kg and Not exceeding 73kg`,
                            `Under 74kg: Over 68kg and Not exceeding 74kg`,
                            `Under 80kg: Over 74kg and Not exceeding 80kg`,
                            `Under 87kg: Over 80kg and Not exceeding 87kg`,
                            `Over 73kg: Over 73kg`,
                            `Over 87kg: Over 87kg`,
                        ],
                    }],
                    contact: [
                    {
                        name: 'Kuldeep singh Rathore',
                        number: '9530460215'
                    },
                    {
                        name: 'Shikhar mangla',
                        number: '8290313276'
                    },
                    ]
                },
                image: '../img/events/12.png',
            }
            ],
            ['Kho Kho',
            {
                info: {
                    rules: [],
                    contact: [],
                },
                image: '../img/events/13.png',
            }
            ],
            ['Kick Boxing',
            {
                info: {
                    rules: [],
                    contact: [],
                },
                image: '../img/events/14.png',
            }
            ],
            ['Five-a-side Football',
            {
                info: {
                    rules: [],
                    contact: [
                    {
                        name: 'Prasuk Jain',
                        number: '9413879676'
                    },
                    {
                        name: 'Ankit Chaplot',
                        number: '9461630602'
                    },
                    ]
                },
                image: '../img/events/15.png',
            }
            ],
            ['Chess',
            {
                info: {
                    rules: [
                    {
                        style: 'bold',
                        text: `Classical`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `A team consists of 4 players who actually play in tournament and 
                            one extra. All the team members must belong to the same Institute.`,
                            `The game is going to be played between 4 players from different teams.`,
                            `The format will be knockout tournament.`,
                            `Latest FIDE rules will be followed in the game.`,
                            `Separate tournaments for boys and girls.`,
                            `Matches will be of 1 hour 30 min (each player).`,
                            `Only one illegal move is allowed in a game of 1 hour and 30 mins.`,
                            `Blitz will be played if scores are same and 3 blitz games will be 
                            played between the teams.`,
                            `The arbiter's decision shall be final in case of any discrepancies.`,
                        ]
                    },
                    {
                        style: 'bold',
                        text: `Blitz(Tie breaker blitz)`,
                    },
                    {
                        style: 'normal',
                        text: [
                            `Illegal moves are not allowed (loss of first illegal move).`,
                            `Matches will be of 5 min (each player).`,
                            `The Arbiter's decision shall be final in case of any discrepancies.`,
                            `no illegal move allowed in blitz (tie breaker)`,
                        ]
                    },
                    ],
                    contact: [
                    {
                        name: 'Shubham Jain',
                        number: '7073528166'
                    },
                    {
                        name: 'Milind Adhaulya',
                        number: '9461289899'
                    },
                    {
                        name: 'Priya Saraf',
                        number: '8562038639'
                    },
                    ]
                },
                image: '../img/events/16.png',
            }
            ],
            ['LAN gaming',
            {   
                info: {
                    rules: [],
                    contact: [],
                },
                image: '../img/events/17.png',
            }
            ],
            ['Carrom',
            {
                info: {
                    rules: [
                    {
                        style: 'normal',
                        text: [
                            `Standard carrom rules apply.`,
                            `Best of five will be considered out of three singles and two 
                            doubles matches played between any two teams. An individual can 
                            participate in not more than one singles and one double match.`,
                            `Each team comprises of 4 players only.`,
                            `All the rounds before the finals will be knockout rounds.`,
                            `Any hand may be used in play. Participants can change hand during the game.`,
                            `In case of any conflict, decisions of the organising 
                            committee will be final and binding.`,
                        ]
                    }],
                    contact: [
                    {
                        name: 'Nishant Garg',
                        number: '8107791643'
                    },
                    ]
                },
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
            panel_data: data.info,
            name: sport
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

        // hack: insert invisible items so that the it scrolls all the way to the end
        let count = 0;
        while(count < 3) {
            display_sports.push(<Sport show={false} key={display_sports.length}/>);
            count++;
        }

        const styles = {
            main: {
                paddingTop: 94,
                backgroundColor: '#E0DEFF',
                backgroundSize: 'cover',
            },
            background: {
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                position: 'absolute',
                top: 0,
                left: 0,

            }
        };

        return(
            <div style={styles.main}>
                <div ref={(input) => this.scriptDiv = input} />
                <div className="include-deps">
                    <link rel="stylesheet" type="text/css" href="../css/events/normalize.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/demo.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/component.css" />
                    <link rel="stylesheet" type="text/css" href="../css/bootstrap/bootstrap.min.css" />
                    {this.state.panel_is_visible && <SportsDataPanel
                                                        data={this.state.panel_data}
                                                        name={this.state.name}
                                                        onModalCloseCB={this.onModalCloseCB}
                                                    />}
                    <ScrollHelper />
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
