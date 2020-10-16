<template>
  <header class="header">
    <nav class="menu">
      <ul class="menu-left">
        <li><img title="Tada todo list" src="../../assets/tada.png" height="60"></li>
        <li class="">TaDa ToDo List</li>
      </ul>
      <ul class="menu-right">
        <li><router-link to="/">Home</router-link> </li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/gifsearcher">Gif Searcher</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.header {
  border: solid 1px #000;
  background: #330000;
  color: #fff;
}

.header a {
  color: #fff;
  padding-right: 5px;
  text-decoration: none;
}

nav.menu{
  display: flex;
  justify-content: space-between;
}
nav.menu ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
nav.menu ul li{
  display: inline-block;
}
</style>


