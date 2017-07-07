/* home.jsx */

import React from 'react';
import Background from './background.jsx';
import {Link} from 'react-router';

const Home = React.createClass({

    scrollDown() {
        window.setTimeout(
            function() {
                Velocity(document.getElementById('intro'), "scroll", {duration: 600, easing: "ease", container: document.getElementById("home-page")});
            },
            100
        );
    },

    getInitialState() {
        return {
            portfolioFolded: false
        }
    },

    portfolioClicked() {
        this.setState({portfolioFolded: !this.state.portfolioFolded});
        return false;
    },

    render() {
        var portfolioFoldedClass = this.state.portfolioFolded ? "button visible" : "button";
        
        return (
            <div className='parallax-container' id='home-page'>
                <Background
                    type='parallax'
                    image='img/Accueil02.jpg'
                >
                    <div className='content' id='home-title'>
                        <h2>Jérôme Bilquez</h2>
                        <h3>Portfolio</h3>
                    
                        <div id='who-i-am-button'>
                            <a 
                                className='button'
                                onClick={this.scrollDown}
                            >&#8595; &nbsp; &nbsp; Découvrir qui je suis &nbsp; &nbsp; &#8595;</a>
                        </div>
                    </div>
                    

                </Background>
                
                <Background
                    id='intro'
                    type='parallax'
                    color='white'>
                       
                    <div className='content'>
                        <h3>Graphiste 3D en architecture</h3>
                        <p>
                            Je suis <strong>Jérôme Bilquez</strong>, graphiste 3D, spécialisé
                            dans les images de synthèses et
                            illustrations architecturales.

                            Ma mission est de vous accompagner dans la 
                            mise en image de vos projets à l'aide de visuels
                            flatteurs et de hautes qualités.
                        </p>

                        <nav id='portfolio-button'>
                            <div 
                                className={portfolioFoldedClass}
                                onClick={this.portfolioClicked}
                            >
                                Voir mon Portfolio
                                <ul>
                                    <li><Link to="/portfolio/logements">Logements</Link></li>
                                    <li><Link to="/portfolio/services-publiques">Services publiques</Link></li>
                                    <li><Link to="/portfolio/autres">Autres</Link></li>
                                </ul>
                            </div>
                            <Link 
                                className='button'
                                to="/references"
                            >Voir mes références</Link>
                            <Link 
                                className='button'
                                to="/contact"
                            >Me contacter</Link>
                        </nav>
                    </div>
                </Background>
            </div>
        );
    },


});

export default Home;
