<template>
    <form>
        <!-- 
            비밀번호의 자리수가 4글자 미만에면 Weak
            7글자 미만이면 Faily Strong
            그 이상이면 Strong이 출력되도록
        -->

        <label for="password">비밀번호</label>
        <input v-model="searchQuery" placeholder="비밀번호를 입력하세요" id="password"/>
        <p class="weak" v-if="searchQuery.length < 4">Weak Password</p>
        <p class="fairly-strong" v-else-if="searchQuery.length < 7">Fairly Strong Password</p>
        <p class="strong" v-else>Strong Password</p>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

</script>

<style scoped>
label {
    font-size: 1.25rem;
    display: block;
    margin-bottom: 0.5rem;
}

input {
    margin-bottom: 20px;
    padding: 1rem;
    height: 2rem;
    font-size: 1.25rem;
    border: 2px dashed gray;
    outline: none;
}

p {
    font-size: 1.5rem;
}

.weak {
    color: red;
}

.fairly-strong {
    color: coral;
}

.strong {
    color: rgb(14, 218, 17);
}
</style>
