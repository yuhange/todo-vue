<style src="todomvc-app-css/index.css"></style>
<template>
<li class="todo" :class="{completed: todo.done, editing: editing}">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo({ todo: todo })">
      <label v-text="todo.text" @click="editing = true"></label>
      <button class="destroy" @click="deleteTodo({ todo: todo })">  删除   </button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
</li>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: 'ToDo',
  props: ['todo'],
  data () {
    return {
      editing: false
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods: {
    doneEdit (e) {
      const value = e.target.value.trim()
      console.log(value)
      const { todo } = this
      this.$store.dispatch('editTodo', todo, value)
      this.editing = false
    },
    cancelEdit (e) {
      e.target.value = this.todo.text
      this.editing = false
    },
    toggleTodo() {
      const {todo} = this
      this.$store.dispatch('toggleTodo', todo)
    },
    deleteTodo() {
      const {todo} = this
      this.$store.dispatch('deleteTodo', todo)
    }
  }
}
</script>
