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

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/home'>Accueil</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
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
