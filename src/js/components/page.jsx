/* page.jsx */

import React from 'react';
import {RouteHandler} from 'react-router';

import LeftBar from './leftBar.jsx';

const Page = React.createClass({

    render() {

        return (
            <div>
                <LeftBar />
                <div className="page-content">
                    <RouteHandler />
                </div>
            </div>
        );

    },
});

export default Page;
