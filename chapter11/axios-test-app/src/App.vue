<template>
  <div>
    <h2>콘솔을 확인합니다 .</h2>
  </div>
</template>
<script setup>
import axios from 'axios';

const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

//4건의 목록을 조회한 후 첫 번째, 두 번쨰 할일을 순차적으로 조회합니다.
const requestAPI = () => {
  //const url = 'http://localhost:3000/todos/1';
  //const url = '/api/todos/1';
  //axios.get(url).then((response) => {
  //console.log('# 응답객체 : ', response);
  let todoList = [];
  axios
    .get(listUrl)
    .then((response) => {
      todoList = response.data;
      console.log('# TodoList : ', todoList);
      return todoList[0].id;
    })
    .then((id) => {
      return axios.get(todoUrlPrefix + id);
    })
    .then((response) => {
      console.log('## 첫 번째 Todo : ', response.data);
      return todoList[1].id;
    })
    .then((id) => {
      axios.get(todoUrlPrefix + id).then((response) => {
        console.log('## 두 번째 Todo : ', response.data);
      });
    });
};
requestAPI();
</script>
