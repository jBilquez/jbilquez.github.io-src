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
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
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
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
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
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='bayer-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/autres/Bayer_Interieure_02a.jpg'>
                            
                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'hotels-samoens')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>
                </Background>
        
                <Background
                    id='hotels-samoens'
                    style={{zIndex: 3}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Hotels_Samoens_Blanc_01.jpg'>
                            
                    <div className='portfolio-content right'>
                    
                        <h2>Hotels</h2>
                        <h3>Samoens</h3>
                        <p>
                            DHA Savoie
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'hotels-samoens-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='hotels-samoens-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/autres/Hotels_Samoens_Vue01.jpg'>
                        
                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'st-priest')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>

                </Background>
        
                <Background
                    id='st-priest'
                    style={{zIndex: 3}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/StPriest_Incrustation_blanc_01.jpg'>
                            
                    <div className='portfolio-content top'>
                    
                        <h2>SEGRO Logistics</h2>
                        <h3>Saint Priest</h3>
                        <p>
                            Atelier 4+
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'st-priest-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='st-priest-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/autres/StPriest_VueRapprochee_04a.jpg'>
                            

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

export default PortfolioMiscellaneous;
