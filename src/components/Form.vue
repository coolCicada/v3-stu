<template>
  <h2>Text Input</h2>
  <input type="text" v-model="text"> {{ text }}
  <h2>Checkbox</h2>
  <input type="checkbox" v-model="checked" id="checkbox">
  <label for="checkbox">Checked: {{ checked }}</label>
  <h2>Multi Checkbox</h2>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <p>
    checked name: 
    <pre>{{ checkedNames }}</pre>
  </p>
  <h2>Radio</h2>
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br />
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <h2>Select</h2>
  <select id="myselect" v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>selected: {{ selected }}</span>
  <h2>Multi Select</h2>
  <select id="mymulti" multiple v-model="multiSelected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>selected: {{ multiSelected }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('Edit me');
const checked = ref(true);
const checkedNames = ref(['Jack']);
const picked =ref('One')
const selected = ref('A');
const multiSelected = ref([]);
</script>
