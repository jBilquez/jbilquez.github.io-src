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
                        <h3>Graphiste 3D</h3>
                    
                        <div id='who-i-am-button'>
                            <a 
                                className='button'
                                onClick={this.scrollDown}
                            >&#9660; &nbsp; &nbsp; Qui suis-je &nbsp; &nbsp; &#9660;</a>
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
                            Je suis <strong>Jérôme Bilquez</strong>, jeune
                            graphiste freelance implanté sur Besançon. Fort
                            d'une expérience de plus de 7 ans en agence
                            d'architecture et studio de graphisme, ma mission
                            est de vous accompagner dans la représentation,
                            la promotion et la communication des projets et
                            concours architecturaux, projets immobiliers, ou
                            d'urbanisme.
                        </p>
                        <p>
                            A partir de vos plans, ou de vos maquettes 3D
                            numériques, je réalise des perspectives extérieures,
                            intérieures ou aériennes. Je peux également
                            illustrer plans masses, façades, ou encore coupes.
                        </p>
                        <p>
                            Passionné par le dessin depuis toujours, je mets
                            aujourd'hui mon savoir-faire et mon expertise des
                            outils 3D au service d'une prestation sur mesure et
                            soignée. Je mobilise toutes mes compétences dans le
                            but de rendre mes illustrations originales et
                            sensibles, qui ne manqueront pas de valoriser vos
                            projets.
                        </p>
                        <p>
                            Habitué et parfaitement à l'aise avec le télétravail,
                            j'opte pour un échange permanent, de la phase de la
                            conception à la mise en œuvre de vos intentions.
                            Je pratique des tarifs étudiés et compétitifs.
                            Je vous invite à découvrir mon portfolio et à me
                            contacter pour tout renseignement complémentaire.
                        </p>
                        
                        <nav id='portfolio-button'>
                            <div 
                                className={portfolioFoldedClass}
                                onClick={this.portfolioClicked}
                            >
                                Voir mon Portfolio
                                <ul>
                                    <li><Link to="/portfolio/logements">Logements</Link></li>
                                    <li><Link to="/portfolio/services-publics">Services publics</Link></li>
                                    <li><Link to="/portfolio/autres">Autres</Link></li>
                                </ul>
                            </div>
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
