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
        style: React.PropTypes.object,
        viewable: React.PropTypes.bool
    }

    static defaultProps = {
        className: '',
        type: '',
        image: '',
        color: 'white',
        fullscreen: true,
        style: {},
        viewable: false
    }

    static contextTypes = {
        router: React.PropTypes.func
    }

    handleClick() {
        if (!this.props.viewable) return;
        this.context.router.transitionTo('/view/' + this.props.image.substring(this.props.image.lastIndexOf('/') + 1));
    }

    render() {

        let { className, type, image, color, fullscreen, style, viewable, ...props } = this.props;
        let background;

        switch (type) {

            case 'background':
                
                className += ' background';
                break;

            case 'fixed':
            case 'background-fixed':

                className += ' background background-fixed';
                break;

            case 'parallax':

                className += ' background parallax background-fixed';
                
                if (!image) className += ' not-background';

                break;

            default:
                className += ' not-background';
                break;
        }

        if (!fullscreen) className += ' not-fullscreen';

        style.backgroundColor = color;
        if (image) {
            style.backgroundImage = 'url(' + image + ')';
            background = (
                <div
                    className='layer back'
                    style={style}>
                </div>
            );
            style = {};
        } else {
            style.backgroundColor = color;
            style.backgroundImage = 'none';
        }

        return (
            <div
                className={className}
                onClick={this.handleClick.bind(this)}
                {...props}>
                
                {background}
        
                <div className='layer front' style={style}>
                    <div className='content'>{this.props.children}</div>
                </div>
                
            </div>
        );
    }

}

