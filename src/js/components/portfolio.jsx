/* portfolio.jsx */

import React from 'react';
import AppDiv, { Background } from './appDiv.jsx';

const Portfolio = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
        return (
            <AppDiv id='portfolio-page'>
                <AppDiv>
                    <Background
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/03_Cirque_Galerie_Parade_03.jpg'
                        data-img-width='3600'
                        data-img-height='2025'
                        data-diff='100'
                    >
                        <div className='content-a'><div className='content-b'>regular background</div></div>
                    </Background>
                    <Background
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/CACF_Cam_03_Amphi_06.jpg'
                        data-img-width='4000'
                        data-img-height='1715'
                        data-diff='100'
                    />
                </AppDiv>
                <AppDiv>
                    <Background
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/Chartres_BoisParis-Terrasse_03.jpg'
                        data-img-width='4400'
                        data-img-height='2200'
                        data-diff='100'
                    >
                        <div className='content-a'><div className='content-b'>regular background</div></div>
                    </Background>
                    <Background
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/Coyolles_Vue_entree_02.jpg'
                        data-img-width='4000'
                        data-img-height='2000'
                        data-diff='100'
                    />
                </AppDiv>
                <AppDiv>
                    <Background
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/Piscine_Arcs1800_Cam_Nord_05.jpg'
                        data-img-width='3840'
                        data-img-height='2160'
                        data-diff='100'
                    >
                        <div className='content-a'><div className='content-b'>regular background</div></div>
                    </Background>
                    <Background
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/Toulouse_Clinique_Terrasse_02.jpg'
                        data-img-width='4000'
                        data-img-height='2000'
                        data-diff='100'
                    />
                </AppDiv>
           </AppDiv>
        );
    },


    statics: {
        willTransitionFrom: function (transition, element) {
            if (!$('#portfolio-page').hasClass('leaving')) {
                $('#portfolio-page').addClass('leaving');
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
