<template>
    <div class="box level p-2 has-background-primary-light">
        <div class="level-left">
            <h3 class="mx-1">{{ label }}</h3>
        </div>
        <div class="level-right">
            <span class="mx-4">{{ timeLeft }}</span>
            <button v-if="!completed" class="button is-success is-outlined mx-1" v-on:click="complete">
                <span class="icon is-small">
                    <font-awesome-icon icon="check" ></font-awesome-icon>
                </span>
            </button>
            <button class="button is-danger is-outlined mx-1" v-on:click="remove">
                <span class="icon is-small">
                    <font-awesome-icon icon="times" ></font-awesome-icon>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

export default {
    name: "ToDoItem",
    props: {
        id: Number,
        label: String,
        deadline: Date,
        completedCallback: Function,
        removeCallback: Function,
        completed: Boolean,
    },
    computed: {
        timeLeft(){ 
            return dayjs(this.deadline).fromNow()
        },
    },
    methods: {
        complete() {
            this.completedCallback(this.id);
        },
        remove() {
            this.removeCallback(this.id);
        }
    }
}
</script>

<style scoped>

</style>