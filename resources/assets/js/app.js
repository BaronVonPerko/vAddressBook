
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('vue-resource');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('address-book', require('./components/AddressBook.vue'));
Vue.component('address-list', require('./components/AddressList.vue'));
Vue.component('new-person-form', require('./components/NewPersonForm.vue'));

const app = new Vue({
    el: '#app'
});