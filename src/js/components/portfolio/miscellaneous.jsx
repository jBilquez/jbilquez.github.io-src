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
                    style={{zIndex: 3}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/wip/projet_01.jpg'>
                            
                    <div className='portfolio-content'>
                    
                        <h2>Divers</h2>
                        <h3>Non, Miscellaneous! :o</h3>

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
                    image='img/portfolio/03_Cirque_Galerie_Parade_03.jpg'>
                            
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
                    image='img/portfolio/wip/projet_02.jpg'>
                            
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
                    image='img/portfolio/Chartres_BoisParis-Terrasse_03.jpg'>
                            
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
                    image='img/portfolio/wip/projet_03.jpg'>

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
                    image='img/portfolio/Toulouse_Clinique_Terrasse_02.jpg'>
            
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
