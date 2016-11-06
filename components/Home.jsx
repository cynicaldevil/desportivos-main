import React from 'react';
import Radium from 'radium';
import { Button } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            hexagon_wrapper: {
                textAlign: 'center',
                margin: 20,
                height: 100,
                width: 100,
                position: 'relative',
                display: 'inline-block',
                transform: 'rotateZ(90deg)'
            },
            hexagon: {
                height: '100%',
                width: (100 * 0.57735) + '%',
                display: 'inline-block',
                backgroundColor: '#556474',
            },
            hexagon_before: {
                position: 'absolute',
                top: 0,
                right: (100 / 2) - ((100 * 0.57735) / 2) + '%',
                backgroundColor: '#556474',
                height: 'inherit',
                width: (100 * 0.57735) + '%',
                content: '',
                transform: 'rotateZ(60deg)'
            },
            hexagon_after: {
                position: 'absolute',
                top: 0,
                right: (100 / 2) - ((100 * 0.57735) / 2) + '%',
                backgroundColor: '#556474',
                height: 'inherit',
                width: (100 * 0.57735) + '%',
                content: '',
                transform: 'rotateZ(-60deg)'
            }
        };
        return (
            <div style={{backgroundColor: '#ecf0f1'}}>
                <div style={styles.hexagon_wrapper} >
                    <div style={styles.hexagon_before} />
                    <div style={styles.hexagon} ></div>
                    <div style={styles.hexagon_after} />
                </div>
            </div>
        );
  }
}

export default Radium(Home);
