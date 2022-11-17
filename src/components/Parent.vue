<template>
  <ol>
    <TodoItem
      v-for="item in groceryList"
      v-bind:todo="item"
      :key="item.id"
    ></TodoItem>
  </ol>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue';

const groceryList = ref([
  { id: 0, text: 'one' },
  { id: 1, text: 'two' },
  { id: 2, text: 'three' },
]);
</script>
