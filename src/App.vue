<template>
  <!-- Haupt-Template, das die App-Komponente definiert -->
  <div id="app">
    <!-- Eingebundene Navbar-Komponente mit übergebenen Navigationslinks -->
    <navbar :links="navLinks"></navbar>
    <!-- Router-View, um die Inhalte der aktiven Route anzuzeigen -->
    <router-view/>
  </div>
</template>

<script>
// Importiere die Navbar-Komponente aus dem angegebenen Pfad
import Navbar from './components/Navbar'

export default {
  // Name der Hauptkomponente
  name: 'App',
  // Registriere die Navbar-Komponente für die Verwendung in dieser App
  components: { Navbar },
  // Data-Block für die Dateninitialisierung
  data () {
    return {
      // Array von Navigationslinks, die der Navbar-Komponente übergeben werden
      navLinks: [
        {
          text: 'Home',
          path: '/'
        },
        {
          text: 'Neue Notiz anlegen',
          path: '/neue-notiz-anlegen'
        },
        {
          text: 'Notizen',
          path: '/notizen'
        },
        {
          text: 'Login',
          path: '/user-login'
        }
      ]
    }
  }
}
</script>

<style>
/* Globale Stile für die gesamte App */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #365c24; /* Textfarbe für die gesamte App */
}

/* Stile für die Navbar innerhalb der App */
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #365c24; /* Farbe der Navigationslinks */
}

/* Stile für den aktiven Router-Link in der Navbar */
#nav a.router-link-exact-active {
  color: #365c24; /* Farbe für den aktiven Navigationslink */
}
</style>
