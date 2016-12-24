<style src="todomvc-app-css/index.css"></style>
<template>
<li class="todo">
    <div class="view">
      <label v-text="todo.text"></label>
    </div>
</li>
</template>

<script>
export default {
  name: 'HistoryToDo',
  props: ['todo'],
}
</script>
