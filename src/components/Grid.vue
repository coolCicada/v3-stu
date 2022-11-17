<template>
  <table v-if="filteredData.length">
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key}"
        >
          {{ capitalize(key) }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Column } from './types';

interface Props {
  data: Array<Column>,
  columns: Array<string>,
  filterKey: string,
}

const props = defineProps<Props>();

const sortKey = ref('');
const sortOrdersV = {} as any;
props.columns.forEach((item: string) => {
  sortOrdersV[item] = 1;
});
const sortOrders = ref(sortOrdersV);

const filteredData = computed(() => {
  let { data, filterKey } = props;
  if (filterKey) {
    filterKey = filterKey.toLowerCase();
    data = data.filter((row: Column) => {
      return Object.keys(row).some((key: string) => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
      })
    })
  }

  const key = sortKey.value;
  if (key) {
    const order = sortOrders.value[key];
    data = data.slice().sort((a: Column, b: Column) => {
      const ak = a[key];
      const bk = b[key];
      return (ak === bk ? 0 : a > b ? 1 : -1) * order;
    })
  }

  return data;
})

function sortBy(key: string) {
  sortKey.value = key;
  sortOrders.value[key] *= -1;
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>
<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: palegoldenrod;
  cursor: pointer;
  user-select: none;
}
</style>