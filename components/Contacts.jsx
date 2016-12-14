import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const styles = {
            main: {
                height: 250,
            },
            description: {
                fontSize: 11,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            fb: {
                marginRight: 10,
                marginLeft: 10,
                    width: 20,
                    height: 20,
            },
        };
        const data = this.props.data;
        return (
            <div style={{width: 280, margin: 10}}>
                <p>{!(typeof data.position === 'undefined') && data.position}</p>
                <figure style={styles.main} className="effect-zoe">
                    <img src={data.image} alt="img"/>
                    <figcaption style={styles.description}>
                        <h2>{data.name}</h2>
                        <p className="icon-links">
                            <a href="#"><img style={styles.fb} src='../img/navbar/Facebook.png' alt='yt'/></a>
                        </p>
                        <p className="description">{data.number}</p>
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
        const contacts = new Map(
            [['_main',
                [
                {
                    image: '../img/contacts/Shubham Vashisth Y14 - General Secretary, Sports.jpg',
                    name: 'Shubham Vashisth',
                    number: '+91 70731 02810',
                    fb_link: 'https://www.facebook.com/shubham.v.12',
                    position: 'General Secretary',
                },
                {
                    image: '../img/contacts/sameeksha gupta_Associate Gen. Secretary Y14.jpg',
                    name: 'Sameeksha Gupta',
                    fb_link: 'https://www.facebook.com/sameeksha.gupta2',
                    position: 'Associate Gen. Sec.',
                },
                ]
            ],
            ['mentors',
                [
                {
                    image: '../img/contacts/devashish mahubani_Mentor Y13.jpg',
                    name: 'Devashish Mahbubani',
                    fb_link: 'https://www.facebook.com/devashishmahbubani',
                },
                {
                    image: '../img/contacts/kushal mishra_Mentor Y13.jpg',
                    name: 'Kushal Mishra',
                    fb_link: 'https://www.facebook.com/kushal.mishra.7505',
                },
                {
                    image: '../img/contacts/medha_Mentor Y13.jpg',
                    name: 'Medha Katehara',
                    fb_link: 'https://www.facebook.com/Medha.Katehara',
                },
                ]
            ],
            ['_core',
                [
                {
                    image: '../img/contacts/shuham chaurasia_Event Coordinator Y15.jpg',
                    name: 'Shubham Chaurasia',
                    fb_link: 'https://www.facebook.com/shubham.chaurasia.716',
                    position: 'Event Coordinator',
                },
                {
                    image: '../img/contacts/Vinod Sharma_Operation Head Y14.jpg',
                    name: 'Veenu Sharma',
                    fb_link: 'https://www.facebook.com/vinodkototya',
                    position: 'Operations Head'
                },
                {
                    image: '../img/contacts/shivam garg_Public relations head Y14.jpg',
                    name: 'Shivam Garg',
                    number: '+91 95301 00408',
                    fb_link: 'https://www.facebook.com/shivam.garg.14811?',
                    position: 'Public Relations Head'
                },
                {
                    image: '../img/contacts/26.jpg',
                    name: 'Nikhil Shagrithaya',
                    number: '+91 99309 29954',
                    fb_link: 'https://www.facebook.com/nikhil.shagrithaya.7',
                    github_link: 'https://github.com/cynicaldevil',
                    position: 'Tech Lead'
                },
                {
                    image: '../img/contacts/rohanbhati2_sposnorship head Y14.jpg',
                    name: 'Rohan Bhatti',
                    fb_link: 'https://www.facebook.com/rohan4b',
                    position: 'Sponsorship Head'
                },
                {
                    image: '../img/contacts/Arpit Agarwal_finance Head Y14.jpg',
                    name: 'Arpit Agarwal',
                    number: '+91 80032 33928',
                    fb_link: 'https://www.facebook.com/agrawalarpit96',
                    position: 'Finance Head'
                },
                {
                    image: '../img/contacts/ankit chaplot_Online Promotion head Y14.jpg',
                    name: 'Ankit Chaplot',
                    fb_link: 'https://www.facebook.com/chappy4ankit',
                    position: 'Online Promotion Head'
                },
                {
                    image: '../img/contacts/arjun gupta_Event Coordinator Y15.jpg',
                    name: 'Arjun Gupta',
                    fb_link: 'https://www.facebook.com/arjun3023',
                    position: 'Event Coordinator'
                },
                {
                    image: '../img/contacts/Yashovardhan Agrawal_Technical Support Team Y16.jpg',
                    name: 'Yashovardhan Agrawal',
                    fb_link: 'https://www.facebook.com/yashovardhanagrawal',
                    position: 'Tech Team - Support'
                },
                ]
            ],
            ['Public Relations',
                [
                {
                    image: '../img/contacts/mukul goyal_Public relations Y15.jpg',
                    name: 'Mukul Goyal',
                    fb_link: 'https://www.facebook.com/me.mukul.05',
                },
                {
                    image: '../img/contacts/parth goyal_Public relations Y15.jpg',
                    name: 'Parth Goyal',
                    fb_link: 'https://www.facebook.com/parth.goyal.182',
                },
                {
                    image: '../img/contacts/rishabh sharma_Public relations Y15.jpg',
                    name: 'Rishabh Sharma',
                    fb_link: 'https://www.facebook.com/rishabh.brunomars',
                },
                ]
            ],
            ['Sponsorship',
                [
                {
                    image: '../img/contacts/achint sharma_sponsorship Y15.jpg',
                    name: 'Achint Sharma',
                    fb_link: 'https://www.facebook.com/yoyoachint007',
                },
                {
                    image: '../img/contacts/akash bhaudalia_sponsorship Y15.jpg',
                    name: 'Akash Budhaulia',
                    fb_link: 'https://www.facebook.com/akash.budhaulia.9',
                },
                {
                    image: '../img/contacts/mehul sharma_sponsorship Y15.jpg',
                    name: 'Mehul Sharma',
                    fb_link: 'https://www.facebook.com/mehulsharma09',
                },
                {
                    image: '../img/contacts/siddharth garg_Sposnsorship Y15.jpg',
                    name: 'Siddharth Garg',
                    fb_link: 'https://www.facebook.com/siddharth.garg.509',
                },
                {
                    image: '../img/contacts/Nikhil Lalchandani Y15 - Sponsorship.jpg',
                    name: 'Nikhil Lalchandani',
                    fb_link: 'https://www.facebook.com/nikhil.lalchandani.7',
                },
                ]
            ],
            ['Creative Think Tank',
                [
                {
                    image: '../img/contacts/Anjali Mudgal Y15 - Creative Think Tank Y15.jpg',
                    name: 'Anjali Mudgal',
                    fb_link: 'https://www.facebook.com/anjali.mudgal.73',
                },
                {
                    image: '../img/contacts/dikshant rathi_Creative Think Tank Y14.jpg',
                    name: 'Dikshant Rathi',
                    fb_link: 'https://www.facebook.com/rathi.dikshant',
                },
                {
                    image: '../img/contacts/Chirag Agrawal Y15 - Creative Think Tank.jpg',
                    name: 'Chirag Agrawal',
                    fb_link: 'https://www.facebook.com/chirag.agrawal.397',
                },
                {
                    image: '../img/contacts/shikhar mangla_Creative Think Tank Y14.jpg',
                    name: 'Shikhar Mangla',
                    fb_link: 'https://www.facebook.com/GudduFML',
                },
                ]
            ],
            ['Online Promotion',
                [
                {
                    image: '../img/contacts/Harshit Jindal Y15 - Online Promotion.jpg',
                    name: 'Harshit Jindal',
                    fb_link: 'https://www.facebook.com/harshit.jindal.75',
                },
                {
                    image: '../img/contacts/Milind Adhaulya Y15 - Online Promotion.jpg',
                    name: 'Milind Adhaulya',
                    fb_link: 'https://www.facebook.com/profile.php?id=100010426660939',
                },
                {
                    image: '../img/contacts/Parth Parashar Y15 - Online Promotion.jpg',
                    name: 'Parth Parashar',
                    fb_link: 'https://www.facebook.com/parth.parashar.5',
                },
                {
                    image: '../img/contacts/Shubham Jain Y15 - Online Promotion.jpg',
                    name: 'Shubham Jain',
                    fb_link: 'https://www.facebook.com/shubham.jain.52831666',
                },
                {
                    image: '../img/contacts/Shreya Rajput Y15 - Online Promotion.jpg',
                    name: 'Shreya Rajput',
                    fb_link: 'https://www.facebook.com/shreya.rajput.568294',
                },
                ]
            ],
            ['Operations',
                [
                {
                    image: '../img/contacts/Himanshu Purohit Y15 - Operations.jpg',
                    name: 'Himanshu Purohit',
                    fb_link: 'https://www.facebook.com/himanshu.purohit.5872',
                },
                {
                    image: '../img/contacts/Ayush Rastogi Y14 - Operations.jpg',
                    name: 'Ayush Rastogi',
                    fb_link: 'https://www.facebook.com/ayush.rastogi.140',
                },
                {
                    image: '../img/contacts/Rajat Chandiwala Y15 - Operations.jpg',
                    name: 'Rajat Chandiwala',
                    fb_link: 'https://www.facebook.com/rajat.chandiwala',
                },
                {
                    image: '../img/contacts/Ayushi Gupta Y14 - Operations.jpg',
                    name: 'Ayushi Gupta',
                    fb_link: 'https://www.facebook.com/ayushi.gupt',
                },
                {
                    image: '../img/contacts/Prateek Patodi_Operations Y14.jpg',
                    name: 'Prateek Patodi',
                    fb_link: 'https://www.facebook.com/prateek.patodi.14',
                },
                {
                    image: '../img/contacts/Prateek Agrawal Y14 - Operations Y14.jpg',
                    name: 'Prateek Agrawal',
                    fb_link: 'https://www.facebook.com/prateek.agrawal.568',
                },
                ]
            ],
            ]);

            const display_contacts = [...contacts].map((contact_type, index) => {
                const styles = {
                    group: {
                        border: '1px solid white',
                        display: 'flex',
                        height: 'auto',
                        flexWrap: 'wrap'
                    }
                };
                return <div key={index}>
                        <p>{contact_type[0]}</p>
                        <div style={styles.group}>
                        {contact_type[1].map((contact, index) => {
                            return <Contact key={index} data={contact} />;
                        })}
                        </div>
                        </div>;
            });
        return(
            <div className="contactsGrid" style={{paddingTop: 94}}>
                <link rel="stylesheet" type="text/css" href="../css/contacts/contacts.css" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                {display_contacts}
            </div>
        );
    }
}

export default Contacts;
