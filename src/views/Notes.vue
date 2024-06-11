<template>
  <h1 align="left">Your Notes</h1>
  <div class="container-fluid">
    <notes-card-list :notes="this.notes"></notes-card-list>
  </div>
  <note-create-form @created="addPerson"></note-create-form>
</template>

<script>
import axios from 'axios'
import NotesCardList from '@/components/NoteList'
import NoteCreateForm from '@/components/NewNoteForm'
export default {
  name: 'Notes',
  components: {
    NotesCardList,
    NoteCreateForm
  },
  data () {
    return {
      notes: []
    }
  },
  mounted () {
    const endpoint = 'https://webtech-notepad.onrender.com' + '/api/v1/notes'

    axios.get(endpoint)
      .then(response => {
        this.notes = response.data
      })
      .catch(error => console.log('error', error))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
