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
      <form class="text-start needs-validation" id="notes-create-form" novalidate @submit.prevent="createNote" @reset.prevent="resetForm">
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
            <option value="note02.png">Green</option>
          </select>
          <div class="invalid-feedback">
            Please select a note card.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: #881515">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" :style="{ backgroundColor: '#365c24' }">Create</button>
          <button class="btn btn-danger" type="reset" :style="{ backgroundColor: '#881515' }">Reset</button>        </div>
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
      ldt: this.getCurrentDateTime(),
      entry: '',
      noteCard: 'note02.png',
      serverValidationMessages: null
    }
  },
  methods: {
    createNote (event) {
      event.preventDefault()
      if (!this.entry.trim()) {
        this.serverValidationMessages = ['Error: Empty text field']
        return
      }
      if (!this.entry.trim() || this.entry.length > 255) {
        this.serverValidationMessages = ['Error: Text field must be between 1 and 255 characters']
        return
      }

      const note = {
        ldt: this.ldt,
        entry: this.entry,
        colour: this.getNoteColour()
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
      this.ldt = this.getCurrentDateTime()
      this.entry = ''
      this.noteCard = 'note01.png'
    },
    getNoteColour () {
      if (this.noteCard === 'note01.png') {
        return 'blau'
      } else if (this.noteCard === 'note02.png') {
        return 'grün'
      } else {
        return 'rot'
      }
    },
    getCurrentDateTime () {
      const dateTime = new Date()
      dateTime.setHours(dateTime.getHours() + 2)
      return dateTime.toISOString().slice(0, 16)
    },
    showSuccessNotification () {
      window.alert('Note successfully created.')
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
  width: 100px;
  height: 100px;
  padding: 20px 20px;
  border-radius: 50px;
}
</style>
