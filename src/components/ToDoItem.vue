<template>
    <div class="container">
       <h3>{{ label }}</h3>
       <span>{{ timeLeft }}</span>
       <button v-on:click="removeCallback">Complete</button>
    </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export default {
    name: "ToDoItem",
    props: {
        label: String,
        deadline: Date,
        removeCallback: Function,
    },
    data: () => {
        return { 
            isComplete: false,
        }
    },
    computed: {
        timeLeft(){ 
            return dayjs(this.deadline).fromNow()
        },
    }
}
</script>

<style scoped>

</style>