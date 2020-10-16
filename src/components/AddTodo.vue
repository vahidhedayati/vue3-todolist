<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add Todo...">
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "AddTodo",

  setup(props,{emit}) {
    const title = ref('');
    function addTodo() {
      const newTodo = {
        title: title.value,
        completed: false
      }
      // Send up to parent
      emit('add-todo', newTodo);

      title.value = '';
    }
    return {title,addTodo}
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;
  }
</style>


