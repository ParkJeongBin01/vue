<template>
  <nav class="navbar navbar-expand-sm bg-light navbar dark">
    <span class="navbar-brand ps 2"> TodoList App</span>
    <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav link" to="/todos"> TodoList </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
//’vue’라는 패키지에서 ref라는 것을 가져다 쓰겠다.

const isNavShow = ref(false);

//isNavShow는 반응성 ref(false)를 넣었다.
</script>
