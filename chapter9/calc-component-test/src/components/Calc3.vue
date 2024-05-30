<template>
  <div>
    x: <input type="text" v-model.number="add.x" /><br />
    y: <input type="text" v-model.number="add.y" /><br />
    <button @click="calcAdd">계산</button><br />
    <div>결과 : {{ add.result }}</div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'Calc',
  setup() {
    const add = reactive({ x: 10, y: 20, result: 30 });

    const calcAdd = () => {
      add.result = add.x + add.y;
    };
    return { add, calcAdd };
  },
};
</script>
