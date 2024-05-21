<template>
  <button class="btn btn-dark sticky-button" data-bs-toggle="offcanvas" data-bs-target="#notes-create-offcanvas" aria-controls="#notes-create-offcanvas">
    <!-- Behalte das Logo bei -->
    <i class="bi bi-journal-plus"></i>
    <!-- Text "New Note" daneben -->
    <span class="ms-2">New Note</span>
  </button>

  <div class="offcanvas offcanvas-end" tabindex="-1" id="notes-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Note</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="notes-create-form" novalidate>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" required>
          <div class="invalid-feedback">
            Please provide a title for the note.
          </div>
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content</label>
          <textarea class="form-control" id="content" v-model="content" rows="3" required></textarea>
          <div class="invalid-feedback">
            Please provide some content for the note.
          </div>
        </div>
        <div class="mb-3">
          <label for="colour" class="form-label">Colour</label>
          <select id="colour" class="form-select" v-model="colour" required>
            <option value="" selected disabled>Choose...</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
          </select>
          <div class="invalid-feedback">
            Please select a colour for the note.
          </div>
        </div>
        <div class="mt-5">
          <!-- Farbe des "Create" Buttons zu #365c24 geändert -->
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createNote" style="background-color: #365c24; border-color: #365c24;">Create</button>
          <!-- Farbe des "Reset" Buttons zu Dunkelgelb geändert -->
          <button class="btn btn-danger" type="reset" style="background-color: #8B7500; border-color: #8B7500;">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewNoteForm',
  data () {
    return {
      title: '',
      content: '',
      colour: ''
    }
  },
  methods: {
    createNote () {
      // Implementiere die Logik, um eine neue Notiz mit den bereitgestellten Daten (Titel, Inhalt, Farbe) zu erstellen
      // Dies könnte eine API-Anfrage an deinen Backend-Server beinhalten
      console.log('Erstelle neue Notiz...')
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
