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
                            Vinci
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'pradelle-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='pradelle-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log.Pradelle_Vue02a.jpg'>

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

export default PortfolioHousing;
