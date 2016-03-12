import React, { Component } from 'react'

export default class Background extends Component {

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

        let innerStyleBack = {}
        let innerStyleFront =  {}
        if (image) {
            innerStyleBack.backgroundImage = 'url(' + image + ')';
            background = (
                <div
                    className='layer back'
                    style={innerStyleBack}>
                </div>
            );
        } else {
            innerStyleFront.backgroundColor = color;
            innerStyleFront.backgroundImage = 'none';
        }

        return (
            <div
                className={className}
                style={style}
                {...props}>
                
                {background}
        
                <div className='layer front' style={innerStyleFront}>
                    {this.props.children}
                </div>
                
            </div>
        );
    }

}

