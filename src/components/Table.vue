<template>
  <form>
    Search <input v-model="searchQuery">
  </form>
  <GridC
    :columns="gridColumns"
    :filter-key="searchQuery"
    :data="gridData"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GridC from './Grid.vue';

const searchQuery = ref('');
const gridColumns = ['name', 'power'];
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>
