import React, { Component } from 'react';
import axios from 'axios';

const Api = 'https://api.vimeo.com';
let accessToken = 'NzQwYzcyNGRiMDk0YTEzY2Q1ZGM2MDU2YzNkMWZjNTVmZWQwOGRiYjpJZ1E0a3V3dUptNzRMZ2dOZFlkaFVZS1BsRVRHSEoxamQrL1k3YzY5Wm5YZUNFZVpOTmRxbGxudkVZcld3WWFmVEc1aUdlcjhSOXlGaWJ5U2tpZXNWQzR0eklJL0xRZlhDUFI4OVRqdEFab2VsQkRySnZWUU5mZkVranhJaFNPdw==';
axios.defaults.baseURL = Api;
axios.defaults.headers.common['Authorization'] = 'basic ' + accessToken;



class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: null,
            user: [],
            title: '',
            url: '',
            plays: 0,
            likes: 0,
            comments: 0,

        };
    }

    fetchPosts() {
        axios.get('/channels/top/videos', {
            params: {
                page: 1,
                per_page: 10,
                sort: 'likes',
                direction: 'desc'
            }
        })
        .then(function(response){
            this.setState({
                feed: response.data.data
            });
        });
    }
    
  
    render() {
        console.log(this.state.feed);
        return(
            <div className="card">
            {this.state.feed}
            </div>
        );
    }
}

export default Card;
