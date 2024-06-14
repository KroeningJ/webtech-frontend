<template>
  <div id="container">
    <h1>About Notes 4.0</h1>
    <h2>Welcome to Notes 4.0, a simple and intuitive note-taking application. Here's how to use it:</h2>
    <ul>
      <li><strong>Home:</strong> Navigate to the home page by clicking on the 'Home' link in the navigation bar.</li>
      <li><strong>Notes:</strong> View all your notes by clicking on the 'Notes' link in the navigation bar. Here, you can also delete any note by clicking on the 'Delete' button.</li>
      <li><strong>New Note:</strong> Create a new note by clicking on the 'New Note' link in the navigation bar and then on the appearing button. Fill in the date, time, note entry and select a note-card color, then click on the 'Create' button. You can reset the form by clicking on the 'Reset' button.</li>
    </ul>
    <p>
      Enjoy using Notes 4.0!
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
h1 {
  font-size: 28px; /* Erhöht die Schriftgröße */
  font-weight: bold; /* Macht die Schrift fett */
}
h2 {
  font-size: 20px; /* Erhöht die Schriftgröße der Unterüberschrift */
}
ul {
  list-style-type: none; /* Entfernt die Aufzählungspunkte */
}
ul li {
  margin-bottom: 20px; /* Fügt einen Abstand unter jedem Listenelement hinzu */
}

#container {
  max-width: 800px; /* Begrenzt die maximale Breite des Containers */
  margin: auto; /* Zentriert den Container horizontal */
  padding: 20px; /* Fügt ein wenig Polsterung hinzu, um den Text vom Rand des Containers fernzuhalten */
}

p, ul {
  word-wrap: break-word; /* Fügt einen Zeilenumbruch hinzu, wenn der Text den Rand des Containers erreicht */
}
</style>
