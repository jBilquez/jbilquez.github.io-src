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
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
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
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
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
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
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
                            onClick={this.scrollDown.bind(this, 'mediatheque-les-fourgs')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
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
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='mediatheque-les-fourgs-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Mediatheque_LesFourgs_Vue01_06a.jpg'>
                    <div className='portfolio-content discreet right'>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'quetigny')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>
                </Background>

                <Background
                    id='quetigny'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/services_publics/Quetigny_blanc.jpg'>

                    <div className='portfolio-content right'>

                        <h2>Maison de l'enfance</h2>
                        <h3>Quetigny</h3>

                        <p>
                            Philippe DONZÉ
                        </p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'quetigny-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='quetigny-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Quetigny_perspective.jpg'>
                    <div className='portfolio-content discreet right'>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'mediatheque-nommay')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>
                </Background>

                <Background
                    id='mediatheque-nommay'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/services_publics/Mediatheque_Nommay_blanc_01.jpg'>

                    <div className='portfolio-content top'>

                        <h2>Mediathèque</h2>
                        <h3>Nommay</h3>

                        <p>
                            Réhabilitation d'un corps de ferme en médiathèque
                             - Philippe DONZÉ
                        </p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'mediatheque-nommay-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='mediatheque-nommay-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Mediatheque_Nommay_Vue01_02a.jpg'>

                    <div className='portfolio-content discreet right'>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'maison-enfance')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='maison-enfance'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/services_publics/Mediatheque_Nommay_blanc_01.jpg'>

                    <div className='portfolio-content top'>

                        <h2>Maison des Services et de l'Enfance</h2>
                        <h3>Vercel</h3>

                        <p>
                            Philippe DONZÉ
                        </p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'maison-enfance-final-render')}>
                            &#9660; &nbsp; &nbsp; Découvrir le rendu final &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='maison-enfance-final-render'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Maison_Services_enfance_Vue01.jpg'>

                    <div className='portfolio-content discreet right'>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'amagney')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>
                </Background>


                <Background
                    id='amagney'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    image='img/portfolio/services_publics/Ecole_Amagney_.jpg'>

                    <div className='portfolio-content top'>
                        <h3>Ecole d'Amagney</h3>
                        <p>Architecte : Philipe Donzé</p>
                    </div>
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

export default PortfolioPublicService;
