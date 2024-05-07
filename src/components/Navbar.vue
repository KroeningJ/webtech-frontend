<!-- Navbar.vue -->
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Notizplanner</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link v-for="(link, index) in links" :key="index" class="nav-link" :to="link.path">{{ link.text }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav-Bar',
  props: {
    links: Array // Definiere den Prop-Typ für die Navigationslinks
  }
}
</script>

<style scoped>
/* Stil für die Navbar-Komponente */
</style>
