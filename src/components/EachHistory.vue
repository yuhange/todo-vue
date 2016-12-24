<style src="todomvc-app-css/index.css"></style>

<template>
  <div>
    <h2 v-text="eachHistory.date"></h2>
    <section class="main" v-show="eachHistory.todos.length">
      <ul >
        <HistoryToDo v-for="todo in eachHistory.todos" :todo="todo"></HistoryToDo>
      </ul>
    </section>
    <footer class="footer" v-show="eachHistory.todos.length">
      <span class="todo-count">
        <strong>{{ remaining }}</strong>
        {{ remaining | pluralize('item') }} left
      </span>
    </footer>
  </div>
</template>

<script>
import HistoryToDo from './HistoryToDo'
// import { mapMutations } from 'vuex'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'EachHistory',
  components: {
    HistoryToDo
  },
  props: ['eachHistory'],
  computed: {
    todos() {
      return this.eachHistory.todos
    },
    remaining() {
      return this.todos.filter(todo=>!todo.done).length
    }
  },
  filters: {
    pluralize: (n, w) => n === 1 ? w : (w + 's'),
    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  }
}
</script>
