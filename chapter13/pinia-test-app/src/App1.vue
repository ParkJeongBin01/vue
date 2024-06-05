<template>
  <div>
    <h2>TodoList 테스트(Option API)</h2>
    <hr />
    할일 추가 :
    <input type="text" v-model="todo" />
    <button @click="addTodoHandler">추가</button>
    <hr />
    <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id">
        <span style="cursor: pointer" @click="toggleDone(todoItem.id)"> {{ todoItem.todo }} {{ todoItem.done ? '(완료)' : '' }} </span>
        &nbsp;&nbsp;&nbsp;
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>
    <div>완료된 할일 수 : {{ doneCount }}</div>
  </div>
</template>
<script>
import { useTodoListStore } from '@/stores/todoList.js';
import { mapState, mapActions } from 'pinia';
export default {
  name: 'App1',
  data: () => ({ todo: '' }),
  computed: {
    ...mapState(useTodoListStore, ['todoList', 'doneCount']),
  },
  methods: {
    ...mapActions(useTodoListStore, ['addTodo', 'deleteTodo', 'toggleDone']),
    addTodoHandler() {
      this.addTodo(this.todo);
      this.todo = '';
    },
  },
};
</script>
