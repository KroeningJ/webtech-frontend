<template>
  <div class="modal" v-if="show" @click.self="close">
    <div class="modal-content">
      <h5>Edit Note</h5>
      <form class="text-start needs-validation" id="notes-edit-form" novalidate @submit.prevent="saveNote" @reset.prevent="resetForm">
        <div class="mb-3">
          <label for="ldt" class="form-label">Date and Time</label>
          <input type="datetime-local" class="form-control" id="ldt" v-model="noteData.ldt" required disabled>
          <div class="invalid-feedback">
            Please provide the date and time.
          </div>
        </div>
        <div class="mb-3">
          <label for="entry" class="form-label">Note Entry</label>
          <textarea class="form-control" id="entry" v-model="noteData.entry" required></textarea>
          <div class="invalid-feedback">
            Please provide the note entry.
          </div>
        </div>
        <div class="mb-3">
          <label for="noteCard" class="form-label">Color</label>
          <select class="form-control" id="noteCard" v-model="noteData.colour" required>
            <option value="blau">Blue</option>
            <option value="rot">Red</option>
            <option value="grün">Green</option>
          </select>
          <div class="invalid-feedback">
            Please select a note card.
          </div>
        </div>
        <div v-if="serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit">Save</button>
          <button class="btn btn-danger" type="reset">Reset</button>
          <button class="btn btn-secondary" @click="close">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditNoteForm',
  props: {
    note: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      noteData: { ...this.note },
      serverValidationMessages: null
    }
  },
  methods: {
    saveNote (event) {
      event.preventDefault()

      if (!this.noteData.entry.trim() || this.noteData.entry.length > 255) {
        this.serverValidationMessages = ['Error: Text field must be between 1 and 255 characters']
        return
      }

      const endpoint = `${process.env.VUE_APP_BACKEND_BASE_URL}/api/v1/notes/${this.noteData.id}`

      axios
        .put(endpoint, this.noteData)
        .then((response) => {
          this.serverValidationMessages = null
          this.resetForm()
          this.showSuccessNotification()
          this.$emit('note-updated')
          this.close()
        })
        .catch((error) => {
          console.log('error', error)
          if (error.response) {
            this.serverValidationMessages = error.response.data.errors
          } else {
            this.serverValidationMessages = [
              'An error occurred while trying to update the note.'
            ]
          }
        })
    },
    resetForm () {
      this.noteData = { ...this.note }
    },
    showSuccessNotification () {
      window.alert('Note successfully updated.')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
}
</style>
