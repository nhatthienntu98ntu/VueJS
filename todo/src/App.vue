<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <!-- todos -->
        <todos
          :titleTodo="titleTodo"
          @bindTodo="bindTodo"
          @changeTitleTodo="changeTitleTodo"
          @editTodo="editTodo"
          @deleteTodo="deleteTodo"
          @changeCompleted="changeCompleted"
          @addTodo="addTodo"
          :todos="todos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import Todos from "./components/Todos";
export default {
  name: "App",
  data() {
    return {
      todos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false,
        },
      ],
      titleTodo: "",
      indexEdit: -1,
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
      this.titleTodo = "";
    },
    changeCompleted(id) {
      this.todos = this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    editTodo(index) {
      const todoEdit = this.todos[index];
      todoEdit.title = this.titleTodo;
      this.$set(this.todos, index, todoEdit);
      this.titleTodo = "";
      todoEdit.completed = !todoEdit.completed;
      this.$set(this.todos, index, todoEdit);
    },
    changeTitleTodo(e) {
      this.titleTodo = e.target.value;
    },
    bindTodo(index) {
      this.indexEdit = index;
      this.titleTodo = this.todos[index].title;
    },
  },
  components: {
    Todos,
  },
};
</script>

<style>
#app {
  background-color: #f8961e;
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
}
</style>
