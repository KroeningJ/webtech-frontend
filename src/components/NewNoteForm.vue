<template>
  <button class="btn btn-dark sticky-button" data-bs-toggle="offcanvas" data-bs-target="#notes-create-offcanvas" aria-controls="#notes-create-offcanvas">
    <i class="bi bi-journal-plus"></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
    </svg>
  </button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="notes-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Note</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="notes-create-form" novalidate @submit.prevent="createNote">
        <div class="mb-3">
          <label for="ldt" class="form-label">Date and Time</label>
          <input type="datetime-local" class="form-control" id="ldt" v-model="ldt" required>
          <div class="invalid-feedback">
            Please provide the date and time.
          </div>
        </div>
        <div class="mb-3">
          <label for="entry" class="form-label">Note Entry</label>
          <textarea class="form-control" id="entry" v-model="entry" required></textarea>
          <div class="invalid-feedback">
            Please provide the note entry.
          </div>
        </div>
        <div class="mb-3">
          <label for="noteCard" class="form-label">Color</label>
          <select class="form-control" id="noteCard" v-model="noteCard" required>
            <option value="note01.png">Blue</option>
            <option value="note03.png">Red</option>
          </select>
          <div class="invalid-feedback">
            Please select a note card.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'NewNoteForm',
  data () {
    return {
      ldt: new Date().toISOString().slice(0, 16),
      entry: '',
      noteCard: 'note01.png',
      serverValidationMessages: null
    }
  },
  methods: {
    createNote (event) {
      event.preventDefault()

      // Überprüfen, ob das Textfeld leer ist
      if (!this.entry.trim()) {
        this.serverValidationMessages = ['Error: Empty field']
        return
      }

      const note = {
        ldt: this.ldt,
        entry: this.entry,
        colour: this.noteCard === 'note01.png' ? 'blau' : 'rot'
      }

      const endpoint = 'https://webtech-notepad.onrender.com/api/v1/notes'

      axios.post(endpoint, note)
        .then(response => {
          this.serverValidationMessages = null
          this.resetForm()
          this.showSuccessNotification()
        })
        .catch(error => {
          console.log('error', error)
          if (error.response) {
            this.serverValidationMessages = error.response.data.errors
          } else {
            this.serverValidationMessages = ['An error occurred while trying to create the note.']
          }
        })
    },
    resetForm () {
      this.ldt = new Date().toISOString().slice(0, 16) // Setzt das Datum und die Uhrzeit auf die aktuelle Uhrzeit und das aktuelle Datum zurück
      this.entry = ''
      this.noteCard = 'note01.png'
    },
    showSuccessNotification () {
      window.alert('Note successfully created.') // Zeigt eine Benachrichtigung an, wenn eine Notiz erfolgreich erstellt wurde
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 50%; /* Zentriert den Button vertikal */
  right: 50%; /* Zentriert den Button horizontal */
  transform: translate(50%, 50%); /* Korrigiert die Positionierung, damit der Button genau in der Mitte ist */
  width: 100px; /* Setzt die Breite des Buttons */
  height: 100px; /* Setzt die Höhe des Buttons */
  padding: 20px 20px;
  border-radius: 50px; /* Macht den Button rund */
}
</style>
