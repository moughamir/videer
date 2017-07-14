/* global $ */
/* global _ */
/* global Vue */
/* global moment */
/* global axios */
/* global btoa */
'use strict';
const Api = 'https://api.vimeo.com';
const AuthUrl = Api + '/oauth/authorize';
const AccessTokenUrl = Api + '/oauth/access_token';
const clientId = '740c724db094a13cd5dc6056c3d1fc55fed08dbb';
const clientSecret = 'IgQ4kuwuJm74LggNdYdhUYKPlETGHJ1jd+/Y7c69ZnXeCEeZNNdqllnvEYrWwYafTG5iGer8R9yFibySkiesVC4tzII/LQfXCPR89TjtAZoelBDrJvVQNffEkjxIhSOw';

Vue.config.devtools = true;
// var container = $('.feed-content');
//const apiURL = '../exemple-data.json';
const apiURL = '/api';
let accessToken = btoa(clientId + ':' + clientSecret);
/**
 * default settings for ajax client
 */
axios.defaults.baseURL = Api;
axios.defaults.headers.common['Authorization'] = 'basic ' + accessToken;

/**
 * Default User Picture
 */
var defaultUserPicture = {
    'sizes': [{
      "width": 30,
      "height": 30,
      "link": "//via.placeholder.com/30x30?text=N/A"
    }, {
      "width": 75,
      "height": 75,
      "link": "//via.placeholder.com/75x75?text=N/A"
    }, {
      "width": 100,
      "height": 100,
      "link": "//via.placeholder.com/100x100?text=N/A"
    }, {
      "width": 300,
      "height": 300,
      "link": "//via.placeholder.com/300x300?text=N/A"
    }]
  }
  /**
   * post card component
   */

Vue.component('card', {
  template: '<div class="media" ref="card">' + '' + '</div>',
  props: ['dataImage']
});

var app = new Vue({

  el: '#feed-app',
  // item.user.pictures.sizes['2'].link
  data: {
    currentBranch: 'dev',
    feed: [],
    user: []
  },
  mounted() {
    this.fetchData(1, 10);

  },
  methods: {
    fetchData: function(displayPage, perPage) {
      var self = this;
      axios.get('/channels/top/videos', {
        params: {
          page: displayPage,
          per_page: perPage,
          sort: 'likes',
          direction: 'desc'
        }
      }).then(function(response) {
        self.feed = response.data.data;
        self.user = _.map(self.feed, 'user');
      }).catch(function(error) {
        console.error('Axios : ' + error);
      });
    }
  },
  computed: {
    userPicture: function() {
      let self = this;
      return _.map(self.user, function(elm) {
        return elm.pictures = (elm.pictures === null) ? elm.pictures = defaultUserPicture : elm.pictures;
      });
    }
  },
  filters: {
    // Limit description output to 180 characters.
    truncate: function(value) {
      if (!!value) {
        let newText = value.substring(0, 180);
        return newText + '...';
      }
    },
    // Format date to a user-friendly format.
    dateformat: function(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm');
      }
    },
    pseudofy: function(value){
      return '@'+_.last(_.words(value));
    }
  }
});
