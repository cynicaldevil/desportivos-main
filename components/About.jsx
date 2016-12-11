import React from 'react';
import Radium from 'radium';

require('../css/fonts.css');

@Radium
class About extends React.Component {
    render() {
        const styles = {
            main: {
                paddingTop: 94 + 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url("http://img05.deviantart.net/055b/i/2008/116/d/8/tennis_court__s_lines___racket_by_lips16.jpg")`
            },
            header: {
                fontFamily: `'Montserrat', sans-serif`,
                textTransform: 'uppercase',
            },
            text: {
                fontFamily: `'Lato', sans-serif`,
                '@media only screen and (min-width: 1025px)': {
                    width: '80%',
                    lineHeight: '20px'
                },
                '@media only screen and (min-width: 641px) and (max-width: 1024px)': {
                    width: '50%'
                }
            }
        };
        return(
            <div style={styles.main}>
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
