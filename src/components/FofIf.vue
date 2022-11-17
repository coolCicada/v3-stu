<template>
  <button @click="show = !show">Toggle List {{ show ? 'show' : 'hidden'}}</button>
  <button @click="list.push(list.length + 1)">push number</button>
  <button @click="list.pop()">pop number</button>
  <button @click="list.reverse()">reverse list</button>
  <ul v-if="show && list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">
    List is not empty, but hidden.
  </p>
  <p v-else>
    List is empty.
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(true);
const list = ref([1, 2, 3]);
</script>
