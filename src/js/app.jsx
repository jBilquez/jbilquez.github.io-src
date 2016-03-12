/* app.jsx */

import ReactDOM                     from 'react-dom';
import {Router, useRouterHistory}   from 'react-router';
import AppRoutes                    from './appRoutes.jsx';
import { createHashHistory }        from './History.min.js'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render(
    <Router history={appHistory}>{AppRoutes}</Router>,
    document.getElementById('content')
);
