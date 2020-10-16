<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed">
      {{todo.title}}
      <button @click="deleteFromList(todo.id)">X</button>
  </div>
</template>

<script>

export default {
  name: "TodoItem",
  //props: ["todo"],
  //setup(context, props) {
  setup( props,{attrs,emit}) {
    const todo = attrs.todo;
    function markComplete() {
      todo.completed = !todo.completed;
    }
    function deleteFromList(id) {
      emit('del-todo', id);
    }
    return {
      deleteFromList,
      markComplete,
      todo,
    }
  }
}
</script>

<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>

