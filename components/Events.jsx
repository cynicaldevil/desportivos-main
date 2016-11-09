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
    render() {
        return(
            <div>
                <p>Events</p>
                <div dangerouslySetInnerHTML={{__html: this.createMarkup()}} />
            </div>
        );
    }
}

export default Events;
