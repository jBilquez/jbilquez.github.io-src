/* appRoutes.jsx */

import Router, {Route, Redirect} from 'react-router';

import Page from './components/page.jsx';
import Home from './components/home.jsx';
import Viewer from './components/viewer.jsx';
import PortfolioHousing from './components/portfolio/housing.jsx';
import PortfolioMiscellaneous from './components/portfolio/miscellaneous.jsx';
import PortfolioPublicService from './components/portfolio/public-service.jsx';

export default (
        <Route path="/" handler={Page}>
            <Redirect from="/" to="/home" />
            <Route name="home" handler={Home} />
            <Route path="portfolio">
                <Route name="logements" handler={PortfolioHousing} />
                <Route name="autres" handler={PortfolioMiscellaneous} />
                <Route name="services-publiques" handler={PortfolioPublicService} />
            </Route>
            <Route name="viewer" path="/view/:pictureUrl" handler={Viewer} />
        </Route>
);

