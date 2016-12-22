export const state = {
  todos:[
      {
        text: 'vuex',
        done: true
      },
      {
        text: 'mongodb',
        done: false
      }]
};

export const mutations = {
  addTodo (state, { text }) {
  	console.log(text)
    state.todos.push({
      text,
      done: false
    })
  },

  deleteTodo(state, {todo}) {
  	state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo(state, {todo, value}) {
  	todo.text = value
  },

  toggleTodo(state, {todo}) {
  	todo.done = !todo.done
  },

  toggleAll(state, {done}) {
  	state.todos.forEach((todo) => {
  		todo.done = done
  	})
  },

  clearCompleted(state) {
  	state.todos = state.todos.filter(todo=>!todo.done)
  }

}