/* appRoutes.jsx */

import {Router, Route, Redirect, IndexRoute} from 'react-router';

import Page from './components/page.jsx';
import Home from './components/home.jsx';
import PortfolioHousing from './components/portfolio/housing.jsx';
import PortfolioMiscellaneous from './components/portfolio/miscellaneous.jsx';
import PortfolioPublicService from './components/portfolio/public-service.jsx';

export default (
    <Route path="/" component={Page}>
        <IndexRoute component={Home} />
        <Route path="portfolio">
            <Route path="logements" component={PortfolioHousing} />
            <Route path="autres" component={PortfolioMiscellaneous} />
            <Route path="services-publiques" component={PortfolioPublicService} />
        </Route>
    </Route>
);

