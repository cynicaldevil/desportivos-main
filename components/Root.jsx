import React from 'react';

import Navbar from './Navbar';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {!(this.props.children.type.name === 'HomeContainer') && <Navbar />}
                <div style={{height: '100%'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Root;
