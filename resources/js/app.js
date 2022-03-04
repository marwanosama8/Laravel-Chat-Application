
require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';

Vue.component('ChatComponent', require('./components/ChatComponent.vue').default)

const app = new Vue({
    el:'#app1'
})
