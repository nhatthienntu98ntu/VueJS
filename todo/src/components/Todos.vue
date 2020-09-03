<template>
  <div class="columns is-multiline">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Add Your Todo</label>
            <div class="control">
              <input
                :value="titleTodo"
                @input="changeTitleTodo"
                class="input"
                type="text"
                placeholder="Enter Yours Todos...."
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="column is-6 is-offset-3" v-for="(todo, index) in todos" :key="todo.id">
      <div @click="changeCompleted(todo.id)" class="box todo-box">
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        <button
          @click.stop="deleteTodo(todo.id)"
          class="button is-danger is-small is-pulled is-pulled-right"
          v-if="todo.completed"
        >Delelte</button>
        <button
          @click.stop="editTodo(index)"
          class="button is-danger is-small is-pulled is-pulled-right mg"
          v-if="todo.completed"
        >Edit</button>
      </div>
    </div>
  </div>
</template>
<script>
import shortid from "shortid";
export default {
  name: "Todos",
  props: ["todos", "titleTodo"],
  data() {
    return {
      active: 0,
      indexEdit: -1,
    };
  },
  methods: {
    onSubmit() {
      if (this.active == 0) {
        const new_todo = {
          title: this.titleTodo,
          completed: false,
          id: shortid.generate(),
        };
        this.$emit("addTodo", new_todo);
      } else {
        this.$emit("editTodo", this.indexEdit);
        this.active = 0;
      }
    },
    changeCompleted(id) {
      this.$emit("changeCompleted", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
    editTodo(index) {
      this.active = 1;
      this.indexEdit = index;
      this.$emit("bindTodo", index);
    },
    changeTitleTodo(e) {
      this.$emit("changeTitleTodo", e);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
.todo-box {
  transition: all 0.3s;
}
.todo-box:hover {
  cursor: pointer;
  background-color: #f0f3bd;
  transform: scale(1.1);
}
.mg {
  transform: translateX(-5px);
}
</style>
