<template>
  <div @click="add">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/lvuex";

const store = useStore();
const count = computed(() => store.state.count);

function add() {
  store.commit('add');
}
</script>
