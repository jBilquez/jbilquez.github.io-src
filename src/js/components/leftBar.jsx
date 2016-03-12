/* leftBar.jsx */

import React from 'react';
import {Link} from 'react-router';

const LeftTitle = React.createClass({

    render() {
        return (
            <Link id="logo" to="/home" title="Retourner à la page d'accueil">
                <div id="logo-img" />
            </Link>
        );
    }

});

const LeftMenu = React.createClass({

    getInitialState() {
        return {
            portfolioFolded: false
        }
    },

    portfolioClicked() {
        console.log("portfolioMenu clicked");
        this.setState({portfolioFolded: !this.state.portfolioFolded});
        return false;
    },

    render() {
        var portfolioFoldedClass = this.state.portfolioFolded ? "visible" : "";
        return (
            <nav>
                <ul>
                    <li><Link to='/home'>Accueil</Link></li>
                    <li className={portfolioFoldedClass}>
                        <a onClick={this.portfolioClicked.bind(this)}>Portfolio</a>
                        <ul className={portfolioFoldedClass}>
                            <li><Link to='/portfolio/logements'>Logements</Link></li>
                            <li><Link to='/portfolio/services-publiques'>Services Publiques</Link></li>
                            <li><Link to='/portfolio/autres'>Autres</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/references'>Références</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </nav>
        );
    }

});

const LeftBar = React.createClass({

    render() {
        return (
            <header className='left-bar'>
                <LeftTitle />
                <LeftMenu />
            </header>
        );
    }

});

export default LeftBar;
