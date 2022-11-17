<template>
  <li>{{ todo.text }}</li>
</template>

<script setup lang="ts">
interface TodoItem {
  todo: {
    text: string,
    id: number,
  }
}
withDefaults(defineProps<TodoItem>(), {
  todo: () => ({ id: 100, text: '??'})
})
</script>
