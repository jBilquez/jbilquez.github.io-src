/* home.jsx */

import React from 'react';
import AppDiv, {Background} from './appDiv.jsx';

const Home = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    scrollDown() {
        window.setTimeout(
            function() {
                $('#intro').velocity("scroll", {duration: 600, easing: "ease"});
            },
            100
        );
    },

    render() {
        return (
            <AppDiv id='home-page'>
                <Background
                    type='parallax'
                    image='img/Accueil01.jpg'
                    data-img-width='1920'
                    data-img-height='1280'
                    data-diff='200'
                >
                    <div className='content-a'>
                        <div className='content-b'>
                            <h2>Jérôme Bilquez</h2>
                            <h3>Graphiste 3D</h3>
                        </div>
                    </div>
                    
                    <div className='content-footer'>
                        <a 
                            className='button'
                            onClick={this.scrollDown}
                        >&#8595; &nbsp; &nbsp; Découvrez qui je suis &nbsp; &nbsp; &#8595;</a>
                    </div>

                </Background>
               <Background id='intro'>
                    <div className='content-a'><div className='content-b'>
                        <h2>Jérôme Bilquez</h2>
                        <h3>Graphiste 3D en architecture</h3>
                        <p>
                            Je suis Jérôme Bilquez, graphiste 3D, spécialisé
                            dans les images de synthèses et
                            illustrations architecturales.
                        
                            Ma mission est de vous accompagner dans la 
                            mise-en-image de vos projets à l'aide de visuels
                            flatteurs et de hautes qualités.
                        </p>
                    </div></div>
                </Background>
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

export default Home;
