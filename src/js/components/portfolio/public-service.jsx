/* portfolio/public-service.jsx */

import React from 'react';
import Background from '../background.jsx';

const PortfolioPublicService = React.createClass({

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
                    image='img/portfolio/services_publics/Auxon_blanc_01.jpg'>
    
                    <div className='portfolio-content top'>
                    
                        <h2>Complexe Sportif</h2>
                        <h3>Les Auxons</h3>

                        <p>
                            Extension du bâtiment existant et ajout d'un court
                            de tennis couvert et tempéré - Philippe DONZÉ
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'auxon-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                    
                </Background>
            
                <Background
                    id='auxon-final-render'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Auxon_VueC_01a.jpg'>

                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'crouzet-migette')}>
                            &#8595; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>

                </Background>
                    
                <Background
                    id='crouzet-migette'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/services_publics/Crouzet.Migette_blanc_01.jpg'>
                            
                    <div className='portfolio-content right top'>
                    
                        <h2>Maison Communale</h2>
                        <h3>Crouzet Migette</h3>
                        <p>Philippe DONZÉ</p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'crouzet-migette-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                            
                </Background>

                <Background
                    id='crouzet-migette-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Crouzet.Migette_Vue01a.jpg'>
                            
                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'groupe-scolaire-anatole')}>
                            &#8595; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
                            
                </Background>

                <Background
                    id='groupe-scolaire-anatole'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/services_publics/Gr.Scolaire_Blanc_01.jpg'>

                    <div className='portfolio-content'>
                    
                        <h2>Groupe Scolaire</h2>
                        <h3>Lyon</h3>

                        <p>
                            Création d'une nouvelle salle de restauration -
                            Studio PYC
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'groupe-scolaire-anatole-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>

                </Background>

                <Background
                    id='groupe-scolaire-anatole-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Gr.Scolaire_Vue02a.jpg'>
            
                    <div className='portfolio-content discreet right'>
                    
                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'mediatheque-les-fourgs')}>
                            &#8595; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>
            
                </Background>
        
                <Background
                    id='mediatheque-les-fourgs'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/services_publics/Mediatheque_LesFourgs_Blanc_01.jpg'>

                    <div className='portfolio-content right'>
                    
                        <h2>Mediathèque</h2>
                        <h3>Les Fourgs</h3>

                        <p>
                            Réhabilitation d'un ancien presbytère en médiathèque
                            et périscolaire - Philippe DONZÉ
                        </p>

                        <a 
                            className='button'
                            onClick={this.scrollDown.bind(this, 'mediatheque-les-fourgs-final-render')}>
                            &#8595; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#8595;
                        </a>
                
                    </div>

                </Background>
        
                <Background
                    id='mediatheque-les-fourgs-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Mediatheque_LesFourgs_Vue01_06a.jpg'>
            
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

export default PortfolioPublicService;
