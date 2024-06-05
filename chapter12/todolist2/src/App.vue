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
import axios from 'axios';

const BASEURI = '/api/todos';
const states = reactive({ todoList: [] });

// const states = reactive({
//   todoList: [
//     { id: 1, todo: 'ES6 학습 ', desc: '설명 1', done: false },
//     { id: 2, todo: 'React 학습 ', desc: '설명 2', done: false },
//     { id: 3, todo: 'ContextAPI 학습 ', desc: '설명 3', done: true },
//     { id: 4, todo: '야구경기 관람 ', desc: '설명 4', done: false },
//   ],
// });
//reactive안에 있는 객체todoList인 배열을 states에 넣었다.

//TodoList 목록을 조회합니다.
const fetchTodoList = async () => {
  try {
    const response = await axois.get(BASEURI);
    if (response.states === 200) {
      states.todoList = response.data;
    } else {
      alert('데이터 조회 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
};

//새로운 TodoItem을 추가합니다.
const addTodo = async ({ todo, desc }, successCallback) => {
  try {
    const payload = { todo, desc };
    const response = await axios.post(BASEURI, payload);
    if (response.status === 201) {
      states.todoList.push({ ...response.data, done: false });
      successCallback();
    } else {
      alert('Todo 추가 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
};
//addTodo에 함수 호출 시 전달되는 객체에서 ‘todo’와 ‘desc’속성을 추출하여 각각의 변수에 할당합니다.
//이 때 todo와 desc는 객체분해할당으로 값(속성)을 추출합니다. 함수는 ‘todo’와 ‘desc’(값)속성을 포함하는 객체를 인자로 받아 ‘states.todoList’배열에 추가합니다. (push는 배열의 끝에 새로운 요소를 추가합니다.)
//※({todo, desc})로 쓸 수 있는 이유 : 원래는 ({todo:todo,desc:desc})인데 값과 속성명이 같으면 속성명만 써도 된다.

//기존 TodoItem을 변경합니다.
const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
  try {
    const payload = { id, todo, desc, done };
    const response = await axios.put(BASEURI + '/${id}', payload);
    if (response.status === 200) {
      let index = states.todoList.index((todo) => todo.id === id);
      states.todoList[index] = payload;
      successCallback();
    } else {
      alert('Todo 변경 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(BASEURI + '/${id}');
    console.log(response.status, response.data);
    if (response.status === 200) {
      let index = states.todoList.findIndex((todo) => todo.id === id);
      states.todoList.splice(index, 1);
    } else {
      alert('Todo 삭제 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
};

const toggleDone = async (id) => {
  try {
    let todo = states.todoList.find((todo) => todo.id === id);
    let payload = { ...todo, done: !todo, done };
    const response = await axois.put(BASEURI + '/${id}', payload);
    if (response.status === 200) {
      todo.done = payload.done;
    } else {
      alert('Todo 완료 변경 실패');
    }
  } catch (error) {
    alert('에러발생 :' + error);
  }
};

provide(
  'todoList',
  computed(() => states.todoList)
);
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo });
fetchTodoList();
</script>
