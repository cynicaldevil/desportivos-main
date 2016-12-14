import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{paddingTop: 94, height: '100vh', overflow: 'hidden'}}>
                <iframe id="typeform-full" width="100%" height="100%" frameBorder="0" src="https://dikshantrathi.typeform.com/to/bXIe3W"></iframe>
                <script type="text/javascript" src="https://s3-eu-west-1.amazonaws.com/share.typeform.com/embed.js"></script>
            </div>
        );
    }
}

export default Register;
