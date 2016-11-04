import React from 'react';
import Radium from 'radium';
import { Button } from 'react-bootstrap';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            color: '#000',
            ':hover': {
                backgroundColor: '#0074d9'
            }
        };
        return(
            <div>
                <p style={{color: 'blue'}} >Hello World!</p>
                <button style={styles}>Button</button>
                <Button bsStyle="primary">Primary</Button>
            </div>
        );
    }
}

module.exports = Radium(Root);
