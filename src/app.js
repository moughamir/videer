'use strict';
//Vue.config.devtools = true;
/**
 * Vimeo api configurattion
 */ 
const Api = 'https://api.vimeo.com';
//const apiURL = '../exemple-data.json';
let accessToken = 'NzQwYzcyNGRiMDk0YTEzY2Q1ZGM2MDU2YzNkMWZjNTVmZWQwOGRiYjpJZ1E0a3V3dUptNzRMZ2dOZFlkaFVZS1BsRVRHSEoxamQrL1k3YzY5Wm5YZUNFZVpOTmRxbGxudkVZcld3WWFmVEc1aUdlcjhSOXlGaWJ5U2tpZXNWQzR0eklJL0xRZlhDUFI4OVRqdEFab2VsQkRySnZWUU5mZkVranhJaFNPdw==';

/**
 * default settings for ajax client
 */
axios.defaults.baseURL = Api;
axios.defaults.headers.common['Authorization'] = 'basic ' + accessToken;

/**
 * Default User Picture
 * set default user picture if the user doesn't have one.
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
//
const displayPerPage = "10, 25, 50";
/**
 * Create Vue instance and run our logic
 * 
 * Todo: create distributable components and filters
 */ 
var app = new Vue({

  el: '#feed-app',
  data: {
    currentBranch: 'dev',
    loading: true,
    feed: [],
    user: [],
    pages: [],
    displayPerPage: _.split(displayPerPage, ', '),
    displayPage: 10,
    currentPage: 1,
    total: 0,
    filtered:''
  },
  mounted() {
    this.fetchData(this.currentPage, this.displayPage);
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
        self.pages = response.data.paging;
        self.loading = false;
        self.total = response.data.total;
      }).catch(function(error) {
        console.error('Axios : ' + error);
      });
    },
    setPage: function(pageNumber) {
      var self = this;
      self.currentPage = pageNumber;
      return self.currentPage;
    },
    gotoPage: function(page){
      this.fetchData(page, this.displayPage);
    }

  },
  computed: {
    userPicture: function() {
      let self = this;
      return _.map(self.user, function(elm) {
        return elm.pictures = (elm.pictures === null) ? elm.pictures = defaultUserPicture : elm.pictures;
      });
    },
    totalPages: function() {
      var self = this;
      return Math.ceil(self.total / self.displayPage);
    },
    // filter videos from users that have more than 10 likes.
    //
    filtredVideos: function(){
     let self = this;
     _.filter(self.user, function(u){
       console.log(u);
       self.filtered = u.metadata.connections.likes.total >= 10;
       return u.metadata.connections.likes.total >= 10;
      
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
    // create a twitter like username
    pseudofy: function(value) {
      return '@' + _.last(_.words(value));
    },
    // pagination
    paginate: function(list) {
      var self = this;
      self.total = list.length;
      if (self.currentPage >= self.totalPages) {
        self.currentPage = self.totalPages - 1;
      }
      var index = self.currentPage * self.displayPage;
      return list.slice(index, index + self.displayPage);
    },
  }
});
