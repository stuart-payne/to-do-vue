<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg=""/> -->
    <ToDoItem label="Random Item" :deadline="new Date(Date.now())" :removeCallback="log"></ToDoItem>
    <div>
      <to-do-item v-for="{ id, label, deadline } in mockData" :key="id" :label="label" :deadline="deadline" :removeCallback="log"/>
    </div>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'

export default {
  name: 'App',
  components: {
    ToDoItem
  },
  data: () => {
    return {
      mockData: [
        { id: 0, label: "Hi", deadline: new Date(Date.now())},
        { id: 1, label: "Hi", deadline: new Date(Date.now())},
        { id: 2, label: "Hi", deadline: new Date(Date.now())},
        { id: 3, label: "Hi", deadline: new Date(Date.now())}
      ]
    }
  },
  methods: {
    log: () => console.log("Hi")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
