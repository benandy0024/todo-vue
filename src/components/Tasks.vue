<template>
  <div
    v-for="task in tasks"
    :key="task.id"
    class="task"
    :class="{ fav: task.isfav }"
  >
    <Task :task="task" />
  </div>
</template>
<script>
import Task from "../components/Task.vue";
export default {
  name: "Tasks",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
};
</script>
<style></style>
