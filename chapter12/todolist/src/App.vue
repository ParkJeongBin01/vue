<template>
  <div class="container">
    <Header />
    <router-view />
    <!-- todoList가 여기 있는 거임. -->
  </div>
</template>
<script setup>
import { reactive, computed, provide } from 'vue';
//’vue’라는 패키지에서 “reactive”,”computed”,”provide”를 가져다 쓰겠다.
import Header from '@/components/Header.vue';
//src/components/Header.vue에서 Header을 가져다 쓰겠다.
const states = reactive({
  todoList: [
    { id: 1, todo: 'ES6 학습 ', desc: '설명 1', done: false },
    { id: 2, todo: 'React 학습 ', desc: '설명 2', done: false },
    { id: 3, todo: 'ContextAPI 학습 ', desc: '설명 3', done: true },
    { id: 4, todo: '야구경기 관람 ', desc: '설명 4', done: false },
  ],
});
//reactive안에 있는 객체todoList인 배열을 states에 넣었다.

const addTodo = ({ todo, desc }) => {
  states.todoList.push({ id: new Date().getTime(), todo, desc, done: false });
};
//addTodo에 함수 호출 시 전달되는 객체에서 ‘todo’와 ‘desc’속성을 추출하여 각각의 변수에 할당합니다.
//이 때 todo와 desc는 객체분해할당으로 값(속성)을 추출합니다. 함수는 ‘todo’와 ‘desc’(값)속성을 포함하는 객체를 인자로 받아 ‘states.todoList’배열에 추가합니다. (push는 배열의 끝에 새로운 요소를 추가합니다.)
//※({todo, desc})로 쓸 수 있는 이유 : 원래는 ({todo:todo,desc:desc})인데 값과 속성명이 같으면 속성명만 써도 된다.

const updateTodo = ({ id, todo, desc, done }) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index] = { ...states.todoList[index], todo, desc, done };
};

const deleteTodo = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList.splice(index, 1);
};

const toggleDone = (id) => {
  let index = states.todoList.findIndex((todo) => todo.id === id);
  states.todoList[index].done = !states.todoList[index].done;
};

provide(
  'todoList',
  computed(() => states.todoList)
);
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
</script>
