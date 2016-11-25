import React from 'react';

import Navbar from './Navbar';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{border: '1px solid black'}} >
            <Navbar />
            <div style={{marginTop: 94}}>
                {this.props.children}
            </div>
            </div>
        );
    }
}

export default Root;
