<script setup>
import { ref, reactive } from 'vue'

// reactive() : 반응형 상태 선언. Map, Set과 같은 컬렉션 유형에만 작동
// counter : reactive()로 생성된 객체로, 일반 객체처럼 작동하는 JS Proxy.
let counter = reactive({ count : 0 })
counter.count++;

// 반응형 연결 끊어짐. counter.value = 0으로 초기화됨.
counter = reactive({ counter : 0});
  
// ref() : string, number, boolean과 같은 기본 유형에서도 사용하기 위함 
let message = ref('안녕 Vue!');

// .value 속성 : 내부 값 노출하는 객체 생성
message.value = '변경된 메세지';

</script>

<template>
  <h1>{{ message }}</h1>
  <p>Counter : {{ counter.count }}</p>
</template>