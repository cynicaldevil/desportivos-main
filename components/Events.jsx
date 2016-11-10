import React from 'react';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    createMarkup = () => {
      let html_str = `
        <div class="include-deps">
            <link rel="stylesheet" type="text/css" href="../css/events/normalize.css" />
            <link rel="stylesheet" type="text/css" href="../css/events/demo.css" />
            <link rel="stylesheet" type="text/css" href="../css/events/component.css" />
            <script src="../js/events/modernizr.custom.js"></script>
            <div class="isolayer isolayer--scroll1 isolayer--shadow">
                <ul class="grid grid--effect-flip">
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1.jpg" alt="01" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/JulienLavallee">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/2_1.jpg" alt="021" />
                            <span class="grid__title">Julien Lavallee</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/creativemints">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/3.jpg" alt="03" />
                            <span class="grid__title">Mike | Creative Mints</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/Radium">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/4_2.jpg" alt="042" />
                            <span class="grid__title">Cosmin Capitanu</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1_1.jpg" alt="011" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/JulienLavallee">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/2.jpg" alt="02" />
                            <span class="grid__title">Julien Lavallee</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/creativemints">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/3_1.jpg" alt="031" />
                            <span class="grid__title">Mike | Creative Mints</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/Radium">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/4.jpg" alt="04" />
                            <span class="grid__title">Cosmin Capitanu</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1_2.jpg" alt="012" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/JulienLavallee">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/2_2.jpg" alt="022" />
                            <span class="grid__title">Julien Lavallee</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/creativemints">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/3_2.jpg" alt="032" />
                            <span class="grid__title">Mike | Creative Mints</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1_3.jpg" alt="013" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/Radium">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/4_1.jpg" alt="041" />
                            <span class="grid__title">Cosmin Capitanu</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1.jpg" alt="01" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/JulienLavallee">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/2_1.jpg" alt="021" />
                            <span class="grid__title">Julien Lavallee</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/creativemints">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/3.jpg" alt="03" />
                            <span class="grid__title">Mike | Creative Mints</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/Radium">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/4_2.jpg" alt="042" />
                            <span class="grid__title">Cosmin Capitanu</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1_1.jpg" alt="011" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/JulienLavallee">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/2.jpg" alt="02" />
                            <span class="grid__title">Julien Lavallee</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/creativemints">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/3_1.jpg" alt="031" />
                            <span class="grid__title">Mike | Creative Mints</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/Radium">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/4.jpg" alt="04" />
                            <span class="grid__title">Cosmin Capitanu</span>
                        </a>
                    </li>
                    <li class="grid__item">
                        <a class="grid__link" href="https://dribbble.com/forefathers">
                            <img class="grid__img layer" src="../img/events/canvas.png" alt="Canvas Dummy" />
                            <img class="grid__img layer" src="../img/events/wireframe.png" alt="Wireframe Dummy" />
                            <img class="grid__img layer" src="../img/events/Dribbble1/1_2.jpg" alt="012" />
                            <span class="grid__title">Forefathers</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `;
        return html_str;
    }

    componentDidMount() {

        // IMP TODO: Fix effect on hover to show canvas and wireframe images

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
        return(
            <div>
                <div ref={(input) => this.scriptDiv = input} />
                <p>Events</p>
                <div dangerouslySetInnerHTML={{__html: this.createMarkup()}} />
            </div>
        );
    }
}

export default Events;
