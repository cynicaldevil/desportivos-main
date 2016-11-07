import React from 'react';
import Radium from 'radium';
import { Button } from 'react-bootstrap';

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
                transform: 'rotateZ(90deg)'
            },
            hexagon_before: {
                position: 'absolute',
                top: 0,
                right: (100 / 2) - ((100 * 0.57735) / 2) + '%',
                backgroundColor: '#556474',
                height: 'inherit',
                width: (100 * 0.57735) + '%',
                content: '',
                transform: 'rotateZ(30deg)'
            },
            hexagon_after: {
                position: 'absolute',
                top: 0,
                right: (100 / 2) - ((100 * 0.57735) / 2) + '%',
                backgroundColor: '#556474',
                height: 'inherit',
                width: (100 * 0.57735) + '%',
                content: '',
                transform: 'rotateZ(-30deg)'
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
            <div style={constructedStyles.hexagon_wrapper} >
                <div style={constructedStyles.hexagon_before} />
                <div style={constructedStyles.hexagon} ></div>
                <div style={constructedStyles.hexagon_after} />
            </div>
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

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            row: {
                height: 120,
                display: 'flex',
                alignItems: 'center'
            },
        };
        return (
            <div style={{backgroundColor: '#ecf0f1'}}>
                <div style={styles.row}>
                    <Hexagon />
                    <Hexagon />
                </div>
                <div style={styles.row}>
                    <Hexagon customStyles={{hexagon_wrapper: {
                        marginTop: -58,
                        marginLeft: 54
                    }}} />
                </div>
            </div>
        );
  }
}

export default Radium(Home);
