import React from 'react';
import Radium from 'radium';

import res from '../utils/resolve';

require('../css/fonts.css');

@Radium
class About extends React.Component {
    render() {
        const styles = {
            main: {
                '@media only screen and (min-width: 851px)': {
                    paddingTop: 94 + 100,
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#020A3B',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundImage: `url("https://img1.etsystatic.com/019/0/5706242/il_fullxfull.480882613_4wml.jpg")`,
            },
            background: {
                position: 'absolute',
                top: 0, left: 0,
                zIndex: -1,
                height: '100%',
                width: '100%',
            },
            header: {
                fontFamily: `'Montserrat', sans-serif`,
                paddingTop: 15,
                textTransform: 'uppercase',
                fontSize: 35,
                display: '',
                '@media only screen and (max-width: 420px)': {
                    fontSize: 25,
                },
                '@media only screen and (min-width: 850px)': {
                    marginBottom: 50,
                },
            },
            topDiv: {
                marginTop: 30,
                marginBottom: 100,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                backgroundColor: 'rgba(207, 255, 238, 0.4)',
                paddingBottom: 50
            },
            text: {
                fontFamily: `'Lato', sans-serif`,
                fontSize: 20,
                marginLeft: 80,
                marginRight: 80,
                '@media only screen and (max-width: 490px)': {
                    marginLeft: 30,
                    marginRight: 30,
                },
            }
        };
        return(
            <div style={styles.main}>
                <div style={styles.topDiv}>
                    <h1 style={styles.header}>About Desportivos</h1>
                    <p style={styles.text}>
                        {`Desportivos, the largest sports meet of Rajasthan, is an international arena
                         for students from across the country and abroad to showcase their talents and
                         facilitate cross-cultural learning experiences. The fest aims its students to
                         appreciate the unity and diversity that our culture offers and develop a
                         spirit for sports.
                         Desportivos’17 will span over a period of three days that would see a
                         multitude of academic and technical students remodel into sports fanatics.
                         Enthusiasm and sportsman spirit are the key elements that make Desportivos
                         an enthralling experience.`}
                    </p>
                </div>
                <img src={res('img/about/mascot.png')} alt='mascot' />
                <div style={styles.topDiv}>
                    <h1 style={styles.header}>Meet Vector!</h1>
                    <p style={styles.text}>
                        {`Vector, the mascot of Desportivos’17, is the most visible face of Desportivos.
                        His name comes from the qualities that a sportsperson must possess i.e. – direction
                        as well as magnitude. Vector is an achiever with a positive attitude and is a fierce
                        competitor, but also possesses integrity and honesty.`}
                    </p>
                </div>
                <div style={{width: '100%', height: 20}}/>
            </div>
        )
    }
}

class AboutContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <About />
            </div>
        );
    }
}

export default AboutContainer;
