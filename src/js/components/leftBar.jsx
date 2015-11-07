/* leftBar.jsx */

import React from 'react';
import {Link} from 'react-router';

const LeftTitle = React.createClass({

    render() {
        return (
            <Link id="logo" to="/home" title="Retourner à la page d'accueil">
                <img src="img/logo64.png" alt="J. Bilquez logo" />
                <h1>J. Bilquez - Portfolio</h1>
            </Link>
        );
    }

});

const LeftMenu = React.createClass({

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
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
