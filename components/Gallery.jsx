import React from 'react';

require('../css/gallery/normalize.css');
require('../css/gallery/demo.css');
require('../css/gallery/style.css');

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

    componentDidMount() {

        const script_paths = [
            '../js/gallery/modernizr-custom.js',
            '../js/events/imagesloaded.pkgd.min.js',
            '../js/events/masonry.pkgd.min.js',
            '../js/events/classie.js',
            '../js/gallery/main.js'
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
        return(
            <div>
                <p>Gallery</p>
            </div>
        );
    }
}

export default Gallery;
