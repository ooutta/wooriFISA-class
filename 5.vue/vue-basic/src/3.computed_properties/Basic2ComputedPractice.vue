<template>
    <div>
        <input v-model="searchQuery" type="text" placeholder="Search the fruits">
        <div v-for="result in resultQuery" :key="result.id">
            <div class="fruit-name">
                {{ result.name }}
            </div>
            <div class="fruit-image">
                <img :src="result.image">
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const searchQuery = ref('');

// vue에서 관리하는 속성이 아니다.
const fruits = [
    {
        id: 1,
        name: "Apple",
        image: "http://placehold.it/320x100/E8117F/ffffff?text=Apple",
    },
    {
        id: 2,
        name: "Melon",
        image: "http://placehold.it/320x100/A0D8B3/ffffff?text=Melon",
    },
    {
        id: 3,
        name: "Avocado",
        image: "http://placehold.it/320x100/7C96AB/ffffff?text=Avocado",
    },
];

const fruitData = ref(fruits);

const resultQuery = computed(() => {
    if(searchQuery.value) { // 검색창에 어떤 텍스트가 있을 때
        return fruitData.value.filter(fruit => {
            return searchQuery.value.toLowerCase().split(' ').every(
                value => fruit.name.toLowerCase().includes(value)
            );
        });
    } else {
        return fruitData.value;
    }

});

// const imgSrc = computed((path) => {
//     console.log(path);
//     return path;
// })

// const searchFunc = computed(() => {
//   return users.name ===  searchQuery? true : false;
// });


// const user = reactive({ users });

</script>

<style scoped>
input {
    margin-bottom: 20px;
    padding: 1rem;
    height: 2rem;
    font-size: 1.25rem;
    border: 2px dashed gray;
    outline: none;
}

.fruit-name {
    font-size: 1.25rem;
}
</style>