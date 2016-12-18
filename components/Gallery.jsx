import React from 'react';

import res from '../utils/resolve';

class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        return(
            <div className="grid__item" data-size={data.dimensions}>
                <a style={{border: '2px solid white'}} href={data.image} className="img-wrap"><img src={data.image} alt={data.alt} />
                </a>
            </div>
        );
    }
}

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        const script_paths = [
            res('js/gallery/modernizr-custom.js'),
            res('js/events/imagesloaded.pkgd.min.js'),
            res('js/events/masonry.pkgd.min.js'),
            res('js/events/classie.js'),
            res('js/gallery/main.js')
        ];

        script_paths.forEach((script_path) => {
            const script = document.createElement("script");
            script.type  = 'text/javascript';
            script.src = script_path;
            this.scriptDiv.appendChild(script);
        });

        // for inline js
        const inline_js =
        `(function() {
            // create SVG circle overlay and append it to the preview element
            function createCircleOverlay(previewEl) {
                var dummy = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                dummy.setAttributeNS(null, 'version', '1.1');
                dummy.setAttributeNS(null, 'width', '100%');
                dummy.setAttributeNS(null, 'height', '100%');
                dummy.setAttributeNS(null, 'class', 'overlay');
                var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                circle.setAttributeNS(null, 'cx', 0);
                circle.setAttributeNS(null, 'cy', 0);
                circle.setAttributeNS(null, 'r', Math.sqrt(Math.pow(previewEl.offsetWidth,2) + Math.pow(previewEl.offsetHeight,2)));
                dummy.appendChild(g);
                g.appendChild(circle);
                previewEl.appendChild(dummy);
            }

            new GridFx(document.querySelector('.grid'), {
                onInit : function(instance) {
                    createCircleOverlay(instance.previewEl);
                },
                onResize : function(instance) {
                    instance.previewEl.querySelector('svg circle').setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
                },
                onOpenItem : function(instance, item) {
                    // item's image
                    var gridImg = item.querySelector('img'),
                        gridImgOffset = gridImg.getBoundingClientRect(),
                        win = {width: document.documentElement.clientWidth, height: window.innerHeight},
                        SVGCircleGroupEl = instance.previewEl.querySelector('svg > g'),
                        SVGCircleEl = SVGCircleGroupEl.querySelector('circle');

                    SVGCircleEl.setAttributeNS(null, 'r', Math.sqrt(Math.pow(instance.previewEl.offsetWidth,2) + Math.pow(instance.previewEl.offsetHeight,2)));
                    // set the transform for the SVG g node. This will animate the circle overlay. The origin of the circle depends on the position of the clicked item.
                    if( gridImgOffset.left + gridImg.offsetWidth/2 < win.width/2 ) {
                        SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(' + win.width + ', ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
                    }
                    else {
                        SVGCircleGroupEl.setAttributeNS(null, 'transform', 'translate(0, ' + (gridImgOffset.top + gridImg.offsetHeight/2 < win.height/2 ? win.height : 0) + ')');
                    }
                }
            });
        })();`;

        const inline_js_script = document.createElement("script");
        inline_js_script.type = 'text/javascript';
        inline_js_script.text = inline_js;

        let flag = false;
        let counter = 0;
        let isDefined = window.setInterval(() => {
            if(!(typeof GridFx === "undefined") && !(typeof Modernizr === "undefined") && !flag) {
                this.scriptDiv.appendChild(inline_js_script);
                flag = true;
            }
            counter += 100;
        }, 100);

        // automatically stop interval after 3 seconds
        window.setTimeout(() => {
            clearInterval(isDefined);
        }, 3000);
    }

    render() {

        const images_data = [
            {
                dimensions: '1280x853',
                image: res('img/gallery/thumbs/1.jpg'),
                alt: '01',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/3.jpg'),
                alt: '03',
            },
            {
                dimensions: '1280x961',
                image: res('img/gallery/thumbs/4.jpg'),
                alt: '04',
            },
            {
                dimensions: '1280x1131',
                image: res('img/gallery/thumbs/5.jpg'),
                alt: '05',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/6.jpg'),
                alt: '06',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/7.jpg'),
                alt: '07',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/9.jpg'),
                alt: '09',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/10.jpg'),
                alt: '10',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/11.jpg'),
                alt: '11',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/12.jpg'),
                alt: '12',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/13.jpg'),
                alt: '13',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/14.jpg'),
                alt: '14',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/15.jpg'),
                alt: '15',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/16.jpg'),
                alt: '16',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/17.jpg'),
                alt: '17',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/19.jpg'),
                alt: '19',
            },
            {
                dimensions: '1280x857',
                image: res('img/gallery/thumbs/20.jpg'),
                alt: '20',
            },
        ];

        const display_images = images_data.map((image, index) => {
                                    return <Image data={image} key={index}/>;
                                });

        const styles = {
            main: {
                paddingTop: 94,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundImage: `url(${res('img/gallery/image.jpg')})`,
            }
        };

        return(
            <div className="gallery-div" style={styles.main}>
                <div ref={(input) => this.scriptDiv = input} />
                <link rel="stylesheet" type="text/css" href={res('css/gallery/normalize.css')}/>
                <link rel="stylesheet" type="text/css" href={res('css/gallery/demo.css')}/>
                <link rel="stylesheet" type="text/css" href={res('css/gallery/style.css')}/>
                <link rel="stylesheet" type="text/css" href={res('css/gallery/font-awesome.css')} />
                <div className="container">
                    <div className="content">
                    <div className="grid">
                        {display_images}
                    </div>
                    <div className="preview">
                        <button className="action action--close"><i className="fa fa-times"></i><span className="text-hidden">Close</span></button>
                        <div className="description description--preview"></div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gallery;
