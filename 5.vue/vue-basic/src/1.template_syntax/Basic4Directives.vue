<script setup>
import { ref } from 'vue';

const seen = ref(true);

const url = ref('https://www.google.com');

const onClick = (event) => {
  event.preventDefault(); // 기본 동작 비활성화
  console.log('button clicked');
}

const onSubmit = () => console.log('submitted');
</script>

<template>
<!-- Chrome Developer Tools - Elements에서 바인딩 여부 확인 -->
<p v-if="seen">Now you see me</p>

<!-- html 내 attribute에 vue의 디렉티브 적용 가능 -->
<!-- <a v-bind:href="url">Go to Google</a> -->
<a :href="url">Go to Google</a>

<!-- submit 버튼으로 동작하는 form태그의 기본 동작(Default behavior)에 의해 화면이 새로고침됨 -->
<form action="someServerUrl">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

<!-- without modifier -->
<form>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="button" value="Submit" @click="onClick">
</form>

<!-- using modifier -->
<!-- Vue 문법. submit 버튼 클릭해도 새로고침 안되도록 submit.prevent 적용 -->
<form @submit.prevent="onSubmit"> 
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>

</template>

<style scoped></style>