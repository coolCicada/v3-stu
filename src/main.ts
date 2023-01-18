import { createApp } from 'vue'
// import App from './App.vue'
// import App from './components/HelloWorld.vue';
// import App from './components/Von.vue';
// import App from './components/Bind.vue';
// import App from './components/FofIf.vue';
// import App from './components/Form.vue';
// import App from './components/Parent.vue';
// import App from './components/Markdown.vue';
// import App from './components/FetchData.vue';
// import App from './components/Table.vue';
import App from '@/components/Count.vue';
import store from './store';
const app = createApp(App);
app.use(store as any).mount('#app')
