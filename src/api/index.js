import {API_ROOT} from '../constant'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const todos = [
        {
          text: 'nodejs',
          done: '14'
        }, {
          text: 'css',
          done: '5'
        }, {
          text: 'mongodb',
          done: '12'
        }
      ]

export default {
  getTodos: () => {
    return Vue.resource(API_ROOT+'todo').get()
  }

  // getTodos(cb) {
  //   setTimeout(() => cb(todos), 100)
  // }
}