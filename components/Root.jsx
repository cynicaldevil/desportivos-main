import React from 'react';
import { StyleRoot } from 'radium';

import Navbar from './Navbar';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const isChildHome = this.props.children.type.name === 'HomeContainer';
        return(
            <StyleRoot>
            <div>
                <Navbar showNavbar={!isChildHome}/>
                <div style={{}}>
                    {this.props.children}
                </div>
            </div>
            </StyleRoot>
        );
    }
}

export default Root;
