<template>
  <div id="app" class="column is-offset-one-third is-one-third">
    <img alt="Vue logo" src="./assets/logo.png">
    <to-do-form v-if="isFormActive" :isActive="isFormActive" :cancelCallback="() => isFormActive = false" :submitCallback="addItem"/>
    <div class="block level">
        <button class="button is-primary" v-on:click="() => isFormActive = !isFormActive">Add Item</button>
        <div class="field horizontal">
            <label class="label">Filters</label>
            <div class="select">
                <select @change="onFilterChanged" v-model="selectedFilter">
                    <option v-for="filter in Object.keys(filters)" :key="filter">{{filter}}</option>
                </select>
            </div>
        </div>
    </div>
    <div>
        <to-do-item 
            v-for="{ id, label, deadline, completed } in displayList" 
            :key="id" 
            :id="id"
            :label="label" 
            :deadline="deadline" 
            :removeCallback="remove"
            :completedCallback="complete"
            :completed="completed"
        />
    </div>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue'
import ToDoForm from "./components/ToDoForm.vue"

export default {
  name: 'App',
  components: {
    ToDoItem,
    ToDoForm,
  },
  data: () => {
    return {
      todoData: [
        { id: 0, label: "Hi", deadline: new Date(Date.now()), completed: false},
        { id: 1, label: "Hi", deadline: new Date(Date.now()), completed: false},
        { id: 2, label: "Hi", deadline: new Date(Date.now()), completed: false},
        { id: 3, label: "Hi", deadline: new Date(Date.now()), completed: false}
      ],
      displayList: null,
      isFormActive: false,
      id: 4,
      filters: {},
      selectedFilter: "",
    }
  },
  created(){
      this.displayList = this.todoData;
      this.filters["None"] = () => this.displayList = this.todoData;
      this.filters["Completed"] = this.filterByCompleted;
      this.filters["Not Completed"] = this.filterByNotCompleted;
      console.log(this.filters);
  },
  methods: {
    log: () => console.log("Hi"),
    filterByCompleted() {
        this.displayList = this.todoData.filter(todo => todo.completed);
    },
    addItem(label, deadline) {
        this.todoData.push({
            id: this.id++,
            label: label,
            deadline: deadline,
            completed: false,
        });
    },
    filterByNotCompleted() {
        this.displayList = this.todoData.filter(todo => !todo.completed);
    },
    complete(id) {
        this.todoData.find(todo => todo.id === id).completed = true;
        this.updateDisplayList();
    },
    remove(id) {
        const ind = this.todoData.indexOf(this.todoData.find(todo => todo.id === id));
        this.todoData.splice(ind, 1);
        this.updateDisplayList();
    },
    onFilterChanged() {
        this.updateDisplayList();
    },
    updateDisplayList() {
        this.filters[this.selectedFilter]();
    }
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
