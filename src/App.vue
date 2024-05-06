<template>
  <navbar></navbar>
  <router-view/>
</template>
<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: { Navbar }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #365c24;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #365c24;
}

#nav a.router-link-exact-active {
  color: #365c24;
}
</style>
