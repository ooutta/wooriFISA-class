<template>
    <li class="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <span class="text-lg font-medium text-gray-300">{{ category_icons[todo.category] }}</span>
            <div>
                <h2 data-test="title" class="mb-0 text-lg font-bold text-gray-100 uppercase">{{ todo.title }}</h2>
                <p class="mt-2 text-base text-gray-200">{{ todo.summary }}</p>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <button class="w-8 text-xl font-semibold cursor-pointer"
            @click="removeTodo(todo.id)">✏️</button>
            <button class="w-8 text-xl font-semibold text-red-300 cursor-pointer"
            @click="editTodo(todo.id)">X</button>
        </div>
    </li>
</template>

<script setup>

// 부모로부터 데이터를 전달 받기 위한 준비
defineProps({
    todo: {
        type: Object, // 부모에서 자식에게 주는 데이터 타입 명시
        default() {
            return {
                id: '',
                category: '',
                title: '',
                summary: '',
            }
        }
    }
});

const category_icons = {
    todo: '📑',
    progress: '👀',
    done: '😀',
}

const emit = defineEmits(['remove-todo', 'edit-todo']);

const removeTodo = (todo) => {
    emit('remove-todo', todo);
}

const editTodo = (todo) => {
    emit('edit-todo', todo);
}

</script>

<style lang="scss" scoped>

</style>