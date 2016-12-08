import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contactsGrid">
                <figure className="effect-zoe">
                    <img src="../img/contacts/26.jpg" alt="img26"/>
                    <figcaption>
                        <h2>Creative <span>Zoe</span></h2>
                        <p className="icon-links">
                            <a href="#"><i className="material-icons">accessible</i></a>
                            <a href="#"><i className="material-icons">all_out</i></a>
                            <a href="#"><i className="material-icons">autorenew</i></a>
                        </p>
                        <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{paddingTop: 94}}>
                <link rel="stylesheet" type="text/css" href="../css/contacts/contacts.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <Contact />
            </div>
        );
    }
}

export default Contacts;
