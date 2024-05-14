<template>
  <!-- Das Haupttemplate definiert die Struktur der HelloWorld-Komponente -->
  <div class="hello">
    <!-- Eine Überschrift, die den Wert der prop 'msg' verwendet -->
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// Exportiere die Komponente als Standardexport
export default {
  // Name der Komponente, der in der Vue-Entwicklungswerkzeugen angezeigt wird
  name: 'HelloWorld',
  // Definition der erwarteten Props für diese Komponente
  props: {
    // Die 'msg'-Prop wird als String erwartet
    msg: String
  }
}
</script>

<style scoped>
/* In diesem Abschnitt können spezifische Stile für diese Komponente definiert werden */
</style>
