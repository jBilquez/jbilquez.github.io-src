/* page.jsx */

import React from 'react';
import {RouteHandler} from 'react-router';

import AppDiv from './appDiv.jsx';
import LeftBar from './leftBar.jsx';

const Page = React.createClass({

    render() {

        return (
            <AppDiv>
                <LeftBar />
                <AppDiv className="page-content">
                    <RouteHandler />
                </AppDiv>
            </AppDiv>
        );

    },
});

export default Page;
