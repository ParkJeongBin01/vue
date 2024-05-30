<template>
  <div>
    x: <input type="text" v-model.number="add.x" /><br />
    y: <input type="text" v-model.number="add.y" /><br />
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Calc',
  setup() {
    const add = reactive({ x: 10, y: 20 });
    const result = computed(() => {
      return add.x + add.y;
    });
    return { add, result };
  },
};
</script>
