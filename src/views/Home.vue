<template>
  <div class="home">
    <img alt="Notes 4.0 Logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Notes 4.0"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
