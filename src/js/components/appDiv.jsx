import React, { Component } from 'react'

export default class AppDiv extends Component {

    static propTypes = {
        className: React.PropTypes.string
    }

    static defaultProps = {
        className: 'fullscreen'
    }

    render() {

        let { className, ...props } = this.props;
        if (className.indexOf('fullscreen') == -1) className += ' fullscreen';

        return (
            <div className={className} {...props}>
                {this.props.children}
            </div>
        );
    }

}

export class Background extends Component {

    static propTypes = {
        type: React.PropTypes.string,
        image: React.PropTypes.string,
        background: React.PropTypes.string,
        fullscreen: React.PropTypes.bool,
        style: React.PropTypes.object
    }

    static defaultProps = {
        className: '',
        type: '',
        image: '',
        color: 'white',
        fullscreen: true,
        style: {}
    }

    render() {

        let { className, type, image, color, fullscreen, style, ...props } = this.props;

        var ie = navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./);

        switch (type) {

            case 'background':
                
                className += ' background';
                break;

            case 'fixed':
            case 'background-fixed':

                className += ' background background-fixed';
                break;

            case 'parallax':

                className += ' background parallax';
                if (!ie && document.documentElement.className.indexOf('touch') === -1) className += ' background-fixed';

                break;

            default:
                className += ' not-background';
                break;
        }

        if (!fullscreen) className += ' not-fullscreen';

        style.backgroundColor = color;
        if (image) {
            style.backgroundImage = 'url(' + image + ')';
        } else {
            style.backgroundImage = 'none';
        }

        return (
            <AppDiv
                className={className}
                style={style}
                {...props}
                >
                
                {this.props.children}
            </AppDiv>
        );
    }

}

