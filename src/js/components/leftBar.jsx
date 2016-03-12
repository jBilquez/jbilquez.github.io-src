/* leftBar.jsx */

import React from 'react';
import {Link, IndexLink} from 'react-router';

const LeftTitle = React.createClass({

    render() {
        return (
            <IndexLink id="logo" to="/" title="Retourner à la page d'accueil">
                <div id="logo-img" />
            </IndexLink>
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
        this.setState({portfolioFolded: !this.state.portfolioFolded});
        return false;
    },

    render() {
        var portfolioFoldedClass = this.state.portfolioFolded ? "visible" : "";
        return (
            <nav>
                <ul>
                    <li><IndexLink to='/' activeClassName="active">Accueil</IndexLink></li>
                    <li className={portfolioFoldedClass}>
                        <a onClick={this.portfolioClicked}>Portfolio</a>
                        <ul className={portfolioFoldedClass}>
                            <li><Link to='/portfolio/logements' activeClassName="active">Logements</Link></li>
                            <li><Link to='/portfolio/services-publiques' activeClassName="active">Services Publiques</Link></li>
                            <li><Link to='/portfolio/autres' activeClassName="active">Autres</Link></li>
                        </ul>
                    </li>
                    <li><Link to='/references' activeClassName="active">Références</Link></li>
                    <li><Link to='/contact' activeClassName="active">Contact</Link></li>
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
