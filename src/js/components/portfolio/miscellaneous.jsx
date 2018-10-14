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
                    style={{zIndex: 3}}
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
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/autres/Etalans_Vue02_02a.jpg'>


                    <div className='portfolio-content discreet right'>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'bureaux-ht-chazal')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='bureaux-ht-chazal'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Bureaux_HautsDeChazal_.jpg'>

                    <div className='portfolio-content top'>

                        <h3>Hauts-De-Chazal</h3>

                        <p>
                            Architecte : Rachel Thuriet
                        </p>
                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'pole-sport-1')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='pole-sport-1'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Pole.Sportif_Bes.Trepillot_1_.jpg'>

                    <div className='portfolio-content top'>

                        <h3>Pôle Sportif Besançon Trepillot</h3>

                        <p>
                            Architecte : Philipe Donzé
                        </p>
                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'pole-sport-2')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='pole-sport-2'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Pole.Sportif_Bes.Trepillot_2_.jpg'>

                    <div className='portfolio-content top right'>

                        <h3>Pôle Sportif Besançon Trepillot</h3>

                        <p>
                            Architecte : Philipe Donzé
                        </p>
                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'cristel')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='cristel'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/autres/Usine.Cristel_Fesches_.jpg'>

                    <div className='portfolio-content top'>

                        <h3>Usine Cristel - Fesches</h3>

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

export default PortfolioMiscellaneous;
