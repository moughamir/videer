import React, { Component } from 'react';
//import logo from './components/logo.svg';
import Card from './components/Card';
import Posts from './components/Posts';
import axios from 'axios';

const Api = 'https://api.vimeo.com';
let accessToken = 'NzQwYzcyNGRiMDk0YTEzY2Q1ZGM2MDU2YzNkMWZjNTVmZWQwOGRiYjpJZ1E0a3V3dUptNzRMZ2dOZFlkaFVZS1BsRVRHSEoxamQrL1k3YzY5Wm5YZUNFZVpOTmRxbGxudkVZcld3WWFmVEc1aUdlcjhSOXlGaWJ5U2tpZXNWQzR0eklJL0xRZlhDUFI4OVRqdEFab2VsQkRySnZWUU5mZkVranhJaFNPdw==';
axios.defaults.baseURL = Api;
axios.defaults.headers.common['Authorization'] = 'basic ' + accessToken;

class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  fetchFeed() {
    let that = this;
    axios.get('/channels/top/videos', {
      params: {
        page: 1,
        per_page: 10,
        sort: 'likes',
        direction: 'desc'
      }
    }).then(function(response) {
      that.setState({

        posts: response.data.data

      });
    }).catch(function(error) {
      console.error('Axios : ' + error);
    });
  }

  componentWillMount() {
    this.fetchFeed();
  }

  render() {
    return (
      <div className="container">
      <Posts posts={this.state.posts} />
        <Card item={Posts} />
      </div>
    );
  }
}

//48:7 <Posts posts={this.state.posts}/>
export default App;
