<template>
  <h1>Lastes Vue Core Commits</h1>
  <template v-for="branch in branches">
    <input
      type="radio"
      :id="branch"
      :value="branch"
      v-model="currentBranch"
    >
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ currentBranch }}</p>
  <ul>
    <li v-for="{ html_url, sha, author, commit } in commits">
      <a :href="html_url" target="_black" class="commit">
        {{ sha.slice(0, 7) }}
      </a>
      -
      <span class="message">
        {{ truncate(commit.message) }}
      </span>
      <br>
      by
      <span class="author">
        <a :href="author.html_url" target="_black">
          {{ commit.author.name }}
        </a>
      </span>
      at
      <span class="date">
        {{ formatDate(commit.author.date) }}
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat'];

const currentBranch = ref(branches[0]);
const commits = ref(null) as any;

watchEffect(async () => {
  const url = `${API_URL}${currentBranch.value}`;
  commits.value = await (await fetch(url)).json();
});

function truncate(v: any) {
  const newline = v.indexOf('\n');
  return newline > 0 ? v.slice(0, newline) : v;
}

function formatDate(v: any) {
  return v.replace(/T|Z/g, ' ');
}
</script>

<style>
a {
  text-decoration: none;
  color: #42b883;
}

li {
  line-height: 1.5em;
  margin-bottom: 20px;
}

.author,
.date {
  font-weight: bold;
}
</style>
