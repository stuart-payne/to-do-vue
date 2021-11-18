<template>
    <div class="block is-three-fifthss is-offset-one-fifth">
        <form class="box" onsubmit="return false">
            <div class="field">
                <label class="label" for="taskName">Name</label>
                <div class="control">
                    <input class="input" type="text" id="Name" v-model="taskName" placeholder="Enter task name..."/>
                </div>
            </div>
            <div class="field">
                <label class="label" for="deadlineDate">Deadline</label>
                <div class="control">
                    <input class="input" type="date" id="deadlineDate" v-model="date"/>
                </div>
            </div>
            <div class="level">
                <button class="button is-outlined is-danger" @click="cancelCallback">Cancel</button>
                <button class="button is-success" @click="submit"> Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ToDoForm",
    props: {
        submitCallback: Function,
        cancelCallback: Function,
    },
    data(){
        return {
            taskName: null,
            date: null,
        }
    },
    methods: {
        submit() {
            this.submitCallback(this.taskName, new Date(this.date));
            this.cancelCallback();
        }
    }
}
</script>

<style scoped>
</style>