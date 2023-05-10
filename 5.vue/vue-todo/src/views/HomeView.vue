<script setup>
import AppHeader from '../components/AppHeader.vue';
import AppSection from '../components/AppSection.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { ref } from 'vue';

const dummyTodos = ref([
    {
      id: 1,
      title: "물 마시기",
      summary: '물을 마신다',
      category: 'todo',
    },
    {
      id: 2,
      title: "콜라 마시기",
      summary: '콜라를 마신다',
      category: 'progress',
    },
    {
      id: 3,
      title: "우유 마시기",
      summary: '우유를 마신다',
      category: 'done',
    }
]);

const newTodoId = dummyTodos.value.length + 1;

const addTodo = (newTodo) => {
    dummyTodos.value.push({id: newTodoId, title: newTodo.title.value, summary: newTodo.summary.value, category: newTodo.category.value});
    // console.log(dummyTodos.value);
}

const removeTodo = (todo) => {
    console.log(todo);
    dummyTodos.value = dummyTodos.value.filter((t) => t.id != todo);
    // dummyTodos.value.find(todo);
}
</script>

<template>
    <DefaultLayout>
        <AppHeader />
        <AppSection :todos="dummyTodos" @add-todo="addTodo" @remove-todo="removeTodo"/>
    </DefaultLayout>
</template>