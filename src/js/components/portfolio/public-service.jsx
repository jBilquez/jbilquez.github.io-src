/* portfolio/public-service.jsx */

import React from 'react';
import Background from '../background.jsx';
import {Link} from 'react-router';

const PortfolioPublicService = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    scrollDown(destination) {
        window.setTimeout(
            function() {
                $('#' + destination).velocity("scroll", {duration: 600, easing: "ease", container: $("#portfolio-page")});
            },
            100
        );
    },

    render() {
        return (
            <div className='parallax-container' id='portfolio-page'>
                <Background
                    style={{zIndex: 3}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/wip/projet_01.jpg'
                    viewable={true}>
    
                    <div className='portfolio-content'>
                    
                        <h2>Services publiques</h2>
                        <h3>Non, public services! :o</h3>

                        <p>
                            Age of Empires is a series of personal 
                            computer games developed by Ensemble Studios 
                            and published by Microsoft Studios.
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'picture1')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='picture1'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/03_Cirque_Galerie_Parade_03.jpg'
                    viewable={true}>

                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'chapter2')}>
                            &#8595; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>

                </Background>
                    
                <Background
                    id='chapter2'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/wip/projet_02.jpg'
                    viewable={true}>
                            
                    <div className='portfolio-content right top'>
                    
                        <h2>Wololo</h2>

                        <p>
                            Age of Empires is a series of personal 
                            computer games developed by Ensemble Studios.
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'picture2')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                            
                </Background>

                <Background
                    id='picture2'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/Chartres_BoisParis-Terrasse_03.jpg'
                    viewable={true}>
                            
                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'chapter3')}>
                            &#8595; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                            
                </Background>

                <Background
                    id='chapter3'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/wip/projet_03.jpg'
                    viewable={true}>

                    <div className='portfolio-content top'>
                    
                        <h2>Wololo</h2>

                        <p>
                            Age of Empires is a series of personal 
                            computer games developed by Ensemble Studios.
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'picture3')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>

                </Background>

                <Background
                    id='picture3'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/Toulouse_Clinique_Terrasse_02.jpg'
                    viewable={true}>
            
                </Background>
        
                <Background
                    style={{zIndex: 2, height: '50vh',opacity:0, boxShadow:'none'}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    viewable={true}>

                </Background>

           </div>
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

export default PortfolioPublicService;
