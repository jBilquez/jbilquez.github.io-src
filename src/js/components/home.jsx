/* home.jsx */

import React from 'react';
import AppDiv, {Background} from './appDiv.jsx';

const Home = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    scrollDown() {
        window.setTimeout(
            function() {
                $('#intro').velocity("scroll", {duration: 600, easing: "ease"});
            },
            100
        );
    },

    render() {
        return (
            <AppDiv id='home-page'>
                <Background
                    type='parallax'
                    image='http://www.minimit.com/images/picjumbo.com_DSC_3274.jpg'
                    data-img-width='1600'
                    data-img-height='1024'
                    data-diff='200'
                >
                    <div className='content-a'><div className='content-b'><h2>Welcome Home!</h2></div></div>
                    
                    <div className='content-footer'>
                        <a 
                            className='button'
                            onClick={this.scrollDown}
                        >Click me!</a>
                    </div>

                </Background>
               <Background id='intro'>
                    <div className='content-a'><div className='content-b'><h2>Welcome Home!</h2></div></div>
                </Background>
            </AppDiv>
        );
    },

    statics: {
        willTransitionFrom: function (transition, element) {
            if (!$('#home-page').hasClass('leaving')) {
                $('#home-page').addClass('leaving');
                transition.abort();

                let delayTransition = function () {
                    element.context.router.transitionTo(transition.path);
                };

                window.setTimeout(delayTransition, 200);
                
            }
        }
    }

});

export default Home;
