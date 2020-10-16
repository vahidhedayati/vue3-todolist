<template>
  <div class="nav">
    <!--button @click="addToList()">Add new item</button -->
    <AddTodo v-on:add-todo="addTodo"/>

    <div class="buttons">
      <label for="split-color">Split Color</label>
      <input id="split-color" type="checkbox" v-model="splitColor" />
    </div>

    <div class="buttons">
      <label for="fetch-list">Fetch List</label>
      <input
        id="fetch-list"
        type="checkbox"
        :disabled="shouldFetch"
        v-model="shouldFetch"
      />
    </div>
    <div class="mouse-position">X: {{ x }} | Y: {{ y }}</div>
  </div>
  <div v-if="!splitColor">
    <div v-bind:key="todo.id" v-for="todo in todos" >
      <TodoItem v-bind:todo="todo" v-on:del-todo="deleteFromList(todo.id)"  />
    </div>
  </div>
  <div v-if="splitColor">
    <ul v-for="(todos, key) in todosList" :key="key">
      <li v-for="todo in todos" :key="todo.id" :class="`list-${key}`">
        <span>{{ todo.title }}  Key({{key}})</span>
        <button @click="deleteFromList(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodoList } from "../composable/useTodoList";
import { useMousePosition } from "../composable/useMousePosition";
import { computed, ref } from "vue";
import AddTodo from "@/components/AddTodo";
import TodoItem from "@/components/TodoItem";

export default {
  components: {
    AddTodo,
    TodoItem
  },
  setup() {
    const { todos, shouldFetch, deleteFromList, addToList } = useTodoList();
    const { x, y } = useMousePosition();


    const splitColor = ref(false);


    const todosList = computed(() => {
      if (splitColor.value) {
        const halfList = todos.value.length / 2;
        return [todos.value.slice(0, halfList), todos.value.slice(halfList)];
      }
      return [todos.value];
    });


    function addTodo(newTodo) {
      //calls method in composable/useTodoList
      addToList(newTodo)
    }

    return {
      // useTodoList
      todosList,
      shouldFetch,
      deleteFromList,
     // addToList,
      todos,


      // ToDo component
      splitColor,

      // useMousePosition
      x,
      y,

      addTodo,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
button {
  padding: 14px;
}
.nav {
  position: sticky;
  top: 0;
  background: white;
  z-index: 99;
  display: flex;
  align-items: center;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  padding: 14px;
  margin: 8px 0;
  list-style-type: none;
  position: relative;
  overflow: hidden;
  background-color: rgb(180, 202, 139);
}
ul li button {
  position: absolute;
  right: 8px;
  top: calc(50% - 18px);
  padding: 8px;
}
.list-1 {
  background-color: rgb(93, 136, 65);
}
.buttons {
  display: inline-block;
  padding: 8px;
  border: 1px dotted black;
}
.buttons label {
  margin-right: 8px;
}
.buttons input {
  width: 30px;
  height: 30px;
  margin: 0;
  vertical-align: middle;
}
</style>
