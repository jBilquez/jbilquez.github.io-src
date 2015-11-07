/* app.jsx */

import ReactDOM     from 'react-dom';
import Router       from 'react-router';
import AppRoutes    from './appRoutes.jsx';

Router.run(AppRoutes, Router.HashLocation, (Root) => {
    ReactDOM.render(<Root />, document.getElementById('content'));
    $(window).resize();
    Waves.attach('.button', ['waves-button']);
    Waves.init({duration: 80, delay: 0});
});

