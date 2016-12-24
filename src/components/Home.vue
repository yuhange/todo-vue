<style src="todomvc-app-css/index.css"></style>

<template>
  <div id="app">
  <section class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length">
        <input class="toggle-all"
          type="checkbox"
          :checked="allChecked"
          @change="toggleAll({ done: !allChecked })">
      <ul >
        <ToDo v-for="todo in filteredTodos" :todo="todo"></ToDo>
      </ul>
    </section>

    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :href="'#/' + key"
            :class="{ selected: visibility === key }"
            @click="visibility = key">{{ key | capitalize }}</a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearCompleted">
        Clear completed
      </button>
    </footer>
    </section>
  </div>
</template>

<script>
import ToDo from './ToDo'
import { mapMutations } from 'vuex'
import { mapGetters, mapActions } from 'vuex'

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
export default {
  name: 'app',
  components: {
    ToDo
  },
  data() {
    return {
      visibility: 'all',
      filters: filters,
      // todos:[]
    }
  },
  computed: {
    ...mapGetters({
      todos: 'allTodos',
      remaining: 'remaining'
    }),
    allChecked () {
      return this.todos.every(todo => todo.done)
    },
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length
    }
  },
  created () {
    this.$store.dispatch('getAllTodos')
  },
  methods: {
    addTodo(e) {
      var text = e.target.value
      // console.log(text)
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    },
    clearCompleted() {
      this.$store.dispatch('clearCompleted')
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
