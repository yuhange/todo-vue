<style src="todomvc-app-css/index.css"></style>

<template>
  <div id="app">
  <section class="todoapp">
    <EachHistory  v-for="eachHistory in history" :eachHistory="eachHistory"></EachHistory>
  </section>
  </div>
</template>

<script>
import EachHistory from './EachHistory'
// import { mapMutations } from 'vuex'
import { mapGetters, mapActions } from 'vuex'

// const filters = {
//   all: todos => todos,
//   active: todos => todos.filter(todo => !todo.done),
//   completed: todos => todos.filter(todo => todo.done)
// }
export default {
  name: 'History',
  components: {
    EachHistory
  },
  data() {
    return {
      // visibility: 'all',
      // filters: filters
    }
  },
  computed: {
    ...mapGetters({
      history: 'history'
    }),
    // allChecked () {
    //   return this.history.every(todo => todo.done)
    // },
    // filteredTodos() {
    //   return filters[this.visibility](this.todos)
    // }
  },
  created () {
    this.$store.dispatch('getHistoryTodos')
    // this.$store.dispatch('getRemaining')
  },
  // filters: {
  //   pluralize: (n, w) => n === 1 ? w : (w + 's'),
  //   capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
  // }
}
</script>
