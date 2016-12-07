import React from 'react';

import Navbar from './Navbar';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{border: '1px solid black'}} >
            {!(this.props.children.type.name === 'RadiumEnhancer') && <Navbar />}
            <div style={{height: '100vh'}}>
                {this.props.children}
            </div>
            </div>
        );
    }
}

export default Root;
