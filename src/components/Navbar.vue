<template>
  <!-- Definiere das Navbar-Element mit Bootstrap-Klassen -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Haupt-Brand-Link der Navbar -->
      <a class="navbar-brand" href="#">Notizplanner</a>
      <!-- Toggle-Button für mobile Ansichten -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Container für die Navbar-Inhalte (wird bei Bedarf eingeklappt) -->
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- Iteriere über die übergebenen Navigationslinks und erstelle router-links -->
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
    links: Array // Definiere den Prop-Typ für die Navigationslinks als Array
  }
}
</script>

<style scoped>
/* Hier können spezifische Stile für die Navbar-Komponente definiert werden */
</style>
