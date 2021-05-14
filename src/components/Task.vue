<template>
  <div class="task-card" :class="{ fav: task.isfav }">
    <h1>{{ task.title }}</h1>
    <h3>{{ task.day }}</h3>
  </div>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  data: () => ({}),
};
</script>
<style>
.task-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2px 16px;
  margin: 15px;
  background-color: #fff;
  border-left: 5px solid #3a98fe;
}
.task-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.fav {
  text-decoration: line-through;
}
</style>
