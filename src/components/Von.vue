<template>
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">reverse message</button>
  <button @click="message += '!'">append !</button>
  <a href="http://www.baidu.com" @click.prevent="notify">
    link test
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const message = ref("msg");
function reverseMessage() {
  message.value = message.value.split('').reverse().join('');
}

function notify() {
  alert('navigation was prevented.');
}
</script>
