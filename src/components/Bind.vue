<template>
  <p>
    <span :title="message">
      message with hover!!!!
    </span>
  </p>
  <p
    :class="{ red: isRed }"
    @click="toggleRed"
  >
    RED
  </p>
  <p
    :style="{ color }"
    @click="toggleColor"
  >
    GREEN
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref('message with hover');
const isRed = ref(true);
const color = ref('green');

function toggleRed() {
  isRed.value = !isRed.value;
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green';
}
</script>

<style>
.red {
  color: red;
}
</style>
