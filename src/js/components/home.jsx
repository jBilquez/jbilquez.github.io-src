/* home.jsx */

import React from 'react';
import AppDiv, {Background} from './appDiv.jsx';
import {Link} from 'react-router';

const Home = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    scrollDown() {
        window.setTimeout(
            function() {
                $('#intro').velocity("scroll", {duration: 600, easing: "ease", container: $("#home-page")});
            },
            100
        );
    },

    render() {
        return (
            <div className='parallax-container' id='home-page'>
                <Background
                    type='parallax'
                    image='img/Accueil01.jpg'
                >
                    
                    <h2>Jérôme Bilquez</h2>
                    <h3>Portfolio</h3>
                    
                    <div className='footer'>
                        <a 
                            className='button'
                            onClick={this.scrollDown}
                        >&#8595; &nbsp; &nbsp; Découvrir qui je suis &nbsp; &nbsp; &#8595;</a>
                    </div>

                    

                </Background>
                
                <Background
                    id='intro'
                    type='parallax'
                    color='white'>
                            
                    <h2>Jérôme Bilquez</h2>
                    <h3>Graphiste 3D en architecture</h3>
                    <p>
                        Je suis Jérôme Bilquez, graphiste 3D, spécialisé
                        dans les images de synthèses et
                        illustrations architecturales.

                        Ma mission est de vous accompagner dans la 
                        mise en image de vos projets à l'aide de visuels
                        flatteurs et de hautes qualités.
                    </p>

                    <div className='footer'>
                        <Link 
                            className='button'
                            to="/portfolio"
                        >Voir mon Portfolio</Link>
                    </div>
            
                </Background>
            </div>
        );
    },

/*
 * 

                <div id='intro'>
                    <div className='content-a'><div className='content-b'>
                        <h2>Jérôme Bilquez</h2>
                        <h3>Graphiste 3D en architecture</h3>
                        <p>
                            Je suis Jérôme Bilquez, graphiste 3D, spécialisé
                            dans les images de synthèses et
                            illustrations architecturales.
                        
                            Ma mission est de vous accompagner dans la 
                            mise en image de vos projets à l'aide de visuels
                            flatteurs et de hautes qualités.
                        </p>
                    </div></div>
                    <div className='content-footer'>
                        <Link 
                            className='button'
                            to="/portfolio"
                        >Voir mon Portfolio</Link>
                    </div>
                </div>
 * 
 * 
 */

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

export default Home;
