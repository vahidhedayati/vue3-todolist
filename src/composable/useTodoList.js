import { ref, watchEffect } from "vue";
import axios from 'axios';

export function useTodoList() {
  let todos = ref([
    { id: 1, title: "Hello" , completed: false},
    { id: 2, title: "Composition" , completed: false},
    { id: 3, title: "API" , completed: false}
  ]);

  let shouldFetch = ref(false);

  watchEffect(() => {
    if (shouldFetch.value) {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=25')
          .then(res => todos.value = res.data)
          .catch(err => console.log(err));
    }
  });

  function deleteFromList(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res =>{
          if (res.status===200) {
            todos.value = todos.value.filter(todo => todo.id !== id)
          }
        })
        .catch(err => console.log(err));
  }

  function addToList(newTodo) {
    const { title, completed } = newTodo;

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed
    })
        .then(res => todos.value.push(res.data))
        .catch(err => console.log(err));
  }

  return {
    todos,
    shouldFetch,
    deleteFromList,
    addToList
  };
}
/*fetch("http://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    for (let { id, title } of json) {
      todos.value.push({
        id: `api-${id}`,
        title
      });
    }
  });
  */