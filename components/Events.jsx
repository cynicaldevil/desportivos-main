import React from 'react';
import Radium from 'radium';

@Radium
class Sport extends React.Component {
    constructor(props) {
        super(props) ;
    }

    render() {

        const styles = {
            main: {
                ':hover': {
                    border: '2px solid #D8D8D8'
                }
            }
        };
        const data = this.props.data;
        return (
            <li className="grid__item" style={styles.main}>
                <div className="grid__link">
                    <img className="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                    <img className="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                    <img className="grid__img layer" src={data.image} alt="01" />
                    <span className="grid__title">{data.title}</span>
                </div>
            </li>
        );
    }
}

class SportsDataPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{position: 'fixed'}}>
                <p>{this.props.data}</p>
            </div>
        );
    }
}

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.sports_data = new Map([
            ["badminton",
            {
                rules: "two or four player games",
                image: '../img/events/Dribbble1/football.png',
            }
            ],
            ["cricket",
            {
                rules: "eleven players",
                image: '../img/events/Dribbble1/2_1.jpg',
            }
            ],
            ["tennis",
            {
                rules: "two or four player games",
                image: '../img/events/Dribbble1/3.jpg',
            }
            ],
            ["basketball",
            {
                rules: "seven player games",
                image: '../img/events/Dribbble1/4_2.jpg',
            }
            ],
            ["football",
            {
                rules: "eleven player games",
                image: '../img/events/Dribbble1/1_1.jpg',
            }
            ],
            ["volleyball",
            {
                rules: "seven player games",
                image: '../img/events/Dribbble1/2.jpg',
            }
            ]
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
                            classie.add(document.body, 'grid-loaded');
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

    render() {

        const display_sports = [...this.sports_data].map((sport_, index) => {
            const sport = {
                name: sport_[0],
                image: sport_[1].image
            };
            return <Sport data={sport} key={index} />;
        });

        return(
            <div>
                <div ref={(input) => this.scriptDiv = input} />
                <p>Events</p>
                <div className="include-deps">
                    <link rel="stylesheet" type="text/css" href="../css/events/normalize.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/demo.css" />
                    <link rel="stylesheet" type="text/css" href="../css/events/component.css" />
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
