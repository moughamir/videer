/* global $ */
///* global _ */
/* global Vue */
/* global moment */
'use strict';
Vue.config.devtools = true;
// var container = $('.feed-content');
const apiURL = '/api';

/**
 * post card component
 */

Vue.component('card', {
  template: '<div class="media" ref="card">'+''+'</div>',
  props: ['dataImage']
});

var app = new Vue({

  el: '.feed',

  data: {
    currentBranch: 'dev',
    feed: null
  },
  created: function() {
    this.fetchData();

  },
  methods: {
    fetchData: function() {
      var self = this;
      $.get(apiURL, function(data) {
        self.feed = data;
        //console.log(data);
      });
    }
  }, 
  filters: {
    truncate : function(value){
      if(!!value){
        return value.substring(0, 180);
      }
    },
    dateformat: function(value){
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm');
      }
    }
  }
});

