/* portfolio/housing.jsx */

import React from 'react';
import Background from '../background.jsx';

const PortfolioHousing = React.createClass({

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
                    image='img/portfolio/logements/Log.Pradelle_blanc_01.jpg'>
    
                    <div className='portfolio-content top right'>
                    
                        <h3>Clermont-Ferrand</h3>

                        <p>
                            DHAuvergne Architectes
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'pradelle-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='pradelle-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log.Pradelle_Vue02a.jpg'>

                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'givors')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>

                </Background>






                <Background
                    id='givors'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/logements/Log.Givors_Blanc_01.jpg'>
                            
                    <div className='portfolio-content right'>
                    
                        <h3>Givors</h3>
                        <p>in-fine Architectes</p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'givors-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>
                            
                </Background>

                <Background
                    id='givors-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log.Givors_vue01.jpg'>
                            
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
                        &copy; Ces images sont propriétés de leur auteur
                        et ne peuvent être utilisées sans son accord &copy;
                    </p>

                </Background>

           </div>
        );
    }
});

export default PortfolioHousing;
