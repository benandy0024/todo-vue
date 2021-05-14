<template>
  <!-- <h1>{{ title }}</h1> -->
  <div class="nav">
    <ul>
      <li>
        <router-link class="active" to="/about">{{ title }}</router-link>
      </li>

      <li class="right">
        <router-link to="/about"><Button title="Add" /></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
export default {
  name: "NavBar",
  props: ["title"],
  components: {
    Button,
  },
};
</script>
<style>
.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3a98fe;
}

.nav ul li {
  float: left;
}

.nav ul li a {
  display: block;
  color: #fff;
  padding: 14px 16px;
  text-decoration: none;
  list-style: none;
  font-size: 1.5rem;
  justify-self: flex-start;
}
/* .nav ul li a:hover:not(.active) {
} */

.nav ul li a.active {
  background-color: #1a1a1a;
}

.nav ul li.right {
  float: right;
}
@media screen and (max-width: 600px) {
  .nav ul li.right,
  .nav ul li {
    float: none;
  }
}
</style>
