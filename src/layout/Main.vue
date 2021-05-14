<template>
  <NavBar title="TODO LIST" />
  <Tasks :tasks="tasks" />

  <router-view />
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Tasks from "../components/Tasks.vue";
export default {
  name: "Main",
  components: {
    NavBar,
    Tasks,
  },
  data: () => ({
    tasks: [],
  }),
  created() {
    this.tasks = [
      { id: 1, title: "Go to gymn", day: "May 1st", isfav: true },
      { id: 2, title: "Go to market", day: "May 4th1st", isfav: false },
      { id: 3, title: "Go to school", day: "May 10th", isfav: true },
      { id: 4, title: "Go to gymn", day: "May 1st", isfav: false },
    ];
  },
};
</script>
<style></style>
