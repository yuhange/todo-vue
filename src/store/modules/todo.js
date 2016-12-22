import api from '../../api'
import * as types from '../mutation-types'

const state = {
  all: [],
  remaining: 0
}

const getters = {
  allTodos: state => state.all,
  remaining: state => state.remaining
}

const actions = {

  getAllTodos ({ commit }) {
    api.getTodos().then(response => {
      var todos = response.body.data
      commit(types.RECEIVE_TODOS, {todos})
    }, err=> {
      commit(types.REQUEST_TODOS_FAILURE, err)
    })
  },

  getRemaining ({commit}) {
    commit(types.RECEIVE_REMAINING)
  },
  
  addTodo({commit}, text) {
    // console.log(text)
    commit(types.ADD_TODO, {text})
  },

  clearCompleted({commit}) {
    commit(types.CLEAR_COMPLETED)
  },

  editTodo({commit}, todo, value) {
    commit(types.EDIT_TODO, {todo, value})
  },

  deleteTodo({commit}, todo) {
    commit(types.DELETE_TODO, {todo})
  },

  toggleTodo({ commit }, todo) {
    commit(types.TOGGLE_TODO, {todo})
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TODOS] (state, { todos }) {
    console.log(todos)
    state.all = todos
  },
  [types.RECEIVE_REMAINING] (state) {
    state.remaining = state.all.filter(todo => !todo.done).length
  },
  [types.ADD_TODO] (state, {text}) {
    // console.log(text)
    var todo = {text: text, done: false}
    state.all.push(todo)
    state.remaining ++
  },
  [types.CLEAR_COMPLETED] (state) {
    state.all = state.all.filter(todo=>!todo.done)
  },
  [types.EDIT_TODO] (state, {todo, value}) {
    todo.text = value
  },
  [types.DELETE_TODO] (state, {todo}) {
    console.log('deleted')
    state.all.splice(state.all.indexOf(todo), 1)
  },
  [types.TOGGLE_TODO] (state, {todo}) {
    todo.done = !todo.done
    state.remaining = state.all.filter(t => !t.done).length
    // console.log(state.remaining)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
