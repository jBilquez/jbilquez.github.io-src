/* portfolio.jsx */

import React from 'react';
import AppDiv, { Background } from './appDiv.jsx';
import {Link} from 'react-router';

const Portfolio = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    view(picture) {
        //this.context.router.transitionTo('/view/' + picture);
    },

    render() {
        return (
            <div className='parallax-container' id='portfolio-page'>
                
                    <Background
                        style={{zIndex: 2}}
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/03_Cirque_Galerie_Parade_03.jpg'
                        viewable={true}
                    >
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    </Background>
                    <Background
                        style={{zIndex: 3}}
                        type='parallax'
                        fullscreen={false}
                        color='white'
                        
                        viewable={true}
                        
                    >
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    </Background>


                    <Background
                        style={{zIndex: 1}}
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/Chartres_BoisParis-Terrasse_03.jpg'
                        viewable={true}
                    >
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    </Background>
                    <Background
                        style={{zIndex: 2}}
                        type='parallax'
                        fullscreen={false}
                        color='white'
                        
                        viewable={true}
                        
                    >
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    </Background>

                    <Background
                        style={{zIndex: 1}}
                        type='parallax'
                        fullscreen={false}
                        image='img/portfolio/Toulouse_Clinique_Terrasse_02.jpg'
                        viewable={true}
                    >
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    </Background>
            
                    <Background
                        style={{zIndex: 2}}
                        type='parallax'
                        fullscreen={false}
                        color='white'
                        
                        viewable={true}
                        
                    >
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    </Background>

           </div>
        );
    },


    statics: {
        willTransitionFrom: function (transition, element) {

            //if (transition.path.indexOf('/view') > -1) {
            //} else {

                if (!$('#portfolio-page').hasClass('leaving')) {
                    $('#portfolio-page').addClass('leaving');
                    transition.abort();

                    let delayTransition = function () {
                        element.context.router.transitionTo(transition.path);
                    };

                    window.setTimeout(delayTransition, 200);

                }
            //}
        }
    }
});

export default Portfolio;
