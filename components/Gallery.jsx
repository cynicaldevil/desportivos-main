import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        return(
            <div className="grid__item" data-size={data.dimensions}>
                <a href={data.image} className="img-wrap"><img src={data.thumb} alt={data.alt} />
                    <div className="description description--grid">Felicity</div>
                </a>
            </div>
        );
    }
}

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <p>Gallery</p>
            </div>
        );
    }
}

export default Gallery;
