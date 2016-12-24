import {API_ROOT} from '../constant'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// const todos = [
//         {
//           text: 'nodejs',
//           done: '14'
//         }, {
//           text: 'css',
//           done: '5'
//         }, {
//           text: 'mongodb',
//           done: '12'
//         }
//       ]

const history = [
        {
          date: '2016-12-23',
          todos: [{
            text: 'nodejs',
            done: '14'
          }, {
            text: 'css',
            done: '5'
          }, {
            text: 'mongodb',
            done: '12'
          }]
        }, 
        {
          date: '2016-12-22',
          todos: [{
            text: 'vuex',
            done: '14'
          }, {
            text: 'css',
            done: '5'
          }, {
            text: 'mongodb',
            done: '12'
          }]
        }
      ]


export default {
  getTodos: () => {
    return Vue.resource(API_ROOT+'todo').get()
  },
  getHistoryTodos: () => {
    return Vue.resource(API_ROOT + 'todohistory').get()
  }
  // getHistoryTodos(cb) {
  //   setTimeout(() => cb(history), 100)
  // }

  // getTodos(cb) {
  //   setTimeout(() => cb(todos), 100)
  // }
}