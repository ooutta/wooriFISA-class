<script setup>
import { ref } from 'vue'

const count = ref(0) // 초기화

function increment() {
  count.value++;
}
</script>

<template>
  <!-- 이 버튼이 작동하도록 만들어 봅시다 -->
  <h2>Counter</h2>
  <p>{{ count }}</p>
  <button @click='increment'>increment</button>
</template>

<style>
body {
  text-align: center;
}

p {
  font-size: 3em;
}
</style>