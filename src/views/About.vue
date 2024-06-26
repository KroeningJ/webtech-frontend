<template>
  <div id="container">
    <h1>About Notes 4.0</h1>
    <h2>Welcome to Notes 4.0, a simple and intuitive note-taking application by Jens Kroening (s570843) and Julius Kuke (s0549399). Here's how to use it:</h2>
    <ul>
      <li><strong>Login/Register:</strong> You have to login/register first before being able to see, create, edit and delete notes. When successfully logged in there will be a button "Logout" on the top right to sign out again.</li>
      <li><strong>Home:</strong> Navigate to the home page by clicking on the 'Home' link in the navigation bar.</li>
      <li><strong>Notes:</strong> View all your notes by clicking on the 'Notes' link in the navigation bar. Here, you can also delete and edit any note by clicking on the buttons "Delete" and "Edit" on each note. Moreover you can select multiple notes and delete them and you can filter for notes by color, name and date on the left side.</li>
      <li><strong>New Note:</strong> Create a new note by clicking on the 'New Note' link in the navigation bar and then on the appearing button. Fill in the date, time, note entry and select a note-card color, then click on the 'Create' button. You can reset the form by clicking on the 'Reset' button.</li>
    </ul>
    <p>
      <strong>Enjoy using Notes 4.0!</strong>
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
  font-size: 28px;
  font-weight: bold;
}
h2 {
  font-size: 13px;
}
ul {
  list-style-type: none;
}
ul li {
  margin-bottom: 20px;
}

#container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

p, ul {
  word-wrap: break-word;
}
</style>
