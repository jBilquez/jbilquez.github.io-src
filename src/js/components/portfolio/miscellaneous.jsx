/* portfolio/miscellaneous.jsx */

import React from 'react';
import Background from '../background.jsx';

const PortfolioMiscellaneous = React.createClass({

    scrollDown(destination) {
        window.setTimeout(
            function() {
                Velocity(document.getElementById(destination), "scroll", {duration: 600, easing: "ease", container: document.getElementById("portfolio-page")});
            },
            100
        );
    },

    render() {
        return (
            <div className='parallax-container' id='portfolio-page'>
                                    
                <Background
                    id='etalans'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Etalans_Blanc_01.jpg'>
                            
                    <div className='portfolio-content top'>
                    
                        <h2>Établissement pour service d'aide par le travail</h2>
                        <h3>Étalans</h3>

                        <p>
                            Projet Lauréat - Philippe DONZÉ
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'etalans-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                            
                </Background>

                <Background
                    id='etalans-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/autres/Etalans_Vue02_02a.jpg'>
                            
                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'bayer')}>
                            &#8595; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                            
                </Background>
        
                <Background
                    id='bayer'
                    style={{zIndex: 3}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Bayer_blanc_01.jpg'>
                            
                    <div className='portfolio-content top right'>
                    
                        <h2>Laboratoire Bayer</h2>
                        <h3>Lyon</h3>
                        <p>
                            Création d'un hall d'accueil
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'bayer-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='bayer-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/autres/Bayer_Interieure_02a.jpg'>
                            

                </Background>
        
                <Background
                    style={{zIndex: 2, height: '40vh',opacity:0, boxShadow:'none'}}
                    type='background'
                    fullscreen={false}
                    color='white'>

                </Background>
        
                <Background
                    id='portfolio-footer'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'>
                    
                    <p>
                        &copy; Ces images sont propriétés de leurs auteurs
                        et ne peuvent être utilisées sans son accord &copy;
                    </p>

                </Background>

           </div>
        );
    }
});

export default PortfolioMiscellaneous;
