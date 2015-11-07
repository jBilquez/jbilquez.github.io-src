/* appRoutes.jsx */

import Router, {Route, Redirect} from 'react-router';

import Page from './components/page.jsx';
import Home from './components/home.jsx';
import Portfolio from './components/portfolio.jsx';

export default (
        <Route path="/" handler={Page}>
            <Redirect from="/" to="/home" />
            <Route name="home" handler={Home} />
            <Route name="portfolio" handler={Portfolio} />
        </Route>
);

