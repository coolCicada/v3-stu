<template>
  <div class="editor">
    <textarea
      class="input"
      :value="input"
      @input="update"
    ></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked';
import { ref, computed } from 'vue';
import { debounce } from 'lodash-es';

const input = ref('# hello');

const output = computed(() => marked(input.value));

const update = debounce((e: any) => {
  input.value = e.target.value;
}, 100);
</script>

<style scoped>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px  solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  padding: 20px;
}

:deep(code) {
  color: #f66;
}
</style>
