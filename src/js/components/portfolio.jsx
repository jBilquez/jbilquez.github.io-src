/* portfolio.jsx */

import React from 'react';
import AppDiv, { Background } from './appDiv.jsx';

const Portfolio = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
        return (
            <AppDiv id='home-page'>
                <AppDiv><Background
                    type='parallax'
                    fullscreen={false}
                    image='http://www.minimit.com/images/picjumbo.com_IMG_6648.jpg'
                    data-img-width='1600'
                    data-img-height='1024'
                    data-diff='100'
                >
                    <div className='content-a'><div className='content-b'>regular background</div></div>
                </Background>
                <Background
                    type='fixed'
                    color='#ccc'
                    fullscreen={false}
                /></AppDiv>
                <AppDiv
                    className='background parallax'
                    style={{backgroundImage: 'url(http://www.minimit.com/images/picjumbo.com_IMG_6648.jpg)'}}
                    data-img-width='1600'
                    data-img-height='1024'
                    data-diff="100"
                >
                    <div className='content-a'><div className='content-b'><h2>Portfolio</h2></div></div>
                </AppDiv>
                <AppDiv>
                    <AppDiv
                        className='not-fullscreen'
                        style={{backgroundColor: '#ccc'}}
                    >
                        <div className='content-a'><div className='content-b'><h2>This is a portfolio</h2></div></div>
                    </AppDiv>
                    <AppDiv
                        className='not-fullscreen background background-fixed'
                        style={{backgroundImage: 'url(http://www.minimit.com/images/picjumbo.com_IMG_6643.jpg)'}}
                        data-img-width='1600'
                        data-img-height='1024'
                    >
                        <div className='content-a'><div className='content-b'><h2>Welcom here :)</h2></div></div>
                    </AppDiv>
                </AppDiv>
           </AppDiv>
        );
    },


    statics: {
        willTransitionFrom: function (transition, element) {
            if (!$('#home-page').hasClass('leaving')) {
                $('#home-page').addClass('leaving');
                transition.abort();

                let delayTransition = function () {
                    element.context.router.transitionTo(transition.path);
                };

                window.setTimeout(delayTransition, 200);
                
            }
        }
    }
});

export default Portfolio;
