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
                    image='img/portfolio/logements/Log_SerreLesSapins_Permis_.jpg'>

                    <div className='portfolio-content top right'>

                        <h3>Serre-Les-Sapins</h3>

                        <p>
                            Architecte : Rachel Thuriet
                        </p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'serre-1')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>
                    </div>

                </Background>

                <Background
                    id='serre-1'
                    style={{zIndex: 2}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log_SerreLesSapins_Promot1_.jpg'>

                    <div className='portfolio-content top right'>

                        <h3>Serre-Les-Sapins</h3>

                        <p>
                            Promoteur : Jérôme Bidalot
                        </p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'serre-2')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>






                <Background
                    id='serre-2'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/logements/Log_SerreLesSapins_Promot2_.jpg'>

                    <div className='portfolio-content'>

                        <h3>Serre-Les-Sapins</h3>

                        <p>
                            Promoteur : Jérôme Bidalot
                        </p>
                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'thise-1')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>

                <Background
                    id='thise-1'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log_Thise1_.jpg'>


                    <div className='portfolio-content top right'>

                        <h3>Thise</h3>
                        <p>Promoteur : Jérôme Bidalot</p>
                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'thise-2')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='thise-2'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/logements/Log_Thise2_.jpg'>

                    <div className='portfolio-content top right'>

                        <h3>Thise</h3>
                        <p>Promoteur : Jérôme Bidalot</p>
                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'rue-vesoul')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='rue-vesoul'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log.Bes.RueDeVesoul_.jpg'>


                    <div className='portfolio-content'>


                        <h3>Besançon</h3>
                        <p>Architecte : Rachel Thuriet</p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'bes-donze')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='bes-donze'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/logements/Log.Besancon_Ph.Donze_.jpg'>

                    <div className='portfolio-content'>

                        <h3>Besançon</h3>
                        <p>Architecte : Philipe Donzé</p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'hop-neufs')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='hop-neufs'
                    style={{zIndex: 1}}
                    type='parallax'
                    fullscreen={false}
                    image='img/portfolio/logements/Log.Hop.Neufs_.jpg'>


                    <div className='portfolio-content top'>

                        <h3>Hopitaux Neufs</h3>
                        <p>Architecte : Rachel Thuriet</p>

                        <a
                            className='button'
                            onClick={this.scrollDown.bind(this, 'cras')}>
                            &#9660; &nbsp; &nbsp; Suivant &nbsp; &nbsp; &#9660;
                        </a>

                    </div>

                </Background>


                <Background
                    id='cras'
                    style={{zIndex: 2}}
                    type='background'
                    fullscreen={false}
                    color='white'
                    image='img/portfolio/logements/Log.RueDesCras_.jpg'>

                    <div className='portfolio-content top right'>

                        <h3>Besançon</h3>
                        <p>Architecte : Rachel Thuriet</p>

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

export default PortfolioHousing;
