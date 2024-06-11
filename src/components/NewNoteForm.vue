<template>
  <button class="btn btn-dark sticky-button" data-bs-toggle="offcanvas" data-bs-target="#persons-create-offcanvas" aria-controls="#persons-create-offcanvas">
    <i class="bi bi-journal-plus"></i>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-journal-plus" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
      <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
      <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
    </svg>
  </button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="persons-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Person</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="persons-create-form" novalidate>
        <div class="mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input type="text" class="form-control" id="first-name" v-model="firstName" required>
          <div class="invalid-feedback">
            Please provide the first name.
          </div>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="last-name" v-model="lastName" required>
          <div class="invalid-feedback">
            Please provide the last name.
          </div>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <select id="gender" class="form-select" v-model="gender" required>
            <option value="" selected disabled>Choose...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="DIVERSE">Diverse</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid gender.
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="vaccinated" v-model="vaccinated">
            <label class="form-check-label" for="vaccinated">
              Vaccinated
            </label>
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
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createPerson">Create</button>
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
      firstName: '',
      lastName: '',
      gender: '',
      vaccinated: false,
      serverValidationMessages: null
    }
  },
  methods: {
    createPerson () {
      const newNote = {
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        vaccinated: this.vaccinated
      }

      axios.post('https://webtech-notepad.onrender.com/api/v1/notes', newNote)
        .then(response => {
          // Handle success
          console.log(response.data)
        })
        .catch(error => {
          // Handle error
          console.log('error', error)
          if (error.response && error.response.data && error.response.data.errors) {
            this.serverValidationMessages = error.response.data.errors
          }
        })
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 20px 20px;
  border-radius: 60px;
}
</style>
