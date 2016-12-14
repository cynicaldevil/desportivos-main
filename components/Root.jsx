import React from 'react';
import { StyleRoot } from 'radium';

import Navbar from './Navbar';
import Home from './Home';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let isChildHome;
        React.Children.forEach(this.props.children, (child) => {
            isChildHome = (child.type === Home);
        });
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
