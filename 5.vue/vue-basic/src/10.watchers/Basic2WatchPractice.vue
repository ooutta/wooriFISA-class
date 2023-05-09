<script setup>
import { ref, watch } from 'vue'

// 질문에 따라 yes or no가 랜덤으로 반환됨
// 'https://yesno.wtf/api'

const question = ref('');
const answer = ref('질문 뒤에 ?를 꼭 작성하세요');


// watch(감시할 반응형 소스, 콜백함수, immediate)
// 값이 바뀔때마다 호출
watch(question, async (newQeustion, oldQuestion) => {
  if(newQeustion.indexOf('?') > -1) {
    answer.value = '생각 중...';

    try {
      const response = await fetch('https://yesno.wtf/api');
      const parsed = await response.json();
      answer.value = parsed.answer;
    } catch(error) {
      answer.value = 'Error! API에 연결할 수 없습니다..' + error;
  }
}

}, { immediate: true });

</script>

<template>
  <p>
    예/아니오로 대답할 수 있는 질문 ? 
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>