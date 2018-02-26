import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import PlayButton from './playBtn.jsx';
import request from '../lib/vimeoApi';
//22439234
function getVideo(id) {
    return request({
        url: `/videos/${id}`,
        method: 'GET'
    });
}

class Video extends Component {
    constructor() {
        super();
        this.state = {
            videoId: PropTypes.string,
        };
    }

    componentDidMount() {
        getVideo(this.props.videoId);
        console.log('State', this.state.videoId);
    }

    render() {
        let embedStyle = {
            width: '100%',
      height: '100%'
        }
        return (
            <div className="video">
                <iframe title='random' frameBorder='0' src={this.getIframeUrl()} style={embedStyle}></iframe>
            </div>
        );
    }

    getIframeUrl() {
        return `//player.vimeo.com/video/${this.props.videoId}?autoplay=0`;

    }
    
}


export default Video;
