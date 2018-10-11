// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from "firebase"

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyC8MO-4S8u96l4HuxxUMp6tTTgPAhUcWk0",
  authDomain: "vue-firebase-683e8.firebaseapp.com",
  databaseURL: "https://vue-firebase-683e8.firebaseio.com",
  projectId: "vue-firebase-683e8",
  storageBucket: "vue-firebase-683e8.appspot.com",
  messagingSenderId: "1052957228164"
}
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
