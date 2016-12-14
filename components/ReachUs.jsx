import React from 'react';

require('../css/fonts.css');

class ReachUs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const iframe = `<iframe style="position:relative;z-index:999;"
                                width="900"
                                height="400"
                                src="https://maps.google.com/maps?q=rupa ki nangal, lnmiit, jaipur&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0">
                            <a class="google-map-code"
                                href="http://www.map-embed.com/de/"
                                id="get-map-data">
                                    map-embed.com
                            </a>
                            <style>
                                #gmap_canvas img{
                                    max-width:none!important;
                                    background:none!important
                                }
                            </style>
                        </iframe>
                        `;

        const styles = {
            main: {
                paddingTop: 94,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#D9FEA5',
                height: '100vh',
            },
            heading: {
                color: '#415C1D',
                fontFamily: `'Oswald', sans-serif`,
                textTransform: 'uppercase',
                fontSize: 40,
            }
        };
        return(
            <div style={styles.main}>
                <h1 style={styles.heading}>Reach Us:</h1>
                <div dangerouslySetInnerHTML={{__html: iframe}} />
            </div>
        );
    }
}

export default ReachUs;
